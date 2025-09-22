package com.mapping.todo.service;

import com.mapping.todo.entity.Todo;
import com.mapping.todo.Repository.Todorepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Todoservice {

    private final Todorepository todorepository;

    public Todoservice(Todorepository todorepository) {
        this.todorepository = todorepository;
    }

    public List<Todo> getAllTodos() {
        return todorepository.findAll();
    }

    public Todo createTodo(Todo todo) {
        return todorepository.save(todo);
    }

    public Todo updateTodo(Long id, Todo updatedTodo) {
        return todorepository.findById(id)
                .map(todo -> {
                    todo.setTask(updatedTodo.getTask());
                    todo.setCompleted(updatedTodo.isCompleted());
                    return todorepository.save(todo);
                })
                .orElseThrow(() -> new RuntimeException("Todo not found with id " + id));
    }

    public void deleteTodo(Long id) {
        todorepository.deleteById(id);
    }
}
