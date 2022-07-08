package com.example.hospitalSy.service;

import com.example.hospitalSy.model.Doctor;

import java.util.List;

public interface DoctorService {
    public Doctor saveDoctor(Doctor doctor);
    public List<Doctor> getAllDoctor();

    boolean deleteDoctor(Long idDoctor);

    public Doctor getDoctor(long idDoctor);
}
