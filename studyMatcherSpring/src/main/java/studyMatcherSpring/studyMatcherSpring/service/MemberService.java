package studyMatcherSpring.studyMatcherSpring.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import studyMatcherSpring.studyMatcherSpring.dao.Level;
import studyMatcherSpring.studyMatcherSpring.dao.Member;
import studyMatcherSpring.studyMatcherSpring.repository.MemberRepository;

import java.util.List;

@Service
@Slf4j
@Transactional(readOnly = true)
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    @Transactional
    public Member save(Member member) {
        member.setLevel(Level.UNRANKED);
        return memberRepository.save(member);
    }

    public Long login(Member member) {

        List<Member> members = memberRepository.findByEmail(member.getEmail());
        if(members.isEmpty()) {
            return 0L;
            //throw new IllegalStateException("wrong email");
        }
        Member findMember = members.get(0);

        log.debug("email={}, password={}", findMember.getEmail(), findMember.getPassword());
        log.debug("email={}, password={}", member.getEmail(), member.getPassword());
        if(!member.getPassword().equals(findMember.getPassword())) {
            return 0L;
            //throw new IllegalStateException("wrong password");
        }
        return findMember.getId();
    }

    public Boolean validateDuplicatedEmail(String email) {

        List<Member> members = memberRepository.findByEmail(email);
        if(members.isEmpty()) {
            return true;
            //throw new IllegalStateException("wrong email");
        }
        return false;
    }
}
