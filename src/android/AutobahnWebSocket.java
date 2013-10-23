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

	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		try {
			if(ACTION_CONNECT.equals(action)) {
				return createWSConnection(args, callbackContext);
			}
			return false;
		}
		catch(Exception e) {
			System.err.println("Exception: " + e.getMessage());
	        callbackContext.error(e.getMessage());
	        return false;
		}
	}
	
	private boolean createWSConnection(JSONArray args, CallbackContext callbackContext) throws JSONException {
		try {
			JSONObject argObject = args.getJSONObject(0);
			WebSocket ws = new WebSocketConnection();
			final String wsuri = argObject.getString("wsaddress");
			ws.connect(wsuri, new WebSocketConnectionHandler() {
				@Override
				public void onOpen() {
					
				}

				@Override
				public void onTextMessage(String payload) {
         
				}

				@Override
				public void onClose(int code, String reason) {
				}
			});
			return true;
		}
		catch(WebSocketException e) {
			System.err.println("Exception: " + e.getMessage());
			callbackContext.error(e.getMessage());
			return false;
		}
	}
}
