package com.doit.todolist.web.auth;

import com.doit.todolist.domain.user.User;
import com.doit.todolist.service.auth.AuthService;
import com.doit.todolist.web.dto.LoginRequest;
import com.doit.todolist.web.dto.SignUpRequest;
import com.doit.todolist.web.dto.UserResponse;
import jakarta.validation.Valid;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;
    private final AuthenticationManager authenticationManager;

    public AuthController(AuthService authService, AuthenticationManager authenticationManager) {
        this.authService = authService;
        this.authenticationManager = authenticationManager;
    }

    // 회원가입
    @PostMapping("/signup")
    public UserResponse signup(@Valid @RequestBody SignUpRequest req) {
        User saved = authService.signup(req.username, req.password);
        return new UserResponse(saved.getId(), saved.getUsername());
    }

    // 로그인
    @PostMapping("/login")
    public String login(@Valid @RequestBody LoginRequest req) {
        Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(req.username, req.password)
        );
        return "login ok: " + auth.getName();
    }
}
