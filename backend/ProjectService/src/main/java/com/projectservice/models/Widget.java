package com.projectservice.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
* Pojo for Widgets
* */
@Data
@Document
public class Widget {
    @Id
    private String widgetId;
    private String widgetName;
    private String widgetDescription;
}
