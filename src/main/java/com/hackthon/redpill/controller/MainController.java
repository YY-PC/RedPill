package com.hackthon.redpill.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hackthon.redpill.entity.Ledger;

@Controller
public class MainController {
	@RequestMapping(value = "/getLedger")
    public ResponseEntity<List<Ledger>> getCountry(
    		@RequestBody String requestData
    		) {

		Ledger c = new Ledger();
        c.setTransactionId("1");
        c.setAccountId("2");
        c.setEntryType("C");
        c.setAmount("100");
        List<Ledger> retList = new ArrayList<>();
        retList.add(c);
        HttpHeaders headers = new HttpHeaders();
        

        return ResponseEntity.accepted().headers(headers).body(retList);
    }

    @RequestMapping(value = "/getLedger2")
    @ResponseBody
    public Ledger getCountry2() {

    	Ledger c = new Ledger();
        c.setTransactionId("2");

        return c;
    }  
}
