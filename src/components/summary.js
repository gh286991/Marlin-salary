import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import '../css/box.sass';


class Summary extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      data,
      point: null,
      salary: 70000,
      base: 10000,
      others: '',
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
    });
  }

  salaryChange=(e) => {
    const { value } = e.target;

    this.setState({
      salary: value,
    });
  }

  baseChange=(e) => {
    const { value } = e.target;

    this.setState({
      base: value,
    });
  }

  othersChange = (e) => {
    const { value } = e.target;

    this.setState({
      others: value,
    });
  }

  render() {
    const { point } = this.state;
    return (
      <div>
        <div className="bottom">
          <div className="subtitle">每人各自得點</div>
          <p>{JSON.stringify(point)}</p>
        </div>
        <form>
          <div className="subtitle">收入支出相關設定</div>
          <label>
                    本月薪水
            <input type="number" value={this.state.salary} onChange={this.salaryChange} />
                    固定底薪(每人)
            <input type="number" value={this.state.base} onChange={this.baseChange} />
                    雜項支出
            <input type="number" value={this.state.others} onChange={this.othersChange} />
          </label>
        </form>
        <div className="subtitle">每人分到的錢</div>
        <div className="result">{}</div>
      </div>
    );
  }
}

// Summary.propTypes = {
//   isLoading: PropTypes.bool.isRequired,
//   data: PropTypes.arrayOf(PropTypes.object),
// };

export default Summary;
