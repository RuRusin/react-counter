import { Component } from 'react';
import './App.css';
import Counters from '/Components/Counters';

class App extends Component {
  state = {
    counters : [
      {id:1, value:0},
      {id:2, value:0},
      {id:3, value:0},
      {id:4, value:0},     
      {id:5, value:0},     
      {id:6, value:0},     
    ]
  }
}

handleReset = () => {
  const counters = this.state.counters.map(c => {c.value=0; return c;});
  this.setState ({ counters });
}

handleIncrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index].value++;
  this.setState({counters});
}

handleDecrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index].value--;
  this.setState({counters});
}

handleDelete = counterId => {
  const counters = this.state.counters.filter(c => c.Id !== counterId);
  this.setState({ counters });
}

handleRestart = () => {
  window.location.reload();
}



render ()
{
  return (
    <div className='App'>
      <NavBar totalCounters={this.state.counter.filter(c => c.value > 0).Length}></NavBar>
      <Counters counters={this.state.counters}></Counters>
    </div>
  )
}

export default App;
