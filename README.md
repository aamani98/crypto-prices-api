# NodeJs Express API For Cypto Prices With User Authentication

REST API to find the prices of Crypto Currencies with User Authentication.

## Documentation

This project has 4 end points.

- **localhost:5000/api/auth/login** - This is POST Request which takes email id and password of the user to validate and returns JWT token as response.

```
//Body of the post request
{
    "email":"user@gmail.com",
    "password":"User!123"
}
```

```
//Response
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjE5YjllMTExOTVhYWVhODc3YTk5YTQ2IiwiaWF0IjoxNjM3OTQ2MzY0fQ.2svTqhMagL3u9XNIFmmN70Kvd0WjAhqojIY1iDWLH6s",
    "message": "User Logged In Successfully"
}

```

- **localhost:5000/api/auth/register** - This is POST Request which takes name, email id and password of the user to register and returns JWT token as response.

```
//Body of the post request
{
    "name":"User",
    "email":"user@gmail.com",
    "password":"User!123"
}
```

```
//Response
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFhMTFiNTYzM2U4Mjk3OTViYzY4MjhlIiwiaWF0IjoxNjM3OTQ4MjQ2fQ.7tc7Wv9E5JCXsjsCqLItDUm200yJ1dpVAg_BMuBUsCk",
    "message": "User Registered Sucessfully"
}

```

- **localhost:5000/api/prices** - This is Get Request with JWT Token in header "Authorization" key and "Bearer <JWT-TOKEN>" as value, to validate user and return prices of cypto currencies.

```
//Response
{
    "success": true,
    "terms": "https://coinlayer.com/terms",
    "privacy": "https://coinlayer.com/privacy",
    "timestamp": 1637946426,
    "target": "USD",
    "rates": {
        "611": 0.389165,
        "ABC": 59.99,
        "ACP": 0.014931,
         ....

    }
}

```

- **localhost:5000/api/prices/<CYPTO-SYMBOL>** - This is Get Request with JWT Token in header "Authorization" key and "Bearer <JWT-TOKEN>" as value, to validate user and return prices of particular

```
//localhost:5000/api/prices/BTC
//Response
{
    "success": true,
    "terms": "https://coinlayer.com/terms",
    "privacy": "https://coinlayer.com/privacy",
    "timestamp": 1637948826,
    "target": "USD",
    "rates": {
        "BTC": 54750.901906
    }
}
```

**This api hosted live at** [API](https://api-crypto-price.herokuapp.com).
