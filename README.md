# comic mailer

### Response Codes

1. 404 - endpoint does not exist (The Resource you requested is not available)
2. 200 - everything okay with request & data returned
3. 400 - bad data 
4. 409 - request conflicts with the current state of the server
5. 503 - The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded
6. 401 - Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response
7. 500 - Internal Server Error