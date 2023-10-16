package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.contactus;
@Repository
public interface ContactusRepository extends JpaRepository<contactus, Integer> 
{
	public List<contactus> findByContactId(Integer id);
}
