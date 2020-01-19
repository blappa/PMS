package com.project2.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.project2.repositories")
@ComponentScan("com.project2")
@EntityScan("com.project2.entities")
public class BackendmasterApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(BackendmasterApplication.class, args);
	}
	
	//Overriding configure method
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(BackendmasterApplication.class);
    }

}
