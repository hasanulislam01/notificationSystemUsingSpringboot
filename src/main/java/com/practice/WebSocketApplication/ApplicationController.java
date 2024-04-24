package com.practice.WebSocketApplication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class ApplicationController {

    private final ApplicationService applicationService;

    @Autowired
    private Repository repository;



//    @GetMapping("/insertion")
    @PostMapping("/insertion")
    public String InsertIntoDatabase(@ModelAttribute Application application, RedirectAttributes redirectAttributes, ModelMap modelMap){
        System.out.println(application);
        repository.save(application);
        System.out.println("Insertion Called");
        return "redirect:/";
    }

    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }



}
