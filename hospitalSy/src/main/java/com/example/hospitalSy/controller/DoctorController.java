package com.example.hospitalSy.controller;

import com.example.hospitalSy.model.Doctor;
import com.example.hospitalSy.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/doctor")
@CrossOrigin
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping("/add")
    public String add(@RequestBody Doctor doctor){
        doctorService.saveDoctor(doctor);
        return "New Doctor is added";
    }

    @GetMapping("/getAll")
    public List<Doctor> getAllDoctor(){
        return doctorService.getAllDoctor();
    }

    @DeleteMapping("/delete/{idDoctor}")
    public ResponseEntity<Map<String,Boolean>> deleteDoctor(@PathVariable Long idDoctor){
        boolean deleted = false;
        deleted = doctorService.deleteDoctor(idDoctor);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/edit/{idDoctor}")
    public Doctor getDoctor(@PathVariable String idDoctor){
        return this.doctorService.getDoctor(Long.parseLong(idDoctor));
    }
}
