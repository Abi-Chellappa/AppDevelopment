package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="user_register")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RegisterEntity 
{
	 @Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 private int registerId;
	 private String username;
	 private String email;
	 private String mobileNo;
	 private String password;
	 private String Confirmpassword;
	
}
