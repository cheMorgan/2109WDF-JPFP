# Robots
![Robots](https://raw.githubusercontent.com/cheMorgan/Robots/main/unnamed.png)
##

[Video Walkthrough](https://youtu.be/rs6bg5PzO_0)

## Getting started

1. Fork and clone this repo.
2. `npm install`.

## Details

### The Premise

You run StackBot Inc., a business staffed entirely by robots. Each robot may be assigned to several projects at a time. Create a RESTful web platform that allows you to manage your robots and projects. Before getting started, please carefully review the expectations as outlined below.

### The tools

For this project, you must use Express to handle HTTP requests and Sequelize to interface with your database. Likewise, you must use React, Redux and React-Redux on the front-end. This means that all important state (i.e. robots and projects) must be managed by the Redux store (form data may be managed by stateful React components). Components that display robot/project data should therefore be connected to the Redux store. If you perform side-effects (like AJAX requests), you should encapsulate them in thunks.
