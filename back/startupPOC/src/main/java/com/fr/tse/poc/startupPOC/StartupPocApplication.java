package com.fr.tse.poc.startupPOC;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class StartupPocApplication {

	public static void main(String[] args) {
		SpringApplication.run(StartupPocApplication.class, args);
	}

}
