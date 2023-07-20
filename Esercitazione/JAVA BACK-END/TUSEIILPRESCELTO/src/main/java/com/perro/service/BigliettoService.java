package com.perro.service;

import java.util.List;

import com.perro.entities.Biglietto;

public interface BigliettoService {

	List<Biglietto> getBiglietto();

	Biglietto getBigliettoById(int cod_operazione);

	Biglietto addBiglietto(Biglietto b);

	List<Biglietto> getBigliettoByCod_cliente(int cod_cliente);

}// Fine Interface