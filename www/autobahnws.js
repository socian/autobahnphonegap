function AutobahnWebSocket() {
	this.connect = function(address,successFunc, errorFunc) {
		
		cordova.exec(successFunc, errorFunc, 'AutobahnWebSocket', 'connect', [address]);
	}
}
module.exports = AutobahnWebSocket;
