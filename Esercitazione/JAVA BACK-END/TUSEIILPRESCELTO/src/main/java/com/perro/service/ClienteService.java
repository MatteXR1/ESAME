package com.perro.service;

import java.util.List;

import com.perro.entities.Cliente;

public interface ClienteService {

	List<Cliente> getClienti();

	Cliente getClienteById(int cod_cliente);

	Cliente addCliente(Cliente c);

}// Fine Interface