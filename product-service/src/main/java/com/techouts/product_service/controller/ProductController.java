package com.techouts.product_service.controller;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.techouts.product_service.dto.ProductDTO;
import com.techouts.product_service.model.Product;
import com.techouts.product_service.service.ProductService;

import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.annotation.PostConstruct;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/products")
@Tag(
        name = "Product Controller",
        description = "APIs for managing product catalog operations including product retrieval, creation, updation, and deletion."
)
public class ProductController {

   @PostConstruct
    public void addProductsInitially() {

        List<Product> productList = new ArrayList<>();

        productList.add(new Product("Hiking Boots Pro", 908, "This premium hiking boots delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this hiking boots will exceed your expectations and become an indispensable part of your routine.", 80, "HOME", "product_1.jpg"));
        productList.add(new Product("LED Desk Lamp Ultra", 2178, "This premium led desk lamp delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this led desk lamp will exceed your expectations and become an indispensable part of your routine.", 149, "ELECTRONICS", "product_2.jpg"));
        productList.add(new Product("Board Game Classic", 1019, "This premium board game delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this board game will exceed your expectations and become an indispensable part of your routine.", 17, "ELECTRONICS", "product_3.jpg"));
        productList.add(new Product("Stainless Steel Bottle Ultra", 8778, "This premium stainless steel bottle delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this stainless steel bottle will exceed your expectations and become an indispensable part of your routine.", 92, "KITCHEN", "product_4.jpg"));
        productList.add(new Product("Travel Pillow Elite", 1245, "This premium travel pillow delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this travel pillow will exceed your expectations and become an indispensable part of your routine.", 45, "BAGS", "product_5.jpg"));
        productList.add(new Product("Wireless Headphones Deluxe", 4567, "This premium wireless headphones delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this wireless headphones will exceed your expectations and become an indispensable part of your routine.", 63, "ELECTRONICS", "product_6.jpg"));
        productList.add(new Product("Yoga Mat Max", 689, "This premium yoga mat delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this yoga mat will exceed your expectations and become an indispensable part of your routine.", 112, "SPORTS", "product_7.jpg"));
        productList.add(new Product("Smartphone Case", 799, "This premium smartphone case delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this smartphone case will exceed your expectations and become an indispensable part of your routine.", 134, "ELECTRONICS", "product_8.jpg"));
        productList.add(new Product("Running Shoes Classic", 3299, "This premium running shoes delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this running shoes will exceed your expectations and become an indispensable part of your routine.", 28, "SPORTS", "product_9.jpg"));
        productList.add(new Product("Laptop Backpack Pro", 1899, "This premium laptop backpack delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this laptop backpack will exceed your expectations and become an indispensable part of your routine.", 67, "BAGS", "product_10.jpg"));
        productList.add(new Product("Coffee Maker Ultra", 5499, "This premium coffee maker delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this coffee maker will exceed your expectations and become an indispensable part of your routine.", 41, "KITCHEN", "product_11.jpg"));
        productList.add(new Product("Bluetooth Speaker Elite", 2345, "This premium bluetooth speaker delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this bluetooth speaker will exceed your expectations and become an indispensable part of your routine.", 85, "ELECTRONICS", "product_12.jpg"));
        productList.add(new Product("Fitness Tracker Deluxe", 2999, "This premium fitness tracker delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this fitness tracker will exceed your expectations and become an indispensable part of your routine.", 52, "ELECTRONICS", "product_13.jpg"));
        productList.add(new Product("Sunglasses Max", 1499, "This premium sunglasses delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this sunglasses will exceed your expectations and become an indispensable part of your routine.", 76, "CLOTHING", "product_14.jpg"));
        productList.add(new Product("Denim Jacket", 2599, "This premium denim jacket delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this denim jacket will exceed your expectations and become an indispensable part of your routine.", 33, "CLOTHING", "product_15.jpg"));
        productList.add(new Product("Portable Charger Pro", 1299, "This premium portable charger delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this portable charger will exceed your expectations and become an indispensable part of your routine.", 98, "ELECTRONICS", "product_16.jpg"));
        productList.add(new Product("Noise Cancelling Earbuds Ultra", 3899, "This premium noise cancelling earbuds delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this noise cancelling earbuds will exceed your expectations and become an indispensable part of your routine.", 61, "ELECTRONICS", "product_17.jpg"));
        productList.add(new Product("Gaming Mouse Classic", 1678, "This premium gaming mouse delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this gaming mouse will exceed your expectations and become an indispensable part of your routine.", 47, "ELECTRONICS", "product_18.jpg"));
        productList.add(new Product("Skincare Kit Elite", 2199, "This premium skincare kit delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this skincare kit will exceed your expectations and become an indispensable part of your routine.", 39, "BEAUTY", "product_19.jpg"));
        productList.add(new Product("Cookware Set Deluxe", 6799, "This premium cookware set delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this cookware set will exceed your expectations and become an indispensable part of your routine.", 24, "KITCHEN", "product_20.jpg"));
        productList.add(new Product("Electric Kettle Max", 1849, "This premium electric kettle delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this electric kettle will exceed your expectations and become an indispensable part of your routine.", 71, "KITCHEN", "product_21.jpg"));
        productList.add(new Product("Wireless Keyboard Pro", 2549, "This premium wireless keyboard delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this wireless keyboard will exceed your expectations and become an indispensable part of your routine.", 55, "ELECTRONICS", "product_22.jpg"));
        productList.add(new Product("Sofa Cover Ultra", 3299, "This premium sofa cover delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this sofa cover will exceed your expectations and become an indispensable part of your routine.", 18, "HOME", "product_23.jpg"));
        productList.add(new Product("Makeup Brush Set Classic", 1249, "This premium makeup brush set delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this makeup brush set will exceed your expectations and become an indispensable part of your routine.", 82, "BEAUTY", "product_24.jpg"));
        productList.add(new Product("Ceramic Mug Set", 899, "This premium ceramic mug set delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this ceramic mug set will exceed your expectations and become an indispensable part of your routine.", 105, "KITCHEN", "product_25.jpg"));
        productList.add(new Product("Backpack Elite", 2199, "This premium backpack delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this backpack will exceed your expectations and become an indispensable part of your routine.", 64, "BAGS", "product_26.jpg"));
        productList.add(new Product("Water Bottle Deluxe", 699, "This premium water bottle delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this water bottle will exceed your expectations and become an indispensable part of your routine.", 138, "KITCHEN", "product_27.jpg"));
        productList.add(new Product("Desk Organizer Max", 1249, "This premium desk organizer delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this desk organizer will exceed your expectations and become an indispensable part of your routine.", 93, "HOME", "product_28.jpg"));
        productList.add(new Product("Skincare Kit", 687, "This premium skincare kit delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this skincare kit will exceed your expectations and become an indispensable part of your routine.", 39, "BEAUTY", "product_29.jpg"));
        productList.add(new Product("Gaming Mouse Pro", 3426, "This premium gaming mouse delivers exceptional performance and style. Built with high-grade materials for durability and comfort, it is perfect for daily use or special occasions. The thoughtful design incorporates user-friendly features that enhance convenience and satisfaction. Customers rave about its reliability, sleek aesthetics, and value for money. Whether you are a busy professional, an avid traveler, or someone who appreciates quality goods, this gaming mouse will exceed your expectations and become an indispensable part of your routine.", 139, "ELECTRONICS", "product_30.jpg"));

        for(Product product : productList) {
            productService.saveProduct(product);
        }
    }

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

