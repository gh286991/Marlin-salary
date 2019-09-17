import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import Salary from '../components/salary';
import { getTrello } from '../actions/trello';
import '../css/box.sass';


class SalaryContainer extends Component {
  componentDidMount() {
    const { getTrello } = this.props; // eslint-disable-line no-shadow
    getTrello();
  }


  makedata= () => {
    const { trello } = this.props;
    const data = _.get(trello, 'list', []);
    const member = _.get(trello, 'member', []);

    const members = member.map((name) => name.fullName);

    const item = data.map((value) => {
      const nameID = value.idMembers[0];

      const name = member.map((v) => {
        const { id } = v;
        if (nameID === id) {
          return v.fullName;
        }
        return null;
      }).filter((names) => names != null);

      return {
        name: value.name,
        point: value.labels[0].name,
        member: name[0],
      };
    });
    return {
      item,
      members,
    };
  }

  render() {
    const {
      trello,
    } = this.props;
    const {
      isLoading,
    } = trello;

    const { item, members } = this.makedata();

    return (
      <div>
        <Salary data={item} members={members} isLoading={isLoading} />
      </div>
    );
  }
}

SalaryContainer.propTypes = {
  getTrello: PropTypes.func.isRequired,
  trello: PropTypes.object.isRequired,
};


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
