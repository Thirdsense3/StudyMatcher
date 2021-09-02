package studyMatcherSpring.studyMatcherSpring.repository;

import studyMatcherSpring.studyMatcherSpring.dao.Member;

import javax.persistence.EntityManager;
import java.util.List;

public interface MemberRepository {

    Member save(Member member);
    List<Member> findByEmail(String email);
    List<Member> findAll();
}
