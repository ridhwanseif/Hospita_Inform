package com.example.hospitalSy.service;

import com.example.hospitalSy.model.Hospital;


import java.util.List;

public interface HospitalService {

    Hospital saveHospital(Hospital hospital);

    List<Hospital> getAllHospital();
}