        Map<String, Object> response = new HashMap<>();

        if (pageNo == null) {

            response.put("products", productService.getProducts(category));
            return response;
        }


        int totalProductsCnt = productService.getProducts(category).size();

        int pageIdx = Math.max(0, pageNo);

        response.put("products", productService.getProducts(pageIdx, category));
        response.put("totalPages", (int) Math.ceil((double) totalProductsCnt / 12));
        response.put("pageNo", pageIdx);

        return response;

    }

    @Hidden
    @PatchMapping("{id}/stock")
    public ProductDTO updateProductStock(@PathVariable(name = "id") int productId, @RequestParam(name = "newStock") int newStock) {

        return productService.updateProductStock(productId, newStock);

    }

    @Hidden
    @PutMapping("{id}/update")
    public ProductDTO updateProductDetails(@Valid @RequestBody ProductDTO newProductDetails) {

        return productService.updateProductDetails(newProductDetails);

    }

//    @Hidden
    @PostMapping("add")
    public ProductDTO addNewProductToCollection(@Valid @ModelAttribute ProductDTO newProduct) {
        return productService.addProductToCollection(
                newProduct.getName(),
                newProduct.getPrice(),
                newProduct.getProductDescription(),
                newProduct.getStock(),
                newProduct.getCategory(),
                newProduct.getProductImage()
        );
    }
}

