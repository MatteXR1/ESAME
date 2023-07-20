package com.perro.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.perro.entities.Biglietto;
import com.perro.repos.BigliettoDAO;

@Service
public class BigliettoServiceImpl implements BigliettoService {

	@Autowired
	private BigliettoDAO dao;

	@Override
	public List<Biglietto> getBiglietto() {
		return dao.findAll();
	}

	@Override
	public Biglietto getBigliettoById(int cod_operazione) {
		return dao.findById(cod_operazione).get();
	}

	@Override
	public Biglietto addBiglietto(Biglietto b) {
		return dao.save(b);
	}

	@Override
    public List<Biglietto> getBigliettoByCod_cliente(int cod_cliente) {
        return dao.getBigliettoByCodCliente(cod_cliente);
    }
}// Fine Class