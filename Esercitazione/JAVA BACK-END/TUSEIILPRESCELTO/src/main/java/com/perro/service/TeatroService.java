package com.perro.service;

import java.util.List;

import com.perro.entities.Teatro;

public interface TeatroService {

	List<Teatro> getTeatri();

	Teatro getTeatriById(String cod_Teatro);

	Teatro addTeatri(Teatro t);

}// Fine Interface