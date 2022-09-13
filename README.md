# MVC Tech Blog


## Description
This is a basic CMS-style blog site that was created using the Model, View, Controller paradigm.  This site is currently hosted on Heroku at [Heroku Deployment](https://powerful-wave-29911.herokuapp.com/) and can also be run locally using the files located in the GitHub repository [Github](https://github.com/nystephens/mvc-tech-blog).  To learn how to run this server locally please continue reading the [Installation](#installation) and [Usage](#usage) sections.  

This application was created using Node.js, express for the server, and sequelize to connect to a mysql database entitled "tech_blog_db".  All user, post, and comment data is stored in tech_blog_db.  The live app is currently deployed on Heroku, using the JAWSDB add on to store data.  All passwords have been encrypted using the bcrypt Node.js package.  The HTML views templates are generated using Handlebars.js.

