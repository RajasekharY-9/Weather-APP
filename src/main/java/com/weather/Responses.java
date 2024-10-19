package com.weather;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Responses {

    Location location;
    Current current;

    @Data
    public class Location {
        String name;
        String country;
        private String localtime;
    }

    @Data
    public class Current {
        float temp_c;
        Condition condition;

    }

    @Data
    public static class Condition {
        private String text;
        private String icon;
    }
}
