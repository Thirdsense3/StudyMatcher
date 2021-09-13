package studyMatcherSpring.studyMatcherSpring.repository;

import lombok.Getter;
import lombok.Setter;
import studyMatcherSpring.studyMatcherSpring.dao.Category;

@Getter @Setter
public class StudySearch {

    private Long leader_id;
    private Category category;
    private String studyName;
}
