package com.practice.WebSocketApplication;

import org.json.JSONObject;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;

@Component
public class SocketTextHandler extends TextWebSocketHandler {

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws InterruptedException, IOException {
//        super.handleTextMessage(session, message);

        String payload = message.getPayload();
        JSONObject jsonObject = new JSONObject(payload);
//        String content = jsonObject.get("user").toString();
        session.sendMessage(new TextMessage(jsonObject.get("user").toString()));
    }
}







