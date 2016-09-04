var React = require('react');
import '../node_modules/bootstrap/less/bootstrap.less';
var Navigation = require('./components/Navigation');
var Content = require('./components/Content');
var Footer = require('./components/Footer');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Navigation />
                <Content />
                <Footer />
            </div>
        );
    }
});

module.exports = App;
