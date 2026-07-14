package com.techouts.user_service.service;


import java.util.List;

import org.springframework.stereotype.Service;

import com.techouts.user_service.dto.ProductDTO;
import com.techouts.user_service.feignclient.ProductClient;
import com.techouts.user_service.model.User;
import com.techouts.user_service.repository.UserRepo;

@Service
public class AdminService {

    private final ProductClient productClient;
    private final UserRepo userRepoImpl;

    AdminService(ProductClient productClient, UserRepo userRepoImpl) {
        this.productClient = productClient;
        this.userRepoImpl = userRepoImpl;
    }


    public ProductDTO updateProduct(ProductDTO productDTO) {
        return productClient.updateProductDetails(productDTO);
    }

    public List<User> getAllUsers() {
        return userRepoImpl.findAll();
    }

    public ProductDTO addNewProduct(ProductDTO productDTO) {
        return productClient.addNewProductToCollection(productDTO);
    }


}
