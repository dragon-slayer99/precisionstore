package com.techouts.order_service.feignclient;

import java.util.Map;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;

import com.techouts.order_service.config.FeignConfig;
import com.techouts.order_service.dto.CartResponseDTO;

@FeignClient(name = "API-GATEWAY",
        contextId = "cartClient",
        configuration = FeignConfig.class,
        fallback = CartClientFallback.class)
public interface CartClient {

    @GetMapping("/api/cart/items")
    CartResponseDTO serveCartItems(@RequestHeader("X-User-Id") Integer userId);


    @DeleteMapping("/api/cart/items")
    ResponseEntity<CartResponseDTO> emptyUserCart(@RequestHeader("X-User-Id") Integer userId);
}
