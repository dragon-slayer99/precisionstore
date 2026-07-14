package com.techouts.user_service.controller;


import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techouts.user_service.dto.ProductDTO;
import com.techouts.user_service.dto.ProductInsertRequest;
import com.techouts.user_service.dto.ProductUpdateRequest;
import com.techouts.user_service.service.AdminService;

import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final AdminService adminService;

    AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @Hidden
    @GetMapping("users")
    public Map<String, Object> getAllUsers() {

        Map<String, Object> response = new HashMap<>();
        response.put("Users", adminService.getAllUsers());

        return response;
    }


    @Hidden
    @PutMapping("products/{id}/update")
    public ProductDTO updateProductDetails(@PathVariable int id, @RequestBody ProductUpdateRequest request) {

        ProductDTO productDTO = new ProductDTO(request.getId(), request.getName(), request.getPrice(), request.getProductDescription(), request.getStock(), request.getCategory(), request.getProductImage());

        return adminService.updateProduct(productDTO);
    }

    @Hidden
    @PostMapping("products/add")
    public ProductDTO AddProductToCollection(@Valid @RequestBody ProductInsertRequest request) {

        ProductDTO productDTO = new ProductDTO(request.getName(), request.getPrice(), request.getProductDescription(), request.getStock(), request.getCategory(), request.getProductImage());

        return adminService.addNewProduct(productDTO);
    }

}
