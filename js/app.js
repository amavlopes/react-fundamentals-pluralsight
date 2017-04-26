(function() {
  'use strict';

  var Quiz = React.createClass({
    propTypes: {
       books: React.PropTypes.array.isRequired
    },
    render: function() {
      return <div>
               <span>Welcome to Quiz app created by { this.props.creator }.</span>
               <div>
                { this.props.books.map(function(b){
                    return <Book title={b} />;
                })}
               </div>
             </div>;
    }
  });

  var Book = React.createClass({
    propTypes: {
      title: React.PropTypes.string.isRequired
    },
    render: function() {
      return <div><h4>{ this.props.title }</h4></div>;
    }
  });

  ReactDOM.render(<Quiz creator={ "Jose Alanya"}
                   books={ ['The Lord of The Rings', 'The Iliad']}/>, document.getElementById('container'));
})();
