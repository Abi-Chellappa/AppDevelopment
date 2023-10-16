package com.example.demo.model;
import java.util.List;


import com.example.demo.entity.Userservice;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequiredResponse 
{
	private Userservice user;
	private List<Contactus> contact;
}
