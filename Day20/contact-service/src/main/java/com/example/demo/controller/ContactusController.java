package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.contactus;
import com.example.demo.repository.ContactusRepository;
@CrossOrigin
@RestController
@RequestMapping("/contactus")
public class ContactusController 
{
	@Autowired
	private ContactusRepository repo; 

	@GetMapping("/test")
	public String test() 
	{
		return "hello";
	}
	
	@RequestMapping(path ="/id/{id}")
	public ResponseEntity<java.util.List<contactus>> getById(@PathVariable Integer id) 
	{
		
		List<contactus> listCitizen = repo.findByContactId(id);
		return new ResponseEntity<>(listCitizen, HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<contactus> addCitizen(@RequestBody contactus newcon) 
	{
		
        contactus con = repo.save(newcon);
		return new ResponseEntity<>(con, HttpStatus.OK);
	}
	
	@GetMapping("/get")
	public List<contactus> getContusDetails()
	{
		return repo.findAll();
	}
}
