(function() {
  'use strict';

  var Quiz = React.createClass({
    render: function() {
      return <div>Welcome to Quiz app created by { this.props.creator }.</div>;
    }
  });

  ReactDOM.render(<Quiz creator={ "Jose Alanya"}/>, document.getElementById('container'));
})();
