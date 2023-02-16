package com.meditoktok.project;

import com.meditoktok.project.repository.JpaMemberRepository;
import com.meditoktok.project.repository.MemberRepository;
import com.meditoktok.project.servise.MemberService;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfig {
    EntityManager em;
    @Autowired
    public SpringConfig(EntityManager em) {
        this.em = em;
    }

//    private final JpaMemberRepository jpaMemberRepository;



//    @Autowired
//    public SpringConfig(JpaMemberRepository jpaMemberRepository) {
//        this.jpaMemberRepository = jpaMemberRepository;
//    }
//
//    @Bean
//    public MemberService memberService() {
//        return new MemberService(jpaMemberRepository);
//    }
    @Bean
    public MemberRepository memberRepository() {
//        return new MemoryMemberRepository();
        return new JpaMemberRepository(em);
    }


}
