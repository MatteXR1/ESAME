package com.perro.integration;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.perro.entities.Replica;

import com.perro.service.ReplicaService;

@RestController
@RequestMapping("api")
public class ReplicaREST {

	@Autowired
	private ReplicaService service;
	
	@CrossOrigin
	@GetMapping("repliche")
	List<Replica> lista() {
		return service.getRepliche();
	}
	
	@CrossOrigin
	@GetMapping("/posti/{cod_replica}")
	List<Integer> getPostiByCodReplica(@PathVariable String cod_replica){
		return service.getPostiByCod_replica(cod_replica);
	}
}// Fine class