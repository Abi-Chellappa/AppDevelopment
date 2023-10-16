package com.example.demo.Contactus;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
@Data
public class Contactus 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int contactId;
	private String firstname;
    private String lastname;
    private String email;
    private String mobileno;
    private String message;
}