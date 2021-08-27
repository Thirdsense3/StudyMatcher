package studyMatcherSpring.studyMatcherSpring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import studyMatcherSpring.studyMatcherSpring.dao.Level;
import studyMatcherSpring.studyMatcherSpring.dao.Member;
import studyMatcherSpring.studyMatcherSpring.repository.MemberRepository;

@Service
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    public Member save(Member member) {
        member.setLevel(Level.UNRANKED);
        return memberRepository.save(member);
    }
}
