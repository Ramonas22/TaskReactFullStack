package com.task.tasksystem.controller;

import com.task.tasksystem.model.Message;
import com.task.tasksystem.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/message")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @PostMapping("/add")
    public String add(@RequestBody Message message){
        messageService.saveMessage(message);
        return "message added";
    }
}
