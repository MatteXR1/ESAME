package com.perro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.perro.entities.Teatro;
import com.perro.repos.TeatroDAO;

@Service
public class TeatroServiceImpl implements TeatroService {

	@Autowired
	private TeatroDAO dao;

	@Override
	public List<Teatro> getTeatri() {
		return dao.findAll();
	}

	@Override
	public Teatro getTeatriById(String cod_Teatro) {
		return dao.findById(cod_Teatro).get();
	}

	@Override
	public Teatro addTeatri(Teatro t) {
		return null;
	}
}// Fine class