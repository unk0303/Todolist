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
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
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

    @PostMapping("/signup")
    public UserResponse signup(@Valid @RequestBody SignUpRequest req) {
        User saved = authService.signup(req.username, req.password);
        return new UserResponse(saved.getId(), saved.getUsername());
    }

    @PostMapping("/login")
    public String login(@Valid @RequestBody LoginRequest req) {
        Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(req.username, req.password));
        // 세션이 생성되고, 이후 요청에서 인증 상태가 유지됨
        return "login ok: " + auth.getName();
    }
}

@RestController
@RequestMapping("/api/users")
class UserQueryController {
    @GetMapping("/me")
    public UserResponse me(@AuthenticationPrincipal UserDetails user) {
        return new UserResponse(null, user.getUsername());
    }
}
