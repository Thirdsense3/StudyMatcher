package studyMatcherSpring.studyMatcherSpring.dao;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Study {

    @Id @GeneratedValue
    @Column(name = "study_id")
    private Long id;

    private String name;

    private String text;

    @Enumerated(EnumType.STRING)
    private Level level;

    @Embedded
    private Location location;

    @Enumerated(EnumType.STRING)
    private Type type;

    @Enumerated(EnumType.STRING)
    private Status status;

    @OneToMany(mappedBy = "study")
    private List<StudyJoin> studyJoins = new ArrayList<>();

    @OneToMany(mappedBy = "study")
    private List<StudyCategory> categories = new ArrayList<>();

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "study_page_id")
    private StudyPage studyPage;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "leader_id")
    private Member leader;
}
