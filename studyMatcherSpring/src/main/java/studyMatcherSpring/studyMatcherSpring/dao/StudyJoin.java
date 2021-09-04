package studyMatcherSpring.studyMatcherSpring.dao;

import javax.persistence.*;

@Entity
public class StudyJoin {

    @Id @GeneratedValue
    @Column(name = "study_join_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "study_id")
    private Study study;
}
