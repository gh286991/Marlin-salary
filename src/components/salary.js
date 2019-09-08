import React from 'react';
import PropTypes from 'prop-types';

class Salary extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    };
  }

  render() {
    const { getTrello, data ,isLoading } = this.props;
    console.log('in commpoent' , data)

    return (
      <div>
        <h2>Trello</h2>
        <div>
          {' '}
          <div>
            {' '}
            { isLoading ? 'Loading...' : JSON.stringify(data)}
          </div>
        </div>
      </div>
    );
  }
}

// GetFirebase.propTypes = {
//   readFirebase: PropTypes.func.isRequired,
//   firebase: PropTypes.shape([]).isRequired,
// };

export default Salary;
