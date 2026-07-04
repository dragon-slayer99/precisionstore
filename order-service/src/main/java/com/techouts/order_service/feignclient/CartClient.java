package com.techouts.order_service.feignclient;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.techouts.order_service.config.FeignConfig;
import com.techouts.order_service.dto.CartResponseDTO;

@FeignClient(name = "CART-SERVICE",
        contextId = "cartClient",
        configuration = FeignConfig.class,
        fallback = CartClientFallback.class)
public interface CartClient {

    @GetMapping("/cart/items")
    CartResponseDTO serveCartItems(@RequestHeader("X-User-Id") Integer userId);


    @DeleteMapping("/cart/items")
    ResponseEntity<CartResponseDTO> emptyUserCart(@RequestHeader("X-User-Id") Integer userId);
}
