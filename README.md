## Geowox Coding Challenge

This Repo is a simple React Project for Geowox Coding challenge! this project had been containerized with Docker and there is a docker-compose.yml file in the root directory to boot up the client side service!

There is only One Service involved in this project, and it is been called `geowox_client`.

### Thoughts on this project

First of all before I began this, i actually created a mind map of what i want to do. this step is really important for me on any thing and the code that i want to write, because it clears my path! you can [see my mind map at here](https://coggle.it/diagram/X4rBjypHpZXUDFit/t/__geowox-test__)!

### The Project

For client side I used React, and since the project was not way more big, i did not envolved any kind of state managment like **Redux** or Recoil, and i used the pure React context api, which perfectly fits for this kind of small project!

I developed my entire project in modular way, in which every component has a clear folder structure for itself and is really simple to undrestand the code!

I used Mapbox for this project, because it it free and easy to use based on my location ( Iran ), because Google Developer console is gives 403 for Iranian developers. before this happened to us i get to used google api console alot on different stuff along side with map api, but unfortunatley as of now, i could not access the google console properly and get API_KEY of it! and since i had some experience with map box in multiple enterprise projects ( not large scale, mid-level projects like 10k active users ) and since it was satisfyed the busseness at the time, I decided to go with Mapbox!

also please notice that i included my `.env` file on production, and yes :) I know that it is wrong, but since i wanted to faciliate the setup for you, i reduced the effort of getting Mapbox api key and other stuff for you, I just wanted that to be easy for you to boot up the project :)

### How to run project

there are two ways to run this project, docker or the casual way:

#### casual Way

1. clone the project
2. run `npm install`
3. open the project on port `http://localhost:3000`

#### docker way

you need to install `docker` and `docker-compose` for this.

1. clone the project
2. run `docker-compose up -d`

**NOTE**: please note that if you go the docker way, you need to open `http://localhost:3010` ; b/c i mapping it to 3010 in compose file!

---

## what I might do in the next steps:

There is a list of things to do as a next step:

1. I might make it **responsive**!
2. I might use **typescript** for static type checking
3. have to use **snapshot**, **unit** and **integration** test in client side
4. definitly this is not a bug free application, of course there would be some bugs, and i should resolve.

Hope you Best!  
Ahmad (@a_m_dev)
