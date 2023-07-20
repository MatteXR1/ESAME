package com.perro.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.perro.entities.Spettacolo;

public interface SpettacoloDAO extends JpaRepository<Spettacolo, String> {

}// Fine Interface