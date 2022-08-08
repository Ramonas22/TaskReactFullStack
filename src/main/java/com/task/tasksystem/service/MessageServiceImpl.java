package com.task.tasksystem.service;

import com.task.tasksystem.model.Message;
import com.task.tasksystem.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageServiceImpl implements MessageService{

    @Autowired
    private MessageRepository messageRepository;

    @Override
    public Message saveMessage(Message message) {
        return messageRepository.save(message);
    }
}
