# Questioner
Description
Crowd-source questions for a meetup. Questioner helps the meetup organizer prioritize questions to be answered. Other users can vote on asked questions and they bubble to the top or bottom of the log.

## Features

The features listed here are can be tested on Postman by passing the url endpoints to perform the following features:

1. Admin can create meetups.
2. Users can create an account and log in.
3. Users can post questions to a specific meetup.
4. Users can upvote or downvote a question.
5. Questions are sorted based on the number of upvotes a question has, which helps the
meetup organizer(s) to prioritize questions most users are interested in.
6. Users can post comments to a specific question.

## Technologies Used
* Nodejs: an open source server framework that allows you to run JavaScript on the server.
* Express: open source server-side framework for starting out Javascript server quickly on the fly.

## Link to github pages

https://tobechukwuobitube.github.io/questioner-app/

## Link to API endpoints 

https://sendit-it.herokuapp.com/


## API endpoints

| HTTP VERB | ENDPOINT                 | FUCTIONALITY                 |
| --------- | ------------------------ | ---------------------------- |
| GET       | api/v1/meetups           | Get all meetups entries      |
| GET       | api/v1/meetups/:id       | Get specific meetup entry    |
| POST      | api/v1/meetups           | Create a new meetup entry    |
| POST      | api/v1/meetups/:id/rsvps | Respond to a specific meetup |
| POST      | api/v1/questions         | Create a question entry      |
| PATCH     | api/v1/:id/upvote        | Upvote a specific question   |
| PATCH     | api/v1/:id/downvote      | Downvote a specific question |
| GET       | api/v1/meetups/upcomings | Get all upcoming meetups     |


## How to clone the project:

To clone this repository: 

* Ensure you have git installed

* git clone https://github.com/tobechukwuobitube/questioner-app.git

* Run npm install

* Run npm start to start the server

* Follow the UI directory to view UI pages

## Author

* **Tobechukwu Obitube** - https://github.com/tobechukwuobitube

## Acknowledgments

* The motivation behind this project is the Andela Bootcamp Cycle 40 Community
