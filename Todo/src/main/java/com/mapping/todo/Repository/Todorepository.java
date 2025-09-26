package com.mapping.todo.Repository;

import com.mapping.todo.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Todorepository extends JpaRepository<Todo, Long> {
}
