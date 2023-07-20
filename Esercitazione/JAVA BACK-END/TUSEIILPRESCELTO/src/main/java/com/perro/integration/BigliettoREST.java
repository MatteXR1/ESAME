package com.perro.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.perro.entities.Biglietto;
import com.perro.service.BigliettoService;

@RestController
@RequestMapping("api")
public class BigliettoREST {

	@Autowired
	private BigliettoService service;

	@GetMapping("/biglietti/{cod_cliente}")
	List<Biglietto> getBigliettiByCodCliente(@PathVariable int cod_cliente) {
		return service.getBigliettoByCod_cliente(cod_cliente);
	}
}// Fine class