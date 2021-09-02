package studyMatcherSpring.studyMatcherSpring.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import studyMatcherSpring.studyMatcherSpring.dao.Member;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class JpaMemberRepository implements MemberRepository{

    @Autowired
    private EntityManager em;

    @Override
    public Member save(Member member) {
        em.persist(member);
        return member;
    }

    @Override
    public List<Member> findByEmail(String email) {
        return em.createQuery("select m from Member m where email = :email", Member.class)
                .setParameter("email", email)
                .getResultList();
    }

    @Override
    public List<Member> findAll() {
        return em.createQuery("select m from Member m", Member.class)
                .getResultList();
    }
}
