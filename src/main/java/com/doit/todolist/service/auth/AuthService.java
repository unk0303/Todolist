// 회원가입 로직 담당 서비스
// UserRepository를 이용해 아이디 중복 체크
// PasswordEncoder로 비밀번호 암호화
// User 엔티티를 만들어 DB에 저장하고 반환

package com.doit.todolist.service.auth;

import com.doit.todolist.domain.user.User;
import com.doit.todolist.repository.user.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User signup(String username, String rawPassword) {
        if (userRepository.existsByUsername(username)) {
            throw new IllegalArgumentException("이미 존재하는 아이디입니다.");
        }
        String encoded = passwordEncoder.encode(rawPassword);
        User user = new User(username, encoded);
        return userRepository.save(user);
    }
}
