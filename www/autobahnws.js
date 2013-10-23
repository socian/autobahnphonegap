function AutobahnWebSocket() {
	
	var _this = this;
	
	this.onopen = function() {};
	this.onmessage = function() {};
	this.onerror = function() {};
	
	this.connect = function(host) {
		cordova.exec(_this.onopen, _this.onerror , 'AutobahnWebSocket', 'onopen', []);
		cordova.exec(_this.onmessage, _this.onerror , 'AutobahnWebSocket', 'onmessage', []);
		cordova.exec(_this.onopen, _this.onerror, 'AutobahnWebSocket', 'onopen', []);
		
		var param = {'wshost' : host};
		cordova.exec(_this.onopenHandler, _this.errorHandler, 'AutobahnWebSocket', 'connect', [param]);
	}
	
	this.send = function(message) {
		var param = {'wsmessage':message};
		cordova.exec(null, this.onerror, 'AutobahnWebSocket', 'send', [param]);
	}
}
module.exports = AutobahnWebSocket;
