package com.example.hospitalSy.service;

import com.example.hospitalSy.model.Hospital;
import com.example.hospitalSy.repository.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HospitalServiceImpl implements com.example.hospitalSy.service.HospitalService {

    @Autowired
    public HospitalRepository hospitalRepository;

    @Override
    public Hospital saveHospital(Hospital hospital){
        return hospitalRepository.save(hospital);
    }

    @Override
    public List<Hospital> getAllHospital(){
        return hospitalRepository.findAll();
    }

}
