package com.techouts.product_service.controller;


import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.techouts.product_service.dto.ProductDTO;
import com.techouts.product_service.service.ProductService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    ProductController(ProductService productService) {

        this.productService = productService;

    }

    @GetMapping("{id}")
    public ProductDTO getProductById(@PathVariable int id) {

        return productService.getProduct(id);

    }

    @GetMapping
    public Map<String, Object> getProducts(@RequestParam(name = "page", required = false) Integer pageNo, @RequestParam(required = false) String category) {

        Map<String, Object> response = new HashMap<> ();

        if(pageNo == null) {

            response.put ("products", productService.getProducts (category));
            return response;
        }


        int totalProductsCnt = productService.getProducts(category).size();

        int pageIdx = Math.max (0, pageNo);

        response.put("products", productService.getProducts(pageIdx, category));
        response.put("totalPages", (int) Math.ceil((double) totalProductsCnt / 12));
        response.put("pageNo", pageIdx);

        return response;

    }

    @PatchMapping("{id}/stock")
    public ProductDTO updateProductStock(@PathVariable(name = "id") int productId, @RequestParam(name = "newStock") int newStock) {

        return productService.updateProductStock (productId, newStock);

    }

    @PatchMapping("{id}/update")
    public ProductDTO updateProductDetails(@Valid @ModelAttribute ProductDTO newProductDetails) {

        return productService.updateProductDetails(newProductDetails);

    }

    @PostMapping("add")
    public ProductDTO addNewProductToCollection(@Valid @ModelAttribute ProductDTO newProduct) {
        return productService.addProductToCollection(
                newProduct.getName(),
                newProduct.getPrice(),
                newProduct.getProductDesc(),
                newProduct.getStock(),
                newProduct.getCategory(),
                newProduct.getImageUrl()
        );
    }


}

