package com.perro.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.perro.entities.Cliente;
import com.perro.service.ClienteService;

@RestController
@RequestMapping("api")
public class ClienteREST {

	@Autowired
	private ClienteService service;

	@CrossOrigin
	@GetMapping("clienti")
	List<Cliente> lista() {
		return service.getClienti();
	}

	@CrossOrigin
	@PostMapping("clienti")
	Cliente addCliente(@RequestBody Cliente c) {
		return service.addCliente(c);
	}
}// Fine class