package com.meditoktok.project.servise;

import com.meditoktok.project.domain.Member;
import com.meditoktok.project.repository.MemberRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    /**
     * 회원가입
     */
    public Long join(Member member) {
        validateDuplicateMember(member); //중복 회원 검증
        memberRepository.save(member);
        return member.getSerial_number();

    }

    private void validateDuplicateMember(Member member) {
        memberRepository.findByName(member.getName()).ifPresent(m -> {
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        });
    }

    /**
     * 전체 회원 조회
     */
    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

    public Optional<Member> findOne(String id) {
        return memberRepository.findById(id);
    }

    /**
     * 로그인
     */

//    public boolean loginidchk(Member member) {
//        if (member.getId() == ) {
//            memberRepository.findById(member.getSerial_number());
//            return true;
//        }
//        else
//            return false;
//    }
}
