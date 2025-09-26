// 사용자(User) 테이블과 매핑되는 JPA 엔티티
// users 테이블에 id(기본키), username(유니크), password(BCrypt 해시 저장), role 컬럼을 가진 레코드를 표현
// JPA가 이 클래스를 보고 테이블을 자동 생성/업데이트하고, 애플리케이션에서 객체처럼 다룰 수 있게 해줌

package com.doit.todolist.domain.user;

import jakarta.persistence.*;   // JPA 매핑 애노테이션들(@Entity, @Id, @Column 등)
import jakarta.validation.constraints.NotBlank;     // Bean Validation(공백/빈 문자열 불가 검증) 애노테이션

@Entity
@Table(name = "users")  // 매핑될 실제 테이블 이름을 'users'로 지정
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // DB의 AUTO_INCREMENT 전략 사용
    private Long id;

    @NotBlank   // 공백/빈 문자열 허용 안 함(요청 DTO 바인딩 시 검증에 활용)
    @Column(name = "username", nullable = false, length = 30, unique = true) // 유니크+컬럼명 명시
    private String username;

    @NotBlank
    @Column(name = "password", nullable = false)
    private String password;  // BCrypt 해시 저장   // 비밀번호 해시(BCrypt 결과 문자열을 저장)

    @Column(name = "role", nullable = false, length = 20)
    private String role = "USER";

    protected User() {} // JPA 기본 생성자

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // getter
    public Long getId() { return id; }
    public String getUsername() { return username; }
    public String getPassword() { return password; }
    public String getRole() { return role; }
}

// @Entity + @Table: 클래스를 DB 테이블과 1:1로 매핑.
// @Id + @GeneratedValue(IDENTITY): PK를 DB가 자동 증가로 생성.
// @NotBlank: 컨트롤러에서 DTO 검증과 함께 쓰면 빈 값 방지에 유용.
// 비밀번호는 반드시 서비스 레이어에서 BCrypt 해시로 변환해서 저장해야 함(평문 저장 금지).
// protected User()는 JPA가 객체를 만들 때 필요하므로 제거하면 안됨.
