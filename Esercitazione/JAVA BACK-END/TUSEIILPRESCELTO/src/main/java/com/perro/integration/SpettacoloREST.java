package com.perro.integration;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.perro.entities.Spettacolo;

import com.perro.service.SpettacoloService;

@RestController
@RequestMapping("api")
public class SpettacoloREST {

	@Autowired
	private SpettacoloService service;
	
	@CrossOrigin
	@GetMapping("spettacoli")
	List<Spettacolo> lista() {
		return service.getSpettacolo();
	}
	
	@CrossOrigin
	@GetMapping("/spettacoli/{cod_Teatro}")
	List<Spettacolo> getSpettacoloByCodTeatro(@PathVariable String cod_Teatro){
		return service.getSpettacoloByCod_Teatro(cod_Teatro);
	}
	
	
}// Fine class