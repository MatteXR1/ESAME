package com.perro.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "spettacoli")
public class Spettacolo {

	@Id
	private String cod_Spettacolo;

	private String titolo;
	private String autore;
	private String regista;
	private double prezzo;
	private String cod_Teatro;

	public String getCod_Spettacolo() {
		return cod_Spettacolo;
	}

	public void setCod_Spettacolo(String cod_Spettacolo) {
		this.cod_Spettacolo = cod_Spettacolo;
	}

	public String getTitolo() {
		return titolo;
	}

	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}

	public String getAutore() {
		return autore;
	}

	public void setAutore(String autore) {
		this.autore = autore;
	}

	public String getRegista() {
		return regista;
	}

	public void setRegista(String regista) {
		this.regista = regista;
	}

	public double getPrezzo() {
		return prezzo;
	}

	public void setPrezzo(double prezzo) {
		this.prezzo = prezzo;
	}

	public String getCod_Teatro() {
		return cod_Teatro;
	}

	public void setCod_Teatro(String cod_Teatro) {
		this.cod_Teatro = cod_Teatro;
	}
}// Fine class