package com.perro.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.perro.entities.Biglietto;
import java.util.List;

public interface BigliettoDAO extends JpaRepository<Biglietto, Integer> {
	@Query("SELECT b FROM Biglietto b WHERE b.cod_cliente = ?1")
	List<Biglietto> getBigliettoByCodCliente(int codCliente);
}// Fine Interface