package com.example.hospitalSy.model;

import javax.persistence.*;

@Entity
public class Hospital {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_hospital", nullable = false)
    private Integer idHospital;

    private String name;
    private String email;
    private String location;
    private String status;
    private String regin;

    public Integer getIdHospital() {
        return idHospital;
    }

    public void setIdHospital(Integer idHospital) {
        this.idHospital = idHospital;
    }


    public Hospital() {
    }

    public String getRegin() {
        return regin;
    }

    public void setRegin(String regin) {
        this.regin = regin;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


}
