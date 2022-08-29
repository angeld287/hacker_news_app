# Getting Started with Create React App

This project is a small responsive web application that presents some news list paginarions.

## Functionality

The aplication make some spesific front end functionalities that you can validate:

- The selected filter is persisted on the local storage
- The favorited posts is persisted on the local storage
- The web app is completely responsice
- The application has a pagination based on the local data and the data fetched from the api
- When clicking on the row, a new tab is opened with the link of the post
- When hovering on the row, an opacity is applied to the entire row and its children


## Description of Technologies

The application has been developed with react and redux as state manager, the design is created with css and is integrated with the api urls "https://hn.algolia.com/api/v1/search_by_date".

## Running the app

The application is deployed in the follow [link](https://630c33bda0b05a4f3a7bbfb7--elegant-gnome-7ca0c4.netlify.app/) but the web service (api) is presenting some cors erros so it's recommended to deploy locally. 

### Steps to Run app locally

- Clone the code
  - `git clone https://github.com/angeld287/hacker_news_app`
- Install the required packages
  - `cd hacker_news_app && npm instal`
- Start the projects
  - `npm start`
- Open Chrome with [CORS disabled](https://alfilatov.com/posts/run-chrome-without-cors/)
- Open the app in Chrome
  - the app runs at `http://localhost:3000`