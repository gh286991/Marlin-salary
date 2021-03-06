import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import '../css/box.sass';


class Summary extends React.Component {
  constructor(props) {
    super(props);
    const { data, members } = this.props;

    this.state = {
      counted: false,
      data,
      members,
      point: [],
      salary: 70000,
      base: 10000,
      others: 0,
    };
  }

  componentDidMount() {
    this.getPoint();
  }

  getPoint=() => {
    const { data } = this.state;
    const member = data.reduce((acc, item) => {
      const name = item.member;
      const point = Number(item.point);

      const accPoint = _.get(acc, [name], 0);

      acc[name] = accPoint + point;
      return acc;
    }, {});

    this.setState({
      point: member,
      counted: true,
    });
  }

  salaryChange=(e) => {
    const value = parseInt(e.target.value, 10);
    this.setState({
      salary: value,
    });
  }

  baseChange=(e) => {
    const value = parseInt(e.target.value, 10);

    this.setState({
      base: value,
    });
  }

  othersChange = (e) => {
    const value = parseInt(e.target.value, 10);

    this.setState({
      others: value,
    });
  }

  countResult=() => {
    const {
      salary, point, base, members, others,
    } = this.state;

    const membersN = members.length;
    const moneyShared = {};
    const totalPoints = Object.values(point).reduce((a, b) => (a + b));

    members.forEach((member) => {
      const pointsGot = point[member];

      let money;
      if (!pointsGot) {
        money = base - others / membersN;
      } else {
        money = (salary - base * membersN) * (pointsGot / totalPoints) + base - others / membersN;
      }
      moneyShared[member] = parseInt(money, 10);
    });

    return moneyShared;
  }

  render() {
    const {
      point, counted, salary, base, others,
    } = this.state;

    return (
      <div>
        <div className="bottom">
          <div className="subtitle">每人各自得點</div>
          <p>{JSON.stringify(point)}</p>
        </div>
        <form>
          <div className="subtitle">收入支出相關設定</div>
                    本月薪水
          <input type="number" value={salary} onChange={this.salaryChange} />
                    固定底薪(每人)
          <input type="number" value={base} onChange={this.baseChange} />
                    雜項支出
          <input type="number" value={others} onChange={this.othersChange} />
        </form>
        <div className="subtitle">每人分到的錢</div>
        <div className="result">{ counted ? JSON.stringify(this.countResult()) : '23232'}</div>
      </div>
    );
  }
}

Summary.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  members: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Summary;
