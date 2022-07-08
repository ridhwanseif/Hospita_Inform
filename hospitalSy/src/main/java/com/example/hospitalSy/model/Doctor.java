package com.example.hospitalSy.model;

import javax.persistence.*;

@Entity
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_doctor", nullable = false)
    private Long idDoctor;

    private String name;
    private String email;

    private String location;

    private String hospital_NAme;
    private String professionalism;

    public Long getIdDoctor() {
        return idDoctor;
    }

    public void setIdDoctor(Long idDoctor) {
        this.idDoctor = idDoctor;
    }

    public Doctor() {
    }

    public String getHospital_NAme() {
        return hospital_NAme;
    }

    public void setHospital_NAme(String hospital_NAme) {
        this.hospital_NAme = hospital_NAme;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getProfessionalism() {
        return professionalism;
    }

    public void setProfessionalism(String professionalism) {
        this.professionalism = professionalism;
    }



}
