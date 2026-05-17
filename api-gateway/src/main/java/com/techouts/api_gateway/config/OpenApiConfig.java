//package com.techouts.api_gateway.config;
//
//
//import org.springdoc.core.models.GroupedOpenApi;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//public class OpenApiConfig {
//
//    @Bean
//    public GroupedOpenApi productServiceApi() {
//        return GroupedOpenApi.builder()
//                .group("product-service")
//                .pathsToMatch("/api/products/**")
//                .build();
//    }
//
//    @Bean
//    public GroupedOpenApi cartServiceApi() {
//        return GroupedOpenApi.builder()
//                .group("cart-service")
//                .pathsToMatch("/api/cart/**")
//                .build();
//    }
//
//    @Bean
//    public GroupedOpenApi orderServiceApi() {
//        return GroupedOpenApi.builder()
//                .group("order-service")
//                .pathsToMatch("/api/orders/**")
//                .build();
//    }
//
//    @Bean
//    public GroupedOpenApi userServiceApi() {
//        return GroupedOpenApi.builder()
//                .group("user-service")
//                .pathsToMatch("/api/users/**")
//                .build();
//    }
//
//}
