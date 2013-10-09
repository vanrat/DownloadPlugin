var DownloadPlugin = {
    downloadFile: function(fileUrl, params, win, fail) {
		//Make params hash optional.
		if (!fail) win = params;
		cordova.exec(win, fail, "DownloadPlugin", "downloadFile", [fileUrl, params]);
     }
}
module.exports = DownloadPlugin;
/*
cordova.define("cordova/plugin/downloader", function (require, exports, module) {
	var exec = require("cordova/exec");
		module.exports = {
			get: function (message, win, fail) {
				exec(win, fail, "Downloader", "get", [message]);
			}
		};
});
*/