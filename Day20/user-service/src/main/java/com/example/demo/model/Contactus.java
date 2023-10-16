package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Contactus 
{
	private int id;
    private String username;
    private String email;
    private String message;
    private int contactId;
}
