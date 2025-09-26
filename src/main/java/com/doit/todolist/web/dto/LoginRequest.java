package com.doit.todolist.web.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;  // ⬅️ 이 줄 추가해야 함

public class LoginRequest {
    @NotBlank @Size(min = 3, max = 30)
    public String username;

    @NotBlank @Size(min = 4, max = 60)
    public String password;
}
