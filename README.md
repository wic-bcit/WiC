Hello!

I (njingco) have started the wic website creation using React. If you've taken the Intro to Web Dev course or have experience with basic HTML, CSS, and JS you should be good.

# Before you start

1. Have nodejs instaled [https://nodejs.org/en/]
2. Create a branch for yourself
3. Inform the group chat (WhatsApp) if you will be working on a section
4. Message the WhastsApp or the Discrod chat if you have any questions

# Data Strucure

Note: Ignore the other files not mentioned. Also not sure about how I did the file structure. This is my first time working with React so I'm not sure what the conventions of folder structure.

public: - This file contains the main index.html file. You don't have to use this.

src: - components: - Contains the Javascript Files for each section (Navbar, About Us, Events, etc.) - The js files have been created so feel free to change it if you're working on it. - css: - Contains all the css files used by each JS . - img: - Contains all images, not including the web icon

    - App.js:
        - Main JS where all the JS are called to be rendered

    - index.js:
        - Redeners App.js

# Naming Convention

- I don't really have one set up but I've made my main divs Camel Case, and childern lowercase with '-' for a space.

- You do not have to follow them BUT try to keep it unique as it can cause issue with the css if it has the same name if it exist.

# Starting React

1. `npm start` this starts up the server and automatically open the page on your browser.
2. `http://localhost:3000`

# Closing React server

1. `ctrl + c`
2. `y`
