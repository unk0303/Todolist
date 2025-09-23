// UserDetailsService
//→ DB에서 username으로 User를 찾고, 스프링 시큐리티에서 쓸 수 있는 UserDetails 객체로 변환
//AuthenticationProvider
//→ 로그인 시 UserDetailsService + PasswordEncoder를 사용해 인증 처리
//SecurityFilterChain
//→ URL 접근 권한 설정 (/api/auth/**, /h2-console/**는 누구나 접근 가능, 나머지는 로그인 필요)
//→ H2 콘솔/CSRF 설정, 기본 로그인/로그아웃 제공
//AuthenticationManager
//→ 실제 인증 매니저를 Bean으로 노출 (다른 곳에서 주입받아 사용 가능)

package com.doit.todolist.config;

import com.doit.todolist.repository.user.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public UserDetailsService userDetailsService(UserRepository userRepository) {
        // DB에서 유저를 찾아 스프링시큐리티 UserDetails로 매핑
        return username -> userRepository.findByUsername(username)
                .map(u -> org.springframework.security.core.userdetails.User
                        .withUsername(u.getUsername())
                        .password(u.getPassword())
                        .roles(u.getRole()) // "USER"
                        .build())
                .orElseThrow(() -> new UsernameNotFoundException("사용자를 찾을 수 없습니다."));
    }

    @Bean
    public AuthenticationProvider authenticationProvider(
            UserDetailsService userDetailsService,
            org.springframework.security.crypto.password.PasswordEncoder encoder) {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(encoder);
        return provider;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.ignoringRequestMatchers("/h2-console/**", "/api/auth/**")) // 개발편의
                .headers(h -> h.frameOptions(f -> f.disable())) // H2 콘솔용
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/**", "/h2-console/**").permitAll()
                        .anyRequest().authenticated()
                )
                .formLogin(Customizer.withDefaults()) // 기본 폼 로그인도 열어둠(테스트용)
                .logout(Customizer.withDefaults());
        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration conf) throws Exception {
        return conf.getAuthenticationManager();
    }
}
