package com.techouts.product_service.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "products")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue
    private int id;

    private String name;

    private float price;

    @Column(name = "product_description", length = 50000)
    private String productDescription;

    @Column(nullable = false)
    private String category;

    @Column(name = "product_image")
    private String productImage;

    @Min(value = 0, message = "Stock value cannot be less than zero")
    private int stock;

    public Product(String name, float price, String productDescription, int stock, String category, String productImage) {

        this.name = name;
        this.price = price;
        this.productDescription = productDescription;
        this.stock = stock;
        this.category = category;
        this.productImage = productImage;

    }

}
