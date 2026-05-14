package com.techouts.product_service.controller;


import java.util.HashMap;
import java.util.Map;

import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import com.techouts.product_service.dto.ProductDTO;
import com.techouts.product_service.service.ProductService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/products")
@Tag(
        name = "Product Controller",
        description = "APIs for managing product catalog operations including product retrieval, creation, updation, and deletion."
)
public class ProductController {

    private final ProductService productService;

    ProductController(ProductService productService) {

        this.productService = productService;

    }

    @Operation(
            summary = "Get product by ID",
            description = "Fetches product details using the provided product ID."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Product fetched successfully"
            ),
            @ApiResponse(
                    responseCode = "500",
                    description = "Internal server error"
            )
    })
    @GetMapping("{id}")
    public ProductDTO getProductById(@PathVariable int id) {

        return productService.getProduct(id);

    }

    @Operation(
            summary = "Get all products",
            description = "Fetches all available products from the product catalog."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Products fetched successfully"
            ),
            @ApiResponse(
                    responseCode = "500",
                    description = "Internal server error"
            )
    })
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

    @Hidden
    @PatchMapping("{id}/stock")
    public ProductDTO updateProductStock(@PathVariable(name = "id") int productId, @RequestParam(name = "newStock") int newStock) {

        return productService.updateProductStock (productId, newStock);

    }

    @Hidden
    @PutMapping("{id}/update")
    public ProductDTO updateProductDetails(@Valid @RequestBody ProductDTO newProductDetails) {

        return productService.updateProductDetails(newProductDetails);

    }

    @Hidden
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

