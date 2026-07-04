package com.techouts.user_service.controller;

import com.techouts.user_service.dto.LoginRequest;
import com.techouts.user_service.dto.RefreshRequest;
import com.techouts.user_service.dto.RegisterRequest;
import com.techouts.user_service.dto.UserDTO;
import com.techouts.user_service.model.RefreshToken;
import com.techouts.user_service.model.User;
import com.techouts.user_service.service.UserService;
import com.techouts.user_service.utils.JwtUtil;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/users")
//@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:5173"})
@Tag(
        name = "User Controller",
        description = "APIs for user registration, authentication, and user profile operations."
)
public class UserController {

    private final UserService userService;

    private final JwtUtil jwtUtil;

    UserController(UserService userService, JwtUtil jwtUtil) {
        this.userService = userService;
        this.jwtUtil = jwtUtil;
    }


    @Operation(
            summary = "Get user profile",
            description = "Fetches the authenticated user's profile information using the user ID extracted from JWT token."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "User profile fetched successfully"
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
    public ResponseEntity<UserDTO> getUserDetails(@RequestHeader("X-User-Id") Integer userId) {

        UserDTO foundUserDTO = userService.getUserById (userId);

        return ResponseEntity.ok (foundUserDTO);

    }


    @Operation(
            summary = "Register new user",
            description = "Registers a new user account using name, email, and password."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "201",
                    description = "User registered successfully"
            ),
            @ApiResponse(
                    responseCode = "400",
                    description = "Invalid registration request"
            ),
            @ApiResponse(
                    responseCode = "409",
                    description = "User already exists"
            ),
            @ApiResponse(
                    responseCode = "500",
                    description = "Internal server error"
            )
    })
    @PostMapping("register")
    public ResponseEntity<Map<String, Object>> registerUser(@Valid @RequestBody RegisterRequest request, BindingResult result) {


        if (result.hasErrors()) {

            Map<String, Object> validationErrors = new HashMap<> ();

            result.getFieldErrors().forEach (fieldError -> {
                validationErrors.put (fieldError.getField (), fieldError.getDefaultMessage ());
            });

            return ResponseEntity.status (HttpStatus.BAD_REQUEST).body (validationErrors);

        }

        User user = new User(request.getName(), request.getEmail(), request.getPassword());

        boolean userRegistrationStatus = userService.registerUser(user);

        Map<String, Object> response = new HashMap<> ();

        if(userRegistrationStatus) {
            response.put("message", "successfully registered");
            return ResponseEntity.status (HttpStatus.CREATED).body (response);
        }

        response.put ("message", "user with same email already exists");
        return ResponseEntity.status (HttpStatus.CONFLICT).body (response);

    }

    @Operation(
            summary = "Authenticate user",
            description = "Authenticates the user using email and password and returns a JWT token."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "User authenticated successfully"
            ),
            @ApiResponse(
                    responseCode = "401",
                    description = "Invalid email or password"
            ),
            @ApiResponse(
                    responseCode = "500",
                    description = "Internal server error"
            )
    })
    @PostMapping("login")
    public ResponseEntity<Map<String, Object>> userLogin(@RequestBody LoginRequest request) {

        Map<String, Object> response = new HashMap<> ();

        String email = request.getEmail();
        String password = request.getPassword();

        if(email == null || password == null || email.isBlank () || password.isBlank ()) {
            response.put ("message", "please enter email and password");
            return ResponseEntity.status (HttpStatus.BAD_REQUEST).body (response);
        }

        User userInQuestion = userService.isValidUser (email, password);

        if(userInQuestion == null) {
            response.put ("message", "Invalid credentials");
            return ResponseEntity.status (HttpStatus.BAD_REQUEST).body (response);
        }

        User user = userService.getUser (email);

        String accessToken = jwtUtil.generateAccessToken(user);
        response.put("accessToken", accessToken);
        String refreshToken = userService.createRefreshToken(user).getToken();
//        ResponseCookie responseCookie = ResponseCookie.from("refreshToken", refreshToken)
//                .httpOnly(true)
//                .secure(true)
//                .path("/")
//                .maxAge(Duration.ofDays(7))
//                .sameSite("Strict")
//                .build();

        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, refreshToken.toString()).body(response);

    }


    @PostMapping("refresh-token")
    public ResponseEntity<Map<String, Object>> newJwtToken(@CookieValue(value = "refreshToken") String refreshToken) {

        RefreshToken currRefreshToken = userService.validateRefreshToken(refreshToken);

        if(currRefreshToken == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "Provided refresh token is expired"));
        }

        String accessToken = jwtUtil.generateAccessToken(currRefreshToken.getUser());

        return ResponseEntity.ok(Map.of("accessToken", accessToken));

    }


    @PostMapping("validate")
    public ResponseEntity<Map<String, Object>> validateJwtToken(@RequestHeader("X-User-Id") Integer userId) {
        return ResponseEntity.ok(Map.of("status", "The provided JWT token is valid"));
    }
}
