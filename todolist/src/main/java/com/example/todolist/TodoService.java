package com.example.todolist;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor

public class TodoService {
    private final TodoRepository todoRepository;

    public List<TodoResponseDto> findAll() {
        return todoRepository.findAll().stream()
                .map(TodoResponseDto::new)
                .collect(Collectors.toList());
    }

    public TodoResponseDto save(TodoRequestDto requestDto) {
        Todo newTodo = new Todo(null, requestDto.getTask(), false);
        Todo savedTodo = todoRepository.save(newTodo);
        return new TodoResponseDto(savedTodo);
    }

    @Transactional
    public TodoResponseDto update(Long id, TodoRequestDto requestDto) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 ID의 할 일이 없습니다. id=" + id));

        todo.setDone(requestDto.getDone());

        return new TodoResponseDto(todo);
    }
}
