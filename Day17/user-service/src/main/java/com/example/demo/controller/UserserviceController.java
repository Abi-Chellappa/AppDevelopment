package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.demo.entity.Userservice;
import com.example.demo.model.Contactus;
import com.example.demo.model.RequiredResponse;
import com.example.demo.repository.UserRepository;

@RestController
@RequestMapping("/user")
public class UserserviceController 
{
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private RestTemplate restTemplate;
	
	@PostMapping(path ="/add")
	public ResponseEntity<Userservice> addContact(@RequestBody Userservice userService) {
		
		Userservice userAdded = userRepo.save(userService);
		return new ResponseEntity<>(userAdded, HttpStatus.OK);
	}
	
	@RequestMapping(path ="/id/{id}")
	public ResponseEntity<RequiredResponse> getAllDadaBasedonUserId(@PathVariable Integer id)
	{
		RequiredResponse requiredResponse =  new RequiredResponse();
		
		Userservice user  = userRepo.findById(id).get();
		requiredResponse.setUser(user);
		
		
		
		List<Contactus> listOfCitizens = restTemplate.getForObject("http://CONTACTUSSERVICE/contactus/id/"+id, List.class);
		requiredResponse.setContact(listOfCitizens);
		return new ResponseEntity<RequiredResponse>(requiredResponse, HttpStatus.OK);
	}
	
	@GetMapping("/get")
	public List<Userservice> getContactusDetails()
	{
		return userRepo.findAll();
	}
}
