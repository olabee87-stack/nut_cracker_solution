# nut_cracker_solution

# DESCRIPTION

A simple Nodejs project that fetches data from the vello API

# Start

On opening the application :
npm install at the root (to install all necessary dependencies)
npm start at the root (will open the application on port 3000)

# Routes

Get data from api - '/api'
post data to api - '/api'
sample post - '/api/sample'

# Note

I was unable to make a post request to the vello api, so I posted to jsonplaceholder
just for the purpose of this task. However, the data came from the vello test api, since I was able to
fetch the data from the given url.

# Files

The server (index.js) is at the root of the application
/src/controllers - The get and post functions
/src/helpers/test-api-helpers.js - Get and post from and to the vello api
/src/routes/nut-cracker - The routes to test on the browser/postman

# Explanation

This is a simple binary tree application that builds a binary tree and returns
the index of the target number. If found, a post request is sent to the API.
