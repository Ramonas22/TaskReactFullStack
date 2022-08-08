package com.task.tasksystem.controller;

import com.task.tasksystem.model.Message;
import com.task.tasksystem.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/getAll")
    public List<Message> getAllMessages(){
        return messageService.getAllMessages();
    }
}
