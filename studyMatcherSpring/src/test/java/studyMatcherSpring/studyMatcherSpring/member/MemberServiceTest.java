package studyMatcherSpring.studyMatcherSpring.member;

import static org.assertj.core.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;
import studyMatcherSpring.studyMatcherSpring.dao.Level;
import studyMatcherSpring.studyMatcherSpring.dao.Location;
import studyMatcherSpring.studyMatcherSpring.dao.Member;
import studyMatcherSpring.studyMatcherSpring.service.MemberService;

@SpringBootTest
class MemberServiceTest {

    @Autowired
    MemberService memberService;

    @Test
    @Transactional
    @Rollback(false)
    public void save() {
        // given
        Member member = new Member();
        member.setEmail("wooky9633@naver.com");
        member.setName("kong");
        member.setPassword("288288");
        Location location = new Location("인천", "연수");
        member.setLocation(location);
        member.setLevel(Level.PLATINUM);

        // when
        Member saveMember = memberService.save(member);

        // then
        assertThat(saveMember).isEqualTo(member);
    }
}
