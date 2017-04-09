var React = require('react');
var Header = require('./Header');
var Footer = require('./Footer');

var Page = function(props) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width" />
        <title>{props.title}</title>
        <link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet" media="all" />
        <link href={`${props.env.BASE_URI}/assets/font-awesome.min.css`} rel="stylesheet" media="all" />
        <link rel="stylesheet" href={`${props.env.BASE_URI}/assets/bootstrap.min.css`} media="all" />
        <link rel="stylesheet" media="all" href={`${props.env.BASE_URI}/assets/application-be2ff9f885d12c26cff6790f5020bc6c7a22cbeb1947386800050aa4f4a6cbe9.css`} />
      </head>
      <body>
        <Header />
        {props.children}
        <Footer />
      </body>
    </html>
  );
};

module.exports = Page;