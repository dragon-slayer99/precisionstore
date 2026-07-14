package com.techouts.user_service.utils;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Component;

import com.techouts.user_service.model.User;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

    private final String SECRET = "bXktc3VwZXItc2VjcmV0LWtleS10aGF0LWlzLWF0LWxlYXN0LTMyLWJ5dGVzLWxvbmc=";

    SecretKey key = Keys.hmacShaKeyFor (Decoders.BASE64.decode (SECRET));

    public String generateAccessToken(User user) {
        return Jwts.builder ()
                .setSubject (Integer.toString (user.getId ()))
                .claim ("X-User-ID", user.getId ())
                .claim("X-User-Role", user.getRole())
                .setIssuedAt (new Date ())
                .setExpiration (new Date (System.currentTimeMillis () + 1000 * 60 * 60)) // 60 min expiration time
                .signWith (key, SignatureAlgorithm.HS256)
                .compact ();
    }

}
