package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Userservice;
@Repository
public interface UserRepository extends JpaRepository<Userservice, Integer> {

}
