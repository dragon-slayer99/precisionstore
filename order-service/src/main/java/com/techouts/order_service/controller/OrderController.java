package com.techouts.order_service.controller;

import com.techouts.order_service.dto.OrderDTO;
import com.techouts.order_service.dto.PlaceOrderRequest;
import com.techouts.order_service.dto.StatusChangeRequest;
import com.techouts.order_service.model.Order;
import com.techouts.order_service.service.OrderService;
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
@RequestMapping("/orders")
@CrossOrigin(origins = "http://localhost:8080")
@Tag(
        name = "Order Service",
        description = "APIs for managing user order operations"
)
public class OrderController {

    OrderService orderService;

    OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @Operation(
            summary = "Get user orders",
            description = "Fetches all orders placed by the authenticated user using the user ID extracted from the JWT token."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Orders fetched successfully"
            ),
            @ApiResponse(
                    responseCode = "401",
                    description = "Unauthorized - Invalid or missing JWT token"
            ),
            @ApiResponse(
                    responseCode = "500",
                    description = "Internal server error"
            )
    })
    @GetMapping
    public ResponseEntity<Object> getOrders(
            @Parameter(description = "Authenticated user ID") @RequestHeader("X-User-Id") Integer userId) {

        List<OrderDTO> userOrders = orderService.getOrderByUser(userId);

        if(userOrders == null || userOrders.isEmpty ()) {
            Map<String, String> response = new HashMap<>();
            response.put("message", "User does not have any orders yet");
            return ResponseEntity.ok(response);
        }

        return ResponseEntity.ok(userOrders);
    }

    @Operation(
            summary = "Place a new order",
            description = "Creates a new order using the authenticated user's cart items and delivery details."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "201",
                    description = "Order placed successfully"
            ),
            @ApiResponse(
                    responseCode = "401",
                    description = "Unauthorized - Invalid or missing JWT token"
            ),
            @ApiResponse(
                    responseCode = "500",
                    description = "Internal server error"
            )
    })
    @PostMapping
    public ResponseEntity<OrderDTO> placeOrder(
            @RequestBody PlaceOrderRequest request,
            @RequestHeader("X-User-Id") Integer userId) {

        OrderDTO orderDTO =  orderService.placeOrder (userId, request.getAddress(), request.getPaymentMethod());

        return ResponseEntity.status(HttpStatus.CREATED).body(orderDTO);
    }

    @Operation(
            summary = "Update order delivery status",
            description = "Updates the delivery status of an existing order belonging to the authenticated user."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Order status updated successfully"
            ),
            @ApiResponse(
                    responseCode = "401",
                    description = "Unauthorized - Invalid or missing JWT token"
            ),
            @ApiResponse(
                    responseCode = "403",
                    description = "Forbidden - Order belongs to another user"
            ),
            @ApiResponse(
                    responseCode = "500",
                    description = "Internal server error"
            )
    })
    @PatchMapping("/{orderId}/status")
    public ResponseEntity<OrderDTO> changeOrderDeliveryStatus(
            @PathVariable int orderId,
            @RequestBody StatusChangeRequest request,
            @RequestHeader("X-User-Id") Integer userId) {

        Order order = orderService.getOrderById (orderId);

        if(order.getUserId () != userId) {
            return ResponseEntity.status (HttpStatus.FORBIDDEN).body (new OrderDTO ("This order belongs to another user"));
        }

        OrderDTO changedOrderDTO = orderService.changeOrderStatus (orderId, request.getDeliveryStatus());

        return ResponseEntity.ok (changedOrderDTO);
    }

}

