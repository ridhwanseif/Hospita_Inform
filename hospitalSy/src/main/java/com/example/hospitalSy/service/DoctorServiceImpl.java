package com.example.hospitalSy.service;

import com.example.hospitalSy.model.Doctor;
import com.example.hospitalSy.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorServiceImpl implements DoctorService {
    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public Doctor saveDoctor(Doctor doctor) {

        return doctorRepository.save(doctor);
    }

    @Override
    public List<Doctor> getAllDoctor() {
        return doctorRepository.findAll();
    }

    @Override
    public boolean deleteDoctor(Long idDoctor) {
        Doctor doctor = doctorRepository.findById(idDoctor).get();
        doctorRepository.delete(doctor);
        return true;
    }

    @Override
    public Doctor getDoctor(long idDoctor) {
        return doctorRepository.findById(idDoctor).get();
    }
}
