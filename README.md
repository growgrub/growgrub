# Grow-grub

This is a garden companion app, to help you grow the vegetables you want to grow, at the right time.

# How it came to be

We had 7 days to build our bootcamp final group project.

I pitched this idea, because getting my seeds into the ground on time is something that I struggle with, so I could really use an app that reminds me to plant when the time is right.

6 other awesome people wanted to work on it too!

## Planning

We spent a day and a half solid planning. We discussed user stories & features, settled on a Minimum Viable Product, did wireframes, a database diagram and generated some tickets for what needed to be done.

## How it works

Login > Create a garden > Customize your garden layout > 


## What we learnt


### What needs work

Users desired vegetables - at the moment we are asking the user what vegetables they want to grow, but we don't do anything with that data yet. Ideally we would be using that data to prompt the user to order seeds, and plant them according to the season.






### Installation


#### **From the command line**

```
git clone git@github.com:andrew-molten/grow-grub.git
cd grow-grub
npm install # to install dependencies
npm run knex migrate:latest # to create database tables
npm run knex seed:run # to seed the database with usable data
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000) and the client running on [http://localhost:5173](http://localhost:5173).

---
[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=boilerplate-fullstack)
