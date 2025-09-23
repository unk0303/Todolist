// LoginRequest는 로그인 요청을 받을 때 클라이언트가 보낸 데이터(username, password)를 담는 DTO

package com.doit.todolist.web.dto;

import jakarta.validation.constraints.NotBlank;

public class LoginRequest {
    @NotBlank public String username;
    @NotBlank public String password;
}
