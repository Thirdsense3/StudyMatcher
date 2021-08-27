package studyMatcherSpring.studyMatcherSpring.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import studyMatcherSpring.studyMatcherSpring.dao.Member;

import javax.persistence.EntityManager;

@Repository
public class JpaMemberRepository implements MemberRepository{

    @Autowired
    private EntityManager em;

    @Override
    public Member save(Member member) {
        em.persist(member);
        return member;
    }
}
