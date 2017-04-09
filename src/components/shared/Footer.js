var React = require('react');

var Footer = function(props) {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <ul className="list-inline text-center">
                <li>
                  <a href="https://twitter.com/jackmarchant10" target="_blank" rel="nofollow">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="http://stackoverflow.com/story/jackmarchant" target="_blank" rel="nofollow">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-stack-overflow fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jackmarchant" target="_blank" rel="nofollow">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
            </ul>
            <p className="copyright text-muted">&copy; Jack Marchant 2017</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

module.exports = Footer;