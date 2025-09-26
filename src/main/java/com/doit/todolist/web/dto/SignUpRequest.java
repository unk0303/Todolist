// SignUpRequest 클래스는 회원가입 요청 데이터를 담는 전용 DTO
//즉, 클라이언트(프론트엔드)에서 username / password를 JSON으로 보내면 이 클래스 객체에 매핑됨

package com.doit.todolist.web.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class SignUpRequest {
    @NotBlank @Size(min = 3, max = 30)
    public String username;
    @NotBlank @Size(min = 4, max = 60)
    public String password;
}
