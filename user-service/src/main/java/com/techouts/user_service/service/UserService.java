package com.techouts.user_service.service;


import com.techouts.user_service.dto.UserDTO;
import com.techouts.user_service.model.RefreshToken;
import com.techouts.user_service.model.User;
import com.techouts.user_service.repository.RefreshTokenRepo;
import com.techouts.user_service.repository.UserRepo;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.UUID;

@Service
public class UserService {

    UserRepo userRepoImpl;
    PasswordEncoder encoder;
    RefreshTokenRepo refreshTokenRepo;

    UserService(UserRepo userRepoImpl, PasswordEncoder encoder, RefreshTokenRepo refreshTokenRepo) {
        this.userRepoImpl = userRepoImpl;
        this.encoder = encoder;
        this.refreshTokenRepo = refreshTokenRepo;
    }

    @Transactional(readOnly = true)
    public User getUser(String email) {

        return userRepoImpl.findByEmail(email).orElse (null);

    }

    @Transactional(readOnly = true)
    public User isValidUser(String email, String password) {

        User userTryingToLogin = getUser (email);

        if(userTryingToLogin == null || !encoder.matches (password, userTryingToLogin.getPassword ())) {
            return null;
        }

        return userTryingToLogin;

    }

    @Transactional
    public boolean registerUser(User user) {
        user.setPassword(encoder.encode(user.getPassword()));

        if (userRepoImpl.findByEmail(user.getEmail()).isPresent()) {

            return false;
        }

        user.setJoinedDate(LocalDate.now());
        userRepoImpl.save(user);

        return true;

    }

    @Transactional(readOnly = true)
    public UserDTO getUserById(int userId) {

        User user = userRepoImpl.findById (userId).orElse (null);

        if(user == null) {
            return new UserDTO ("User does not exists");
        }

        return new UserDTO (
                "User found",
                user.getId (),
                user.getName (),
                user.getEmail (),
                user.getFormattedJoinedDate ()
        );

    }

    @Transactional
    public User updateUserDetails(String emailAddress, String fullName, Integer userId) {

        User currLoggedInUser = userRepoImpl.findById(userId).orElse(null);

        if(currLoggedInUser == null) {
            System.out.println("User does not exist");
            return null;
        }

        User userAlreadyPresentWithNewMail = userRepoImpl.findByEmail(emailAddress).orElse(null);

        if (userAlreadyPresentWithNewMail != null) {
            if (userAlreadyPresentWithNewMail.getId() == currLoggedInUser.getId()) {
                currLoggedInUser.setName(fullName);
                userRepoImpl.save (currLoggedInUser);
                return currLoggedInUser;
            }

        } else {
            currLoggedInUser.setName(fullName);
            currLoggedInUser.setEmail(emailAddress);

            userRepoImpl.save (currLoggedInUser);
            return currLoggedInUser;
        }

        return null;

    }

    public List<User> getAllUsers() {

        return userRepoImpl.findAll();

    }

    public RefreshToken createRefreshToken(User user) {

        RefreshToken currRefreshToken = refreshTokenRepo.findByUser(user).orElse(null);

        if(currRefreshToken != null) {
            return currRefreshToken;
        }

        RefreshToken refreshToken = new RefreshToken();

        refreshToken.setUser(user);
        refreshToken.setExpiryDate(LocalDate.now().plus(7, ChronoUnit.DAYS));
        refreshToken.setToken(UUID.randomUUID().toString());

        return refreshTokenRepo.save(refreshToken);
    }

    public RefreshToken validateRefreshToken(String refreshToken) {
        RefreshToken currRefreshToken = refreshTokenRepo.findByToken(refreshToken).orElse(null);

        if(currRefreshToken == null || currRefreshToken.getExpiryDate().isBefore(LocalDate.now())) {
            return null;
        }

        return currRefreshToken;

    }

}

