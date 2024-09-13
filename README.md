# Grow-grub

This is a garden companion app, to help you grow the vegetables you want to grow, at the right time.

Right now you can find the live app at https://grow-grub.andrewmolten.com/

## How it came to be

We had 7 days to build our bootcamp final group project.

We want to make growing veggies easy for busy people with minimal gardening knowledge.

## How it works

Login > Create a garden > Customize your garden layout > Choose recommended vegetables to plant based on season > Log watering / see when they were last watered > get plant care details.

The garden layout utilizes an NPM package called React-Grid-Layout.

We decided to use the google Gemini API, we told it to give us JSON containing the specific data that we need. We haven't exactly tested how accurate the responses are, but based on what I've seen it suits our purposes well.

### What needs work

Users desired vegetables - at the moment we are asking the user what vegetables they want to grow, but we don't do anything with that data yet. Ideally we would be using that data to prompt the user to order seeds, and plant them according to the season.

More instructions/intuitive use of searching for vegetables - There is a hidden feature: in the "My Garden" page, if the vegetable/plant you're looking for is not in the database, you can type it in to the searchbox, then upon hitting enter it will use the google Gemini API to get the data about the plant. This was one of the last features to be implemented into the front end, so we didn't quite get to a point of making that feature super obvious to users.

Integrate with an image searching service - when you search for a vegetable with Gemini, it returns great data, but we don't have corresponding images yet.

### Comment on commits

As this code base was built inside our cohorts Dev Academy org, the commit history might not be as easy to view. I have cloned the repo and pushed it up to my personal GitHub for your viewing pleasure.

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
