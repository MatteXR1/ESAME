package com.perro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.perro.entities.Replica;
import com.perro.repos.ReplicaDAO;

@Service
public class ReplicaServiceImpl implements ReplicaService {

	@Autowired
	private ReplicaDAO dao;

	@Override
	public List<Replica> getRepliche() {
		return dao.findAll();
	}

	@Override
	public Replica getReplicaById(String cod_replica) {
		return dao.findById(cod_replica).get();
	}

	@Override
	public Replica addReplica(Replica r) {
		return dao.save(r);
	}

	@Override
	public List<Integer> getPostiByCod_replica(String cod_replica) {
		return dao.getPostiByCodReplica(cod_replica);
	}
}// Fine Class