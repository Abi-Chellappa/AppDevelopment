package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="contact")
public class contactus 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
    private String username;
    private String email;
    private String message;
    private int contactId;
}
