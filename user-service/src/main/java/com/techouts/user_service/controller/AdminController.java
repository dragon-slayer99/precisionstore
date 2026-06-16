package com.techouts.user_service.controller;


import com.techouts.user_service.dto.ProductDTO;
import com.techouts.user_service.dto.ProductInsertRequest;
import com.techouts.user_service.dto.ProductUpdateRequest;
import com.techouts.user_service.service.AdminService;
import com.techouts.user_service.service.UserService;
import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/admin")
//@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:5173"})
public class AdminController {

    private final AdminService adminService;
    private final UserService userService;

    AdminController(AdminService adminService, UserService userService) {
        this.adminService = adminService;
        this.userService = userService;
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
