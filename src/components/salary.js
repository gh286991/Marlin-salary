import React from 'react';
import PropTypes from 'prop-types';

class Salary extends React.Component {
  render() {
    const { getTrello, trello } = this.props;

    return (
      <div>
        <h2>Trello</h2>
        <div>
          <button type="button" onClick={() => getTrello()}>
            Get data
          </button>
          {' '}
          <div>
            {' '}
            {/* { isLoading ? 'Loading...' : JSON.stringify(data)} */}
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
