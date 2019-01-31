package com.my.webdev.project.homepage.repo;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.my.webdev.project.homepage.entity.Message;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.File;
import java.io.PrintWriter;

@Component
public class MessageRepository {
    private ObjectMapper mapper = new ObjectMapper();
    private final String filePath = "message.json";
    private PrintWriter writer;

    @PostConstruct
    public void initialize() {
        File file = new File(filePath);
        try {
            writer = new PrintWriter(file);
        } catch (Exception e){
            throw new RuntimeException("Initializing MessageRepository failed. ", e);
        }
    }

    synchronized public void writeMessage(Message message) {
        try {
            String str = mapper.writeValueAsString(message);
            writer.println(str);
            writer.flush();
        } catch (Exception e) {
            throw new RuntimeException("Writing message failed. ", e);
        }
    }
}
