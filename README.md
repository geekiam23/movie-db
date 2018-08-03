# BLOC Movie Database

## About

The MovieDatabase is a fullstack application built from the api  *The MovieDB API*. Users can view popular tv shows and movies. They can also search for any movie, tv show, or actor/actress. Each item is clickable except for actors/actress. Also, you can find reviews for TV shows and movies. You can find the app [here](https://immense-thicket-85542.herokuapp.com/). 

- Bonus
  - Include movies.
  - Add autocomplete.

## Specs

**Ruby:** 2.4.1
**Rails:** 5.2.0
**Semantic UI:** 4.1.1
**React:** 16.4.2


The first thing that I did when approaching this project, I built the app with a movie-db gem and Ruby on Rails. I did this to make sure that I had something to present no matter what. I wanted more control over the UI so I changed and went with React on Rails. I am glad that I went with that approach. 

During second approach that I took, I could not figure out how to write test when I used the gem so I pivoted and used HTTParty and Addressable gems to directly pull in the data. 

## Things that didn't work out/struggle or that I would do differently.


- The biggest struggle that I encountered was writing test.
  - I know that this is my weakest area and my goal is to improve greatly in this area.
  - I could not get the React testing to work. When I tried to stub the getMovies function, I kept getting an error. I am really disappointed with this because I know that I could have done better. 
- Heroku was only showing the api info at one point. I learned how to view react and rails through Heroku. 
- I didn't realize it until later that I didn't need elasticsearch to find stuff on front end
- Setting up Enzyme was harder that I thought it would be. 
- The styling of my search bar is not great :)


If I were to do this poject again, I would start take a day to create a plan and then move forward. I would begin with React on Rails and pulling the info directing from the api instead of Ruby on Rails. 

## Things that I am proud of.
- I was terrified to work with an api in Rails. I am glad that I overcame that fear and I will definfitely do this again. 
- Overall it is a good app. It was good to build this without anyone's help and see how far I have come since day one. 
- I really did enjoy the process. It was fun to think through the different approaches and issues.

## Things that I will add in the near future.
- [x] When a user searches an actor or actress, display their biography first.
- [ ] Handle user entry errors.
- [x] Create a similar items feature. 
- [x] Finish the test in React
- [ ] Fix the search bar and results