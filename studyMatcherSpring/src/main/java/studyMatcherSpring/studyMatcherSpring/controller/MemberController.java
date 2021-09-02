package studyMatcherSpring.studyMatcherSpring.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;
import studyMatcherSpring.studyMatcherSpring.dao.Member;
import studyMatcherSpring.studyMatcherSpring.dto.ResponseMember;
import studyMatcherSpring.studyMatcherSpring.service.MemberService;

@RestController
@RequestMapping("/members")
@Slf4j
public class MemberController {

    @Autowired
    private MemberService memberService;

    @PostMapping("/join")
    public Member join(@RequestBody  Member member) {
        return memberService.save(member);
    }

    @PostMapping("/login")
    public ResponseMember login(@RequestBody Member member) {

        Long loginId = memberService.login(member);

        if(loginId == 0L) {
            return new ResponseMember("wrong email or password");
        }
        return new ResponseMember(loginId);
    }

    @GetMapping("/duplicate-check/{email}")
    public String duplicateCheck(@PathVariable String email) {
        if(memberService.validateDuplicatedEmail(email)) {
            return "possible email";
        }
        return "duplicated email";
    }
}
