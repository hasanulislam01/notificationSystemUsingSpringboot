package com.practice.WebSocketApplication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApplicationService {

    private Repository repository;

    @Autowired
    public ApplicationService(Repository repository) {
        this.repository = repository;
    }
}
