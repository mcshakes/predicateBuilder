# predicateBuilder
This project allows the user to choose among the form field columns, all modeled upon analytics from user interactions with a website. Together, the column predicates form a SQL Select function that is returned to the user.

## Demo App:
https://sql-predicate-builder.herokuapp.com/

## Built with:
- create-react-app
- express.js
- deployed to Heroku

## Next Steps:
- **Import a DB collection to play with**: Doesn't even have to be user visits and interactions. I've found more data related to Real Estate markets and some economic data. Would be interesting to combine. Brings me to next point.
- **Re-use the front end**: Possibly making the front end dynamic depending on the backend data being imported.
- **Redux**: I opted not to use Redux. I thought sending plain callbacks as props up and down the component chain (from parent to child and back) would show a better understanding of state management. I may add Redux if I want to make the subject matter either dynamic, or able  
