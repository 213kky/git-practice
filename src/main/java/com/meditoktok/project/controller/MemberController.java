package com.meditoktok.project.controller;


import com.meditoktok.project.domain.Member;
import com.meditoktok.project.servise.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Controller
public class MemberController {

    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("create") // 회원가입
    @ResponseBody
    public void create(
            @RequestParam("name") String name,
            @RequestParam("id") String id,
            @RequestParam("birth") String birth,
            @RequestParam("gender") String gender,
            @RequestParam("mail") String mail,
            @RequestParam("pw") String pw
    ) {
        Member member = new Member();
        member.setName(name);
        member.setId(id);
        member.setBirth(birth);
        member.setGender(gender);
        member.setPw(pw);
        member.setMail(mail);
        memberService.join(member); //저장
    }

    @GetMapping("/api/list") //전체 가입자 정보 반환
    @ResponseBody
    public List<Member> list() {
        List<Member> members = memberService.findMembers();
        return members;
    }

    @GetMapping("login") //id, pw 일치 -> true
    @ResponseBody
    public boolean login(
            @RequestParam("id") String id,
            @RequestParam("pw") String pw
    ) {
        List<Member> members = memberService.findMembers();
        for (Member m : members) {
            if (m.getId().equals(id)) {
                if (m.getPw().equals(pw)) {
                    return true;
                }

            }
        }
        //아이디 일치 확인
        //비밀번호 일치 확인
        return false;
    }

    @GetMapping("findid") //아이디 주면 비밀번호 반환
    @ResponseBody
    public String find(
            @RequestParam("id") String id
    ) {
        List<Member> members = memberService.findMembers();
        for (Member m : members) {
            if (m.getId().equals(id)) {
                return m.getPw();
            }
        }
        return "아이디 없음";
    }

//    @GetMapping("findinfo") //ㅠㅠㅠㅠ
//    @ResponseBody
//    public Optional<Member> findinfo(
//            @RequestParam("id") String id
//    ) {
////        Optional<Member> f= memberService.findOne(id);
////        Optional<Member> = f.get();
////        return member;
//    }

}

