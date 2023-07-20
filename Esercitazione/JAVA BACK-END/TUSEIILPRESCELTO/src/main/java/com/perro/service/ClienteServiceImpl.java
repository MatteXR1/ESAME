package com.perro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.perro.entities.Cliente;
import com.perro.repos.ClienteDAO;

@Service
public class ClienteServiceImpl implements ClienteService {

	@Autowired
	private ClienteDAO dao;

	@Override
	public List<Cliente> getClienti() {

		return dao.findAll();
	}

	@Override
	public Cliente getClienteById(int cod_cliente) {

		return dao.findById(cod_cliente).get();
	}

	@Override
	public Cliente addCliente(Cliente c) {

		return dao.save(c);
	}
}// Fine class