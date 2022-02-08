import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
        <div>
            <div className="row">
                <div className='col-md-1'>
                    <span style={{ fontSize: 24 }}>
                    {this.formatCount()}
                    </span>
                </div>
                <div className='col-md-4'>
                    <button className='btn btn-secondary'
                    onClick={() => this.props.onIncrement(this.props.counter)}>
                        <i cLassName='fas fa-plus-circle' aria-hidden='true'></i>
                    </button>
                    <button className='btn btn-info m-2'
                    onClick={() => this.props.onDecrement(this.props.counter)}>
                        <i cLassName='fas fa-minus-circle' aria-hidden='true'></i>
                    </button>
                    <button className='btn btn-danger'
                    onClick={() => this.props.onDelete(this.props.counter.id)}>
                        <i className='fas fa-trash-o' aria-hidden='true'></i>
                    </button>
                </div>
            </div>
        </div>
    )   
  }

 getBadgeClasses = () => {
     let classes ='badge m-2 badge-';
     classes += this.props.counter.value === 0 ? 'warning' : 'primary';
     return classes;
 };

 formatCount = () => {
     const { value } = this.props.counter;
     return value === 0 ? 'Zero' : value;
 };

}

export default Counter;
