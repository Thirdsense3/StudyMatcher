package studyMatcherSpring.studyMatcherSpring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import studyMatcherSpring.studyMatcherSpring.dao.Member;
import studyMatcherSpring.studyMatcherSpring.service.MemberService;

@RestController
@RequestMapping("/members")
public class MemberController {

    @Autowired
    private MemberService memberService;

    @PostMapping("/join")
    public Member join(@RequestBody  Member member) {
        return memberService.save(member);
    }
}
