# Retro App

The Retro App was our group's final project at the </salt> bootcamp fall 2021. 

## Why this app?

During the bootcamp we had structured daily and weekly retrospective team meetings that helped us improve as a group. However, it was hard to remember the questions and structure between meetings and we didn't have a practical way to record the group answers. To make our lives easier, we started using word documents and Google forms. Using forms and filling them in in advance, before discussing the questions, allowed us to be more objective and honest, compared to just talking through the points. But it still was not ideal. By week 3 of the bootcamp we were convinced (or, we hoped) that we could build an app to make our retrospectives smoother, more insightful, and more constructive. Ideally, we also wanted a way to save the responses for later, so we could look back and see how we'd (ideally) improved as a group. We thought an app like this could be a good idea for our final project.

## Retro App
The app allows teams to log their retrospectives and track their progress. Users can create or join teams, use predefined retrospective models or create their own, and track their team evolution. In the Reports page, the user can view the whole team's responses or filter to view just their own responses.

## Tech stack
### Front-end
On the front-end, we have used React with Redux, which has allowed us to build reusable components, for instance, in our case it made building dynamic forms much easier.

### Back-end
On the backend, we used NodeJS with Express, which gave us a quick start and allowed us to expand the app easily. To protect our user's data, we implemented an authentication and authorization system with bCrypt and JWT.

### Database
The data is stored in a PostgreSQL database.

### Deployment
The app, both back-end and front-end, is deployed on Heroku and can be found [here](https://mob-retro.herokuapp.com/).

## Status of the app
The app is deployed and fully functional, but is only styled for mobile view. It is currently an MVP, but we have considered expanding it by implementing e.g. better visualization of the reports with statistics, support for multiple forms per team, and 3rd party login functionality.
