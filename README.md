# Express Catch-All
Quick and dirty Express server to help debug API calls.

## What it does?
Binds an http server to a specified port (3000 by default.) 

## How to use
0. Have NodeJS already installed.
1. Run `yarn`
2. Run `yarn start` or `yarn start <port>`
3. Point the request to the server.

## Expected output
```
$ yarn start 3000
Listening at http://localhost:3000
{
  url: '/my-example-api/123/users/active',
  method: 'GET',
  headers: {
    accept: 'application/json, text/plain, */*',
    'user-agent': 'axios/0.21.1',
    host: 'localhost:3000',
    connection: 'close'
  }
}
```
