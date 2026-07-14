package com.techouts.user_service.model;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
public class User {

    public enum UserRole {
        ROLE_CUSTOMER, ROLE_ADMIN;
    }

    @Id
    @GeneratedValue
    private int id;

    @Column(nullable = false)
    @NotBlank(message = "User name cannot be empty")
    private String name;

    @Column(nullable = false, unique = true)
    @Email(message = "Invalid e-mail format")
    private String email;

    @Column(nullable = false)
    @NotBlank(message = "Password field cannot be empty")
    @Size(min = 8, message = "Password must be at least 8 characters")
    private String password;

    @Column(name = "joined_date", nullable = false, updatable = false)
    private LocalDate joinedDate;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private UserRole role = UserRole.ROLE_CUSTOMER;

    public String getFormattedJoinedDate() {
        if (joinedDate == null)
            return "";
        return joinedDate.format(DateTimeFormatter.ofPattern("MMMM dd, yyyy"));
    }

    public User(String name, String email, String password) {

        this.name = name;
        this.email = email;
        this.password = password;
        this.joinedDate = LocalDate.now();
    }

    public User(String email, String password) {

        this.email = email;
        this.password = password;
    }
}

