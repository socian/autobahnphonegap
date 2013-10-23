package net.socian.phonegap.wsautobahn;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;

import de.tavendo.autobahn.WebSocket;
import de.tavendo.autobahn.WebSocketConnection;
import de.tavendo.autobahn.WebSocketException;
import de.tavendo.autobahn.WebSocketConnectionHandler;

public class AutobahnWebSocket extends CordovaPlugin{
	
	public static final String ACTION_CONNECT = "connect";
	public static final String ACTION_SEND = "send";
	
	private CallbackContext successConnectCallback;

	private WebSocket ws;
	
	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		if(ACTION_CONNECT.equals(action)) {
			callbackContext.success();
			return true;
		}
		return false;
	}
}
