package com.perro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.perro.entities.Spettacolo;
import com.perro.repos.SpettacoloDAO;

@Service
public class SpettacoloServiceImpl implements SpettacoloService {

	@Autowired
	private SpettacoloDAO dao;

	@Override
	public List<Spettacolo> getSpettacolo() {
		return dao.findAll();
	}

	@Override
	public Spettacolo getSpettacoloByID(String cod_Spettacolo) {
		return dao.findById(cod_Spettacolo).get();
	}

	@Override
	public Spettacolo addSpettacolo(Spettacolo s) {
		return dao.save(s);
	}
}// Fine class