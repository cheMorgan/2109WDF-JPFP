# Database Associations

Many-to-Many association between Robots and Projects
Through table: "RobotProject"

== Magic Methods on Robot:
\_isAttribute,
getProjects,
countProjects,
hasProject,
hasProjects,
setProjects,
addProject,
addProjects,
removeProject,
removeProjects,
createProject
== Magic Methods on Project
\_isAttribute,
getRobots,
countRobots,
hasRobot,
hasRobots,
setRobots,
addRobot,
addRobots,
removeRobot,
removeRobots,
createRobot

## Robot Object

{
"id": 1,
"name": "Rodney Copperbottom",
"fuelType": "electric",
"fuelLevel": 100,
"imageUrl": "",
"createdAt": "2021-11-16T16:54:06.897Z",
"updatedAt": "2021-11-16T16:54:06.897Z"
},

## Project Object

{
"id": 1,
"title": "wonderbot",
"deadline": "2021-11-21T05:00:00.000Z",
"priority": 10,
"completed": false,
"description": "It has four kitchen spoons atop its head, which it uses like the blades on a helicopter to fly. Its head is protected by a large cup, with its two eyes peeking out from underneath. It has a small, fragile neck, with a tiny body protected by a small bowl. It also possess three long, wiry limbs which can be used as hands or to create pictures for visual communication.",
"createdAt": "2021-11-16T16:54:06.916Z",
"updatedAt": "2021-11-16T16:54:06.916Z"
},
