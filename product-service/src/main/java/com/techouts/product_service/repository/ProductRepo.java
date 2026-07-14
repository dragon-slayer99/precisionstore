package com.techouts.product_service.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.techouts.product_service.model.Product;

public interface ProductRepo extends JpaRepository<Product, Integer> {

    List<Product> findByNameAndCategoryAndPriceAndProductDescriptionAndProductImage(String name, String category, float price, String productDescription, String productImage);

    List<Product> findByCategory(String category);

    Page<Product> findAllByCategory(String category, Pageable pageable);

}
