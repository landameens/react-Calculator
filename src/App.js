import React, { Component } from 'react';
import Total from './components/total/Total';
import History from './components/history/History';
import Operation from './components/operation/Operation';

class App extends Component {

  state = {
    transactions: [],
    description: '',
    amount: '',
  }

  addTransaction = add => {

    const transactions = [...this.state.transactions,
    {
      id: `cmr${(+new Date()).toString(16)}nk`, 
      description: this.state.description,
      amount: this.state.amount,
      add
    }
    ];

    this.setState({ 
      transactions,
      description: '', 
      amount: '',
     });
  }

  addAmount = e => {
    this.setState({amount: e.target.value});
  }

  addDescription = e => {
    this.setState({description: e.target.value});
  }

  render() {
    return (
      <>
        <header>
          <h1>Кошелек</h1>
          <h2>Калькулятор расходов</h2>
        </header>
  
        <main>
          <div className="container">
            <Total />
            <History transactions={this.state.transactions}/>
            <Operation 
              addTransaction={this.addTransaction}
              addAmount={this.addAmount}
              addDescription={this.addDescription}
              description={this.state.description}
              amount={this.state.amount} />
          </div>
        </main>
      </>
    );
  }
}

export default App;
