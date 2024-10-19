package com.weather;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {

    @Value("${weather.api-key}")
    private String api_key;

    @Value("${weather.base-url}")
    private String base_url;
    @Autowired
    RestTemplate restTemplate;


    public Responses getWeatherData(String city){
        String url = base_url + "?key=" + api_key + "&q=" + city + "&aqi=no";
       return restTemplate.getForObject(url, Responses.class);
    }
}
