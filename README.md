# dentist
A simple information page for a dental practice

## Project information
A React powered web app built using Node, ES6, React, Webpack and Babel. The
page uses Google's firebase to store data.


## Installing project
Prerequisite: Install Node

```git clone git@github.com:svavarhall/dentist.git```

```npm install```

Take Note, if NODE_ENV variable is set to production then devDependencies will
not be installed, if that is the case, use ```npm install --dev``` or run
```npm config set -g production false```

The app can be started with ```npm run start```

To Package the app use ```npm run production```

## Project requirements List
* Fully responsive
* Authentication for admins
* Localization, Icelandic/English/?Polish
* Add items to News Feed with support for images and videos
* Q&A with the ability to pin to top, remove and upvote questions
* Uploading and serving of files, .pdf, .odt etc.
* About Page with embedded map
