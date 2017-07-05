package com.demo.controller;

import com.demo.param.HelloParam;
import com.demo.response.HelloResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;

/**
 * Created by heyuanxiang on 17/7/4.
 */
@RestController
@RequestMapping(path = "example")
public class Hello {
    private static final Logger LOGGER = LoggerFactory.getLogger(Hello.class);

    @RequestMapping(path = "hello", method = RequestMethod.GET)
    public HelloResponse hello(HelloParam param, HttpServletRequest request) {
        HelloResponse response = new HelloResponse();
        String name = null;
        try {
            name = new String(param.getName().getBytes("iso8859-1"),"utf-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        String str = String.format("Hello, %s", name);
        response.setHello(str);
        return response;
    }
}
