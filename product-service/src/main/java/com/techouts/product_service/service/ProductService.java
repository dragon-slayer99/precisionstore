package com.techouts.product_service.service;


import com.techouts.product_service.dto.ProductDTO;
import com.techouts.product_service.model.Product;
import com.techouts.product_service.repository.ProductRepo;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    ProductRepo productRepoImpl;

    ProductService(ProductRepo productRepoImpl) {

        this.productRepoImpl = productRepoImpl;

    }

    @Transactional
    public ProductDTO getProduct(int productId) {

        Product product = productRepoImpl.findById (productId).orElse (null);

        if (product == null) {
            return new ProductDTO ("No product exist with this ID");
        }

        return new ProductDTO (
                product.getId (),
                product.getName (),
                product.getPrice (),
                product.getProductDescription (),
                product.getStock (),
                product.getCategory (),
                product.getProductImage ()
        );

    }

    @Transactional(readOnly = true)
    public List<Product> getProducts(String category) {

        List<Product> productsList = category == null || category.isBlank () ? productRepoImpl.findAll ()
                : productRepoImpl.findByCategory (category.toUpperCase ());

        return productsList == null ? new ArrayList<> () : productsList;

    }

    @Transactional(readOnly = true)
    public List<Product> getProducts(int page, String category) {

        int productCnt = 12;

        if (category == null) {
            return productRepoImpl.findAll (PageRequest.of (page - 1, productCnt)).stream ().toList ();
        }

        return productRepoImpl.findAllByCategory (category.toUpperCase (), PageRequest.of (page - 1, productCnt)).stream ().toList ();

    }

    @Transactional
    public void saveProduct(Product product) {

        productRepoImpl.save (product);

    }

    @Transactional
    public ProductDTO updateProductStock(int productId, int newStock) {

        Product product = productRepoImpl.findById (productId).orElse (null);

        if (product == null) {
            return new ProductDTO ("Product does not exist");
        }

        product.setStock (newStock);
        productRepoImpl.save (product);

        return new ProductDTO (
                product.getId (),
                product.getName (),
                product.getPrice (),
                product.getProductDescription (),
                product.getStock (),
                product.getCategory (),
                product.getProductImage ()
        );

    }


    @Transactional
    public ProductDTO updateProductDetails(ProductDTO newProductDetails) {

        Product currProduct = productRepoImpl.findById(newProductDetails.getProductId()).orElse(null);

        if(currProduct == null) {
            return new ProductDTO("Product does not exists");
        }

        currProduct.setName(newProductDetails.getName());
        currProduct.setProductImage(newProductDetails.getImageUrl());
        currProduct.setProductDescription(newProductDetails.getProductDesc());
        currProduct.setCategory(newProductDetails.getCategory());
        currProduct.setPrice(newProductDetails.getPrice());
        currProduct.setStock (newProductDetails.getStock ());

        productRepoImpl.save(currProduct);

        return new ProductDTO(
                "product updated successfully",
                newProductDetails.getProductId (),
                newProductDetails.getName(),
                newProductDetails.getPrice(),
                newProductDetails.getProductDesc (),
                newProductDetails.getCategory(),
                newProductDetails.getImageUrl (),
                newProductDetails.getStock()
        );

    }


    @Transactional
    public ProductDTO addProductToCollection(String name, float price, String productDescription, int stock, String category, String productImage) {
        Product savedProduct = productRepoImpl.save (new Product (name, price, productDescription, stock, category, productImage));

        return new ProductDTO (
                savedProduct.getId (),
                savedProduct.getName (),
                savedProduct.getPrice (),
                savedProduct.getProductDescription (),
                savedProduct.getStock (),
                savedProduct.getCategory (),
                savedProduct.getProductImage ()
        );

    }


}

