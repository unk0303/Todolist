package todo;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "todo")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 1000)
    private String description;

    private LocalDate dueDate;

    private boolean done;
}
