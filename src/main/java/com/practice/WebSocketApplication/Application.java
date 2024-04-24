package com.practice.WebSocketApplication;

import jakarta.persistence.*;

@Entity
@Table(name = "leave_application")
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long applicationId;
    private String details;


    public Long getApplicationId() {
        return applicationId;
    }

    public void setApplicationId(Long applicationId) {
        this.applicationId = applicationId;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }


    @Override
    public String toString() {
        return "Application{" +
                "id=" + applicationId +
                ", details='" + details + '\'' +
                '}';
    }
}
