package com.techouts.product_service.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {

    private String message;

    private Integer productId;

    @NotBlank
    private String name;

    @NotNull
    @Min(value = 1)
    private Float price;

    @NotBlank
    private String productDesc;

    @NotBlank
    private String category;

    @NotBlank
    private String imageUrl;

    @NotNull
    @Min(value = 1)
    private Integer stock;

    public ProductDTO(String message) {
        this.message = message;
    }

    public ProductDTO(int productId, String name, float price, String productDesc, int stock, String category, String imageUrl) {

        this.productId = productId;
        this.name = name;
        this.price = price;
        this.productDesc = productDesc;
        this.stock = stock;
        this.category = category;
        this.imageUrl = imageUrl;

    }

}
