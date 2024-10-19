package com.weather;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/weather")
@CrossOrigin(origins = "http://localhost:3000")
public class WeatherAPI {

    @Autowired
    WeatherService service;
    @GetMapping("/{cityName}")
    public Responses getCityTemparature(@PathVariable String cityName){

        return service.getWeatherData(cityName);
    }

}
