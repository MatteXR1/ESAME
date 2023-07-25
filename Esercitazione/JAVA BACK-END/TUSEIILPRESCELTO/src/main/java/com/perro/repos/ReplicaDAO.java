package com.perro.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.perro.entities.Replica;

public interface ReplicaDAO extends JpaRepository<Replica, String> {
	@Query("SELECT posti FROM Replica r WHERE r.cod_replica = ?1")
	List<Integer> getPostiByCodReplica(String codReplica);
}// Fine Interface