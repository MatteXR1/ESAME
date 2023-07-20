package com.perro.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "repliche")
public class Replica {

	@Id
	private String cod_replica;

	private String cod_spettacolo;
	private String data_replica;

	public String getCod_replica() {
		return cod_replica;
	}

	public void setCod_replica(String cod_replica) {
		this.cod_replica = cod_replica;
	}

	public String getCod_spettacolo() {
		return cod_spettacolo;
	}

	public void setCod_spettacolo(String cod_spettacolo) {
		this.cod_spettacolo = cod_spettacolo;
	}

	public String getData_replica() {
		return data_replica;
	}

	public void setData_replica(String data_replica) {
		this.data_replica = data_replica;
	}
}// Fine class