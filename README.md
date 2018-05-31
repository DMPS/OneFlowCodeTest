# OneFlowCodeTest

## Deliverables

+ Created a repository on Github for the task
+ Created an Express.js app that accomplishes the following:
    + Implements a service that stores the following data-set: https://gist.github.com/thekiwi/ab70294c8d7ab790d9b6d70df9d3d145
    + Serves the list of episodes to the front-end via a GraphQL API
    + Allows filtering of the results with an optional ‘season’ parameter
+ Using Angular 2, created a simple web app that:
    + Makes an API request to a a local Express.js app to fetch the episodes
    + Displays the episodes in a grid with pertinent information saved as a card
    + Has a searchbox to enable client-side filtering of the episodes by title
    + Redirects the user to a page with a funny gif when they enter a bad url
+ Created unit tests for the GraphQL API using Jasmine

## How to run the project

I suggest you do the following:

1. Create a terminal in at ./server then enter the command node server.js
1. Create a terminal at ./one-flow and enter the command ng serve
1. If you wish, you can experiment with GraphQL at http://localhost:1337/. I left the option open for you to play with the schema and queries
1. View the Angular 2 app at http://localhost:4000/ You can test all of the features there.
