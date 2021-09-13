package studyMatcherSpring.studyMatcherSpring.service;

import studyMatcherSpring.studyMatcherSpring.dao.Study;
import studyMatcherSpring.studyMatcherSpring.repository.StudySearch;

import java.util.List;

public interface StudyService {

    Study enroll(Study study);
    List<Study> findAllStudy(StudySearch studySearch);
    Study getStudyInform(Long id);
}
