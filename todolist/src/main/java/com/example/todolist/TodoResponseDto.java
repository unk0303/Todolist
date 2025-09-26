package com.example.todolist;

import lombok.Getter;

@Getter
public class TodoResponseDto {
    private final Long id;
    private final String task;
    private final boolean done;

    public TodoResponseDto(Todo todo) {
        this.id = todo.getId();
        this.task = todo.getTask();
        this.done = todo.isDone();
    }
}
