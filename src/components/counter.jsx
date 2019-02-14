import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate() {
    console.log('Counter - Updated');
  }

  componentWillUnmount() {
    console.log('Counter - Unmounted');
  }

  render() {
    console.log('Counter - Rendered');

    return (
      <div>
        <span className={this.getBadgesClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgesClasses() {
    let classes = "badge m-2 badge-";
    this.props.counter.value === 0 ? (classes += "warning") : (classes += "primary");
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
