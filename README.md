# book-record-

Server:
- Storing certain book data
- User Register
- Subscriber
---

This is a book record management API server/backend for a library system or for the management of records, manuals, or books.

---

### Fine System:
- User: `06/03/2023 - 06/06/2023`
- 09/06/2023 ➡ `50 * 3 = 150/-`

Plans:
- 3 months
- 6 months
- 12 months

---
If the subcriptiom type standard && if subcription date is 06/03/2023
=>then subcriptiom valid till 06/09/2023

within subcription date >> if we miss renewal >>50/- day
subscription date is also been missded >> and also miss the renewal >> 100+ 50/- day

>> book 
>> basic
>> 06/03/2023 => subcription day
>> 07/03/2023 => borrowed a book from library 
>> book1 renewal date is on 21/03/2023
>> 23/03/2023 => we need to pay a fine of 50*2=100/-


>> book2
>> basic
>> 06/03/2023 => subcription day
>> 07/03/2023 => borrowed a book from library 
>> book2 renewal date is on 21/03/2023
>> 23/03/2023 => we need to pay a fine of 100+(no of day *50)

miss by renewal date >> 50/-
miss by  subcription date >> 100/-
miss by renewal && subcription date >> 150/-
## Routes and Endpoints

### /users
- POST: Create a new user  
- GET: Get all the user info here  

### /users/{id}
- GET: Get a user by ID  
- PUT: Update a user by their ID  
- DELETE: Delete a user by ID (check if they still have an issued book) **&&** (if there is any fine to be paid)

## /user/subscription-details/{id}
GET: Get user subcription details
         >>Date of Subscription
         >>Valid till
         >>Is there any fine

## /book
GET: Get all the books
PUT: Create/add a new book 

## /books/{id}
GET: Get a book by id
PUT: Update a book by id 

## /book/issued
GET: Get a book by id 

## /book/issued/withFine
GET:get all issued books with their fine


## npm init

## npm i nodemon --save-dev

## npm run dev
