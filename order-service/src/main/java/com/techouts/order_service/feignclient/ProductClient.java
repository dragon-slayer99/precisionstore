package com.techouts.order_service.feignclient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.techouts.order_service.config.FeignConfig;
import com.techouts.order_service.dto.ProductDTO;

@FeignClient(name = "PRODUCT-SERVICE",
                fallback = ProductClientFallback.class,
                configuration = FeignConfig.class
)

public interface ProductClient {

    @GetMapping("/api/products/{id}")
    ProductDTO getProductById(@PathVariable("id") int id);

    @PostMapping("/api/products/update")
    ProductDTO updateProductStock(@RequestParam(name = "productId") int productId, @RequestParam(name = "newStock") int newStock);

}
