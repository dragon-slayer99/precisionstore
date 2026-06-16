package com.techouts.api_gateway.filter;

import java.nio.charset.StandardCharsets;
import java.util.List;

import org.jspecify.annotations.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;

import com.techouts.api_gateway.utils.JwtUtil;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import reactor.core.publisher.Mono;

@Component
public class JwtAuthFilter implements GlobalFilter, Ordered {

    private final JwtUtil jwtUtil;

    public JwtAuthFilter(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
        System.out.println("JwtAuthFilter CREATED");
    }


    @Override
    public Mono<Void> filter(ServerWebExchange exchange, @NonNull GatewayFilterChain chain) {

        System.out.println("API GATEWAY IS WORKING!!!!!!!!");

        String path = exchange.getRequest().getURI().getPath();
        String method = exchange.getRequest().getMethod().name();

        if ("OPTIONS".equals(method)) {
            return chain.filter(exchange);
        }

        // public endpoints don't need user login
        List<String> excludedURIs = List.of(
                "/api/users/login",
                "/api/users/register",

                "/v3/api-docs",
                "/swagger-ui",
                "/product/v3/api-docs",
                "/user/v3/api-docs",
                "/cart/v3/api-docs",
                "/order/v3/api-docs"
        );

        List<String> adminURIs = List.of(
                "/api/admin"
        );

        // skip the check for public endpoints
        if (excludedURIs.stream().anyMatch(path::startsWith) || (path.startsWith("/api/products") && "GET".equals(method))) {
            return chain.filter(exchange);
        }

        String authHeader = exchange.getRequest().getHeaders().getFirst(HttpHeaders.AUTHORIZATION); // extract the authorization header

        if (authHeader == null || !authHeader.startsWith("Bearer ")) { // check for bearer token in the auth header
            return sendError(exchange, "Missing or invalid Authorization header");
        }

        String JWTtoken = authHeader.substring(7); // Extract the actual JWT token

        System.out.println(JWTtoken);

        try { // validate JWT token
            if (!jwtUtil.validateToken(JWTtoken)) {
                return sendError(exchange, "Invalid Authorization header");
            }
        } catch (ExpiredJwtException ex) {
            return sendError(exchange, "JWT token expired");
        } catch (JwtException e) {
            return sendError(exchange, "Invalid token");
        } catch (Exception e) {
            return sendError(exchange, "Unknown error");
        }

        Integer extractedUserId = jwtUtil.extractUserId(JWTtoken);
        String roleFromJWT = jwtUtil.extractUserRole(JWTtoken);

        if(adminURIs.stream().anyMatch(path::startsWith)) { // restrict customer from accessing admin endpoints

            if(!"ROLE_ADMIN".equals(roleFromJWT)) {
                return sendError(exchange, "Access Denied");
            }

        }

        if(path.startsWith("/api/products") && !"GET".equals(method)) { // Limit normal customer from accessing product endpoints that manipulate product data

            if(!"ROLE_ADMIN".equals(roleFromJWT)) {
                return sendError(exchange, "Access Denied");
            }

        }

        ServerHttpRequest modifiedRequest = exchange.getRequest()
                .mutate()
                .header("X-User-Id", String.valueOf(extractedUserId))
                .header("X-User-Role", String.valueOf(roleFromJWT))
                .build();

        return chain.filter(exchange.mutate().request(modifiedRequest).build()); // modify the incoming request to include the userID so the services can access the userID

    }

    @Override
    public int getOrder() {
        return -1;
    }

    private Mono<Void> sendError(ServerWebExchange exchange, String message) {

        exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
        exchange.getResponse().getHeaders().add("Content-Type", "application/json");

        String responseBody = "{ \"error\" : \"" + message + "\" }";
        DataBuffer buffer = exchange
                .getResponse()
                .bufferFactory()
                .wrap(responseBody.getBytes(StandardCharsets.UTF_8));

        return exchange.getResponse().writeWith(Mono.just(buffer));

    }

}
