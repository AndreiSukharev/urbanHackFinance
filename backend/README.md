# RESTful API

#### Note
All data should be sent to server inJSON file.

Schemas are in backend/db/models.py

## Endpoints

 
 ### Sign In
```
POST     /api/signin
```
Example for POST:
```
{
    "login": "admin",
    "password": "123Wertyq"
}
 ```
 
Request:
 ```
{
    "message": "ok",
    "login": "admin",
    "id": 1,
    "role": "admin"
}
 ```

 ### Log out
```
DELETE     /api/logout
```

### Users

```
GET     /api/users -> get all users
GET     /api/users/<user_id> -> get one user by id
```

Response for getting one user:
```
{
    "user_id": 4,
    "login": "test",
    "email": "test@gmail.com",
   
}
