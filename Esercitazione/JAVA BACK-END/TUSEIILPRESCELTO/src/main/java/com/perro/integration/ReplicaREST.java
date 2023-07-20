package com.perro.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.perro.entities.Replica;

import com.perro.service.ReplicaService;

@RestController
@RequestMapping("api")
public class ReplicaREST {

	@Autowired
	private ReplicaService service;

	@GetMapping("repliche")
	List<Replica> lista() {
		return service.getRepliche();
	}
}// Fine class