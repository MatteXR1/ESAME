package com.perro.integration;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.perro.entities.Teatro;

import com.perro.service.TeatroService;

@RestController
@RequestMapping("api")
public class TeatroREST {

	@Autowired
	private TeatroService service;
	
	@CrossOrigin
	@GetMapping("teatri")
	List<Teatro> lista() {
		return service.getTeatri();
	}
}// Fine class