package com.my.webdev.project.homepage.rest;

import com.my.webdev.project.homepage.entity.Message;
import com.my.webdev.project.homepage.repo.IdRepository;
import com.my.webdev.project.homepage.repo.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
public class MainController {
    @Autowired
    public IdRepository idRepository;

    @Autowired
    public MessageRepository messageRepository;

    @RequestMapping(method = RequestMethod.GET, path = "/hidden-mode/get-new-id")
        public String getHiddenModeId() {
        String newId = UUID.randomUUID().toString();
        idRepository.saveNewId(newId);
        return newId;
    }

    @RequestMapping(method = RequestMethod.GET, path = "/hidden-mode/validate")
    public boolean validateHiddenModeId(@RequestParam(name = "id") String id) {
        return idRepository.idExists(id);
    }

    @RequestMapping(method = RequestMethod.POST, path = "hidden-mode/leave-message")
    public boolean leaveMessages(Message message) {
        messageRepository.writeMessage(message);
        return true;
    }
}
