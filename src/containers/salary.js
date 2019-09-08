import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import Salary from '../components/salary';
import { getTrello } from '../actions/trello';


class SalaryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { getTrello } = this.props;
    getTrello();
  }


  makedata= () => {
    const { trello } = this.props;
    const data = _.get(trello, 'list', []);
    const member = _.get(trello, 'member', []);

    const item = data.map((value, i) => {
      const nameID = value.idMembers[0];

      const name = member.map((value, index) => {
        const { id } = value;
        if (nameID === id) {
          return value.fullName;
        }
        return null;
      }).filter((value) => value != null);

      return {
        name: value.name,
        point: value.labels[0].name,
        member: name[0],
      };
    });

    return item;
  }

  render() {
    const {
      getTrello, trello,
    } = this.props;
    const {
      isLoading,
    } = trello;
    const data = this.makedata();

    return (
      <div>
        <Salary getTrello={getTrello} data={data} isLoading={isLoading} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getTrello,
  },
  dispatch,
);

export default connect(
  (state) => (state),
  mapDispatchToProps
)(SalaryContainer);
