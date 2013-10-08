var DownloadPlugin = {
    downloadFile: function(fileUrl, params, win, fail) {
		//Make params hash optional.
		if (!fail) win = params;
		cordova.exec(win, fail, "DownloadPlugin", "downloadFile", [fileUrl, params]);
     }
}
module.exports = DownloadPlugin;