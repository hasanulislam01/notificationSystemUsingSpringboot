package com.practice.WebSocketApplication;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Repository extends JpaRepository<Application, Long> {
}
