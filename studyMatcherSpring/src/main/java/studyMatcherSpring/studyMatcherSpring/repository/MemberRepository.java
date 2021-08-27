package studyMatcherSpring.studyMatcherSpring.repository;

import studyMatcherSpring.studyMatcherSpring.dao.Member;

import javax.persistence.EntityManager;

public interface MemberRepository {

    Member save(Member member);
}
