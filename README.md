# Grow-grub

This is a garden companion app, to help you grow the vegetables you want to grow, at the right time.

## How it came to be

We had 7 days to build our bootcamp final group project.

I pitched this idea, because getting my seeds into the ground on time is something that I struggle with, so I could really use an app that reminds me to plant when the time is right.

6 other awesome people wanted to work on it too!

## Planning

We spent a day and a half solid planning. We discussed user stories & features, settled on a Minimum Viable Product, did wireframes, a database diagram and generated some tickets for what needed to be done.

Then as the project progressed we had standups twice daily, to find out where everyone is at, discuss blocks, and clarify features.

## How it works

Login > Create a garden > Customize your garden layout > Choose recommended vegetables to plant based on season > Log watering / see when they were last watered > get plant care details.

The garden layout utilizes an NPM package called React-Grid-Layout.

We wanted to use an API with plant data, but due to costs and a mismatch between NZ and US names for vegetables, we decided to instead use the google Gemini API, where we told it to give us JSON containing the specific data that we need. We haven't exactly tested how accurate the responses are, but based on what I've seen it suits our purposes well.

## What we learnt

To build a good app with a new team of 7 in 7 days, good planning is imperitive.

I needed to take a leadership role with my idea, to convey my vision of features, but I also wanted to create space for everybody to take ownership over the app. I learnt quickly that if I wasn't game to make the big decisions then we weren't going to move forward quickly enough to have the app working in time.

With a big team, and only so many features in our MVP we found it best to split up into 4 groups which we were then able to work together or find separate things to do with in the feature.

Having such clear lines of communication both synchronously and asynchronously made it really easy to make sure that everyone was clear on what to do to move the project forward.

This was one of the first times we had the experience of watching the rest of the team build the rest of the app up around us while we worked on our code, creating a really enjoyable collaboration experience.

## My code

The bulk of my code is in:
FRONT END
pages / GardenView
components / GardenForm && GardenSelect && GardenGrid && PlotPlantSuggestionDropDown

BACK END
routes / growGrub.ts - line 195 - router.post('/gardens'...)
routes / growGrub.ts - line 233 - router.put('/gardens/:id'...)
db / growGrub.ts - line 43 - getAllUsersPlots
db / growGrub.ts - line 43 - getPlotPlantsByPlotId
db / growGrub.ts - line 97 - getPlantIDs
db / growGrub.ts - line 113 -saveNewPlots

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
