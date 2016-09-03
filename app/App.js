var React = require('react');
var NavBar = require('./components/NavBar');
var Content = require('./components/Content');
var Footer = require('./components/Footer');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <NavBar />
                <Content />
                <Footer />
            </div>
        );
    }
});

module.exports = App;
