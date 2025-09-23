// UserRepository 는 User 엔티티(DB 테이블)와 직접 대화하는 역할을 하는 코드
// 즉, User 정보를 저장/조회/삭제하는 기능을 제공하는 DAO(Data Access Object) 같은 거예요.

package com.doit.todolist.repository.user;

import com.doit.todolist.domain.user.User;  // 엔티티 클래스 가져오기
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;  // Optional 타입을 쓰기 위한 임포트

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByUsername(String username);
    Optional<User> findByUsername(String username);
}
