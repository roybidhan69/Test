cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-speechrecognition.SpeechRecognition",
        "file": "plugins/cordova-plugin-speechrecognition/www/speechRecognition.js",
        "pluginId": "cordova-plugin-speechrecognition",
        "merges": [
            "window.plugins.speechRecognition"
        ]
    },
    {
        "id": "cordova-plugin-tts.tts",
        "file": "plugins/cordova-plugin-tts/www/tts.js",
        "pluginId": "cordova-plugin-tts",
        "clobbers": [
            "TTS"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-speechrecognition": "1.1.1",
    "cordova-plugin-tts": "0.2.3",
    "cordova-plugin-whitelist": "1.3.1"
};
// BOTTOM OF METADATA
});