package com.perro.service;

import java.util.List;

import com.perro.entities.Spettacolo;

public interface SpettacoloService {

	List<Spettacolo> getSpettacolo();

	Spettacolo getSpettacoloByID(String cod_Spettacolo);

	Spettacolo addSpettacolo(Spettacolo s);
}// Fine Interface