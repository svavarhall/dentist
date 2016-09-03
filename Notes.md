# Project notes

## Project information

To set up the project we used [ReactjsProgram](http://courses.reactjsprogram.com/courses/reactjsfundamentals/).

## Links

[Markdown Guide](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

[React Documentation](https://facebook.github.io/react/docs/getting-started.html)

[Pure Ui](http://rauchg.com/2015/pure-ui/)

[React storybook](https://github.com/kadirahq/react-storybook)

[React Bootstrap](https://react-bootstrap.github.io/introduction.html)

[AirBnB styleguide](https://github.com/airbnb/javascript)

## Building from the ground up
```mkdir foldername && cd foldername```

Initialize a project with package.json
```npm init```

Lets start with fetching the dependencies for react
```npm install --save react react-dom```

Installing with --save-dev splits package.json into production and dev dependencies
```npm install --save-dev html-webpack-plugin webpack webpack-dev-server babel-core babel-loader babel-preset-react```

```mkdir app && cd app```

Fill out a boilerplate index.html file (Atom: html + TAB) with a div with id="app"
```touch index.html & touch index.js```

Webpack will bundle our code into production ready, minified js
```touch webpack.config.js```


## Terms

A pure function:
* Doesn't depend on variables outside its scope
* Doesn't modify variables outside its scope
* Doesn't make Ajax requests
* Doesn't manipulate the DOM
