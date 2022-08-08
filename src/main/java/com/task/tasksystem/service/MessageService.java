package com.task.tasksystem.service;

import com.task.tasksystem.model.Message;

import java.util.List;

public interface MessageService {
    public Message saveMessage(Message message);
    public List<Message> getAllMessages();
}
