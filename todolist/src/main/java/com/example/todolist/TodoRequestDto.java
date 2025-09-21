package com.example.todolist;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;

@Getter
public class TodoRequestDto {
    @NotBlank(message = "할 일 내용은 비워둘 수 없습니다.")
    private String task;

    private Boolean done;
}
