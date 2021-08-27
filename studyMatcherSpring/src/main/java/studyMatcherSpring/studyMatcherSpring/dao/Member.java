package studyMatcherSpring.studyMatcherSpring.dao;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter @Setter
public class Member {

    @Id @GeneratedValue
    @Column(name = "member_id")
    private Long id;

    private String name;

    private String email;

    private String password;

    @Embedded
    private Location location;

    @Enumerated(EnumType.STRING)
    private Level level;

    private LocalDate testDate = null;
}
