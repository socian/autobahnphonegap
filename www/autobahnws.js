function AutobahnWebSocket() {
	
	var _this = this;
	
	this.onopen = function() {};
	this.onmessage = function() {};
	this.onerror = function() {};
	
	this.connect = function(host) {
		cordova.exec(_this.onopen, null , 'AutobahnWebSocket', 'onopen', []);
		cordova.exec(_this.onmessage, null , 'AutobahnWebSocket', 'onmessage', []);
		cordova.exec(null, _this.onerror, 'AutobahnWebSocket', 'onerror', []);
		
		var param = {'wshost' : host};
		cordova.exec(_this.onopenHandler, _this.errorHandler, 'AutobahnWebSocket', 'connect', [param]);
	}
	
	this.send = function(message) {
		var param = {'wsmessage':message};
		cordova.exec(null, _this.onerror, 'AutobahnWebSocket', 'send', [param]);
	}
}
module.exports = AutobahnWebSocket;
