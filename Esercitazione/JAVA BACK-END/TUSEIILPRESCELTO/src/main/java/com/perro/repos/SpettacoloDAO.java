package com.perro.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.perro.entities.Spettacolo;

public interface SpettacoloDAO extends JpaRepository<Spettacolo, String> {
	@Query("SELECT s FROM Spettacolo s WHERE s.cod_Teatro = ?1")
	List<Spettacolo> getSpettacoloByCodTeatro(String codTeatro);
}// Fine Interface