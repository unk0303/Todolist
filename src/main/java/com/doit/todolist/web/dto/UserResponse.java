// UserResponse는 클라이언트에게 돌려줄 사용자 정보를 담는 DTO

package com.doit.todolist.web.dto;

public class UserResponse {
    public Long id;
    public String username;

    public UserResponse(Long id, String username) {
        this.id = id;
        this.username = username;
    }
}
