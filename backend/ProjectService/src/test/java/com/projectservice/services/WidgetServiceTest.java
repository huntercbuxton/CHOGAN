package com.projectservice.services;

import com.projectservice.models.Widget;
import com.projectservice.repository.WidgetRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class WidgetServiceTest {

    private final WidgetRepo widgetRepo = Mockito.mock(WidgetRepo.class);

    private final WidgetService widgetService = new WidgetService(widgetRepo);

    /*
    *
    * Create
    *
    * */

    @Test
    void insertWidgetTest(){
        Widget widget = new Widget();
        widgetService.insertWidget(widget);
    }

    /*
    *
    * Read
    *
    * */

    @Test
    void findByWidgetIdTest(){
        String widgetId = "Id";
        Widget widget = new Widget();

        Mockito.when(widgetRepo.findByWidgetId(widgetId)).thenReturn(widget);

        Widget foundWidget = widgetService.findByWidgetId(widgetId);

        Assertions.assertEquals(foundWidget,widget);
    }

    /*
    *
    * Update
    *
    * */

    /*
    *
    * Delete
    *
    * */
}
