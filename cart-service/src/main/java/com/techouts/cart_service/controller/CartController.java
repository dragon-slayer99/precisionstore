package com.techouts.cart_service.controller;


import com.techouts.cart_service.dto.AddToCartRequest;
import com.techouts.cart_service.dto.CartItemDTO;
import com.techouts.cart_service.dto.CartResponseDTO;
import com.techouts.cart_service.dto.UpdateCartRequest;
import com.techouts.cart_service.service.CartService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/cart/items")
@Tag(
        name = "Cart Service",
        description = "APIs for managing user shopping cart operations"
)
public class CartController {

    private final CartService cartService;

    CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @Operation(
            summary = "Get cart items",
            description = "Retrieves all items in authenticated user cart."
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "Cart items retrieved successfully"
            ),
            @ApiResponse(
                    responseCode = "401",
                    description = "Missing or invalid authentication"
            ),
            @ApiResponse(
                    responseCode = "500",
                    description = "Unexpected server error"
            )
    })
    @GetMapping
    public ResponseEntity<CartResponseDTO> serveCartItems(
            @Parameter(description = "Authenticated user identifier")
            @RequestHeader("X-User-Id") Integer userId) {

        List<CartItemDTO> userCartItems = cartService.getCartItemsByUser(userId);


        if (userCartItems.isEmpty()) {
            return ResponseEntity.ok(new CartResponseDTO("User cart is empty"));
        }

        return ResponseEntity.ok(new CartResponseDTO(userCartItems));

    }

    @Operation(
            summary = "Add product to cart",
            description = "Adds a product into the authenticated user's shopping cart with the specified quantity."
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "201",
                    description = "Product added to cart successfully"
            ),
            @ApiResponse(
                    responseCode = "400",
                    description = "Invalid request payload"
            ),
            @ApiResponse(
                    responseCode = "500",
                    description = "Unexpected server error"
            )
    })
    @PostMapping
    public ResponseEntity<Map<String, String>> addProductToCart(@RequestBody AddToCartRequest request,
                                                                @RequestHeader("X-User-Id") Integer userId) {

        boolean productAddedToCartStatus = cartService.addToCart(
                userId,
                request.getProductId(),
                request.getQuantity()
        );

        Map<String, String> response = new HashMap<>();

        if (!productAddedToCartStatus) {

            response.put("message", "Product does not exist or the product is currently out of stock");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        response.put("message", "Successfully added the product to cart");

        return ResponseEntity.status(201).body(response);

    }

    @Operation(
            summary = "Remove cart item",
            description = "Removes a specific item from cart."
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "Cart item removed successfully"
            ),
            @ApiResponse(
                    responseCode = "401",
                    description = "Unauthorized access"
            ),
            @ApiResponse(
                    responseCode = "500",
                    description = "Unexpected server error"
            )
    })
    @DeleteMapping("/{cartItemId}")
    public ResponseEntity<Map<String, String>> removeProductFromCart(@Parameter(description = "Unique identifier of cart item") @PathVariable int cartItemId,
                                                                     @RequestHeader("X-User-Id") Integer userId) {

        String removalStatus = cartService.removeCartItemFromCart(cartItemId, userId);

        Map<String, String> response = new HashMap<>();

        if (removalStatus.equals("unauthorized")) {
            response.put("message", "Unauthorized to access other user details");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }

        response.put("message", "Successfully removed product from cart");

        return ResponseEntity.ok(response);

    }

    @Operation(
            summary = "Empty cart",
            description = "Removes every item from the authenticated user's cart."
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "Cart cleared successfully"
            ),
            @ApiResponse(
                    responseCode = "401",
                    description = "Unauthorized access"
            ),
            @ApiResponse(
                    responseCode = "500",
                    description = "Internal server error"
            )
    })
    @DeleteMapping
    public ResponseEntity<CartResponseDTO> emptyUserCart(@RequestHeader("X-User-Id") Integer userId) {

        String cartItemsRemovalStatus = cartService.RemoveAllCartItemsFromCart(userId);

        return ResponseEntity.ok(new CartResponseDTO(cartItemsRemovalStatus));

    }

    @Operation(
            summary = "Update cart item quantity",
            description = "Updates quantity of a cart item."
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "Cart item updated successfully"
            ),
            @ApiResponse(
                    responseCode = "400",
                    description = "Invalid quantity supplied"
            ),
            @ApiResponse(
                    responseCode = "401",
                    description = "Unauthorized access"
            ),
            @ApiResponse(
                    responseCode = "500",
                    description = "Internal server error"
            )
    })
    @PutMapping("/{cartItemId}")
    public ResponseEntity<Map<String, Object>> updateCartItem(@PathVariable int cartItemId,
                                                              @RequestBody UpdateCartRequest request,
                                                              @RequestHeader("X-User-Id") Integer userId) {

        Map<String, Object> response = new HashMap<>();
        int quantity = request.getQuantity();
        if (quantity < 0) {
            response.put("message", "Please provide a valid quantity");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        String message = cartService.updateCartItemQuantity(userId, cartItemId, quantity);

        if (message.contains("unauthorized")) {
            response.put("message", "You are not authorized to access this cart");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        response.put("message", message);
        return ResponseEntity.ok(response);

    }

}

