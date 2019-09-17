import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import '../css/box.sass';
import Summary from './summary';

class Salary extends React.Component {
  constructor(props) {
    super(props);


    this.state = {

    };
  }

  render() {
    const { data, members, isLoading } = this.props;
    return (
      <div>
        <div>
          <div>
            { isLoading ? 'Loading...'
              : (
                <div className="table">
                  <div className="title">馬淩互動設計薪資系統</div>
                  <Table striped bordered hover>
                    <thead className="header">
                      <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Name</th>
                        <th>Point</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((value, i) => (
                        <tr key={value.name}>
                          <td>{i}</td>
                          <td>{value.name}</td>
                          <td>{ value.member }</td>
                          <td>{value.point}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <Summary data={data} members={members} />
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}

Salary.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  members: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Salary;
