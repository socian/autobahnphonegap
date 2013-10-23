function AutobahnWebSocket() {
	
	var _this = this;
	
	this.onopen = function() {};
	this.onmessage = function() {};
	this.onerror = function() {};
	
	this.connect = function(host) {
		cordova.exec(_this.onopenHandler, _this.onerrorHandler , 'AutobahnWebSocket', 'onopen', []);
		cordova.exec(_this.onmessageHandler, _this.onerrorHandler , 'AutobahnWebSocket', 'onmessage', []);
		cordova.exec(null, _this.onerrorHandler, 'AutobahnWebSocket', 'onerror', []);
		
		var param = {'wshost' : host};
		cordova.exec(_this.onopenHandler, _this.errorHandler, 'AutobahnWebSocket', 'connect', [param]);
	}
	
	this.send = function(message) {
		var param = {'wsmessage':message};
		cordova.exec(null, this.onerror, 'AutobahnWebSocket', 'send', [param]);
	}
	
	this.onopenHandler = function() {
		_this.onopen.apply(_this.onopen, []);
	}
	
	this.onmessageHandler = function(msg) {
		_this.onmessage.apply(_this.onopen, []);
	}
	
	this.onerrorHandler = function(err) {
		_this.onerror.apply(_this.onerror, []);
	}
}
module.exports = AutobahnWebSocket;
