<?php

require __DIR__ . "/../vendor/autoload.php";
require __DIR__ . "/config.php";

use PhpMqtt\Client\ConnectionSettings;
use PhpMqtt\Client\MqttClient;


class BarLightAPI {
    /**
     * @var string global mqtt preqix (with ending slash!)
     */
    private string $prefix = "xyz/bar/";


    public function __construct() {
    }


    /**
     * The function to make the MQTT topic path.
     *
     * @param mixed ...$args: the parts.
     * @return string: the topic.
     */
    private function topic(...$args) {
        return $this->prefix . join("/", $args);
    }


    private function color($rgb) {
        preg_match('/rgb\((\d+),(\d+),(\d+)\)/m', $rgb, $colors);
        return [
            "r" => $colors[1],
            "g" => $colors[2],
            "b" => $colors[3]
        ];
    }


    /**
     * The function to send a light command.
     *
     * @param $light: the light to control.
     * @param $data: the data as PHP-array.
     */
    private function mqtt_control_light($light, $data) {
        $this->mqtt_publish_json($this->topic("light", $light, "command"), json_encode($data));
    }


    /**
     * The function to publish JSON to a MQTT topic.
     *
     * @param $topic: the topic to publish to.
     * @param $json: the data as JSON.
     */
    private function mqtt_publish_json($topic, $json) {
        $client = new MqttClient(MQTT_BROKER_HOST, MQTT_BROKER_PORT, MQTT_CLIENT_ID);
        $connectionSettings = (new ConnectionSettings)
            ->setUsername(AUTHORIZATION_USERNAME)
            ->setPassword(AUTHORIZATION_PASSWORD);
        $client->connect($connectionSettings, true);
        $client->publish($topic, $json, MqttClient::QOS_AT_LEAST_ONCE);
        $client->disconnect();
    }


    /**
     * Turn off a specific light.
     *
     * @param $light: the light.
     */
    public function turn_off_light($light) {
        $this->mqtt_control_light($light, ["state" => "off", "effect" => "none", "timestamp" => date("U")]);
    }


    /**
     * Switches a light to a specific color.
     *
     * @param $light: the light.
     * @package $color: the color in RGB string format [rgb(rrr,ggg,bbb)].
     */
    public function switch_color($light, $color, $brightness = null) {
        $this->mqtt_control_light($light, ["effect" => "none", "state" => "on", "color" => $this->color($color), "brightness" => $brightness]);
    }


    /**
     * Switches a light to a specific effect.
     *
     * @param $effect: the effect.
     * @package $color: the color in RGB string format [rgb(rrr,ggg,bbb)].
     */
    public function run_effect($light, $effect, $color, $brightness = null) {
        $this->mqtt_control_light($light, ["effect" => $effect, "state" => "on", "color" => $this->color($color), "brightness" => $brightness]);
    }
}


$barLightAPI = new BarLightAPI();

if(isset($_GET["off"])) {
    $barLightAPI->turn_off_light($_GET["off"]);
}

if(isset($_GET["color"])) {
    $barLightAPI->switch_color($_GET["light"], $_GET["color"], $_GET["brightness"] ?? null);
}

if(isset($_GET["effect"])) {
    $barLightAPI->run_effect($_GET["light"], $_GET["effect"], $_GET["eff_color"]);
}