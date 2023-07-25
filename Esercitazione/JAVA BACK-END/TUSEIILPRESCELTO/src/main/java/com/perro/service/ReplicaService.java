package com.perro.service;

import java.util.List;

import com.perro.entities.Replica;

public interface ReplicaService {

	List<Replica> getRepliche();

	Replica getReplicaById(String cod_replica);

	Replica addReplica(Replica r);
	
	List<Integer> getPostiByCod_replica(String cod_replica);
	
}// Fine Interface