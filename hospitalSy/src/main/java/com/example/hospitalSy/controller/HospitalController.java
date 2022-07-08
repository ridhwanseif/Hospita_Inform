package com.example.hospitalSy.controller;

import com.example.hospitalSy.model.Hospital;
import com.example.hospitalSy.service.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hospital")
@CrossOrigin
public class HospitalController {

    @Autowired
    private HospitalService hospitalService;

    @PostMapping("/add")
    public String add(@RequestBody Hospital hospital){
        hospitalService.saveHospital(hospital);
        return "New Hospital is added";
    }

    @GetMapping("/getAll")
    public List<Hospital> getAllHospital(){

        return hospitalService.getAllHospital();
    }
}
