import React from 'react';
import  Header  from './components/header';
import  Balance  from './components/balance';
import  Incomeexpenses from './components/incomeexpenses';
import  TransactionList from './components/transactionlist';
import AddTransaction from './components/addtransaction';

import './App.css';

function App() {
  return (
    <div>
    <Header />
    <div className="container">
      <Balance />
      <Incomeexpenses />
      <TransactionList />
      <AddTransaction />
    </div>
    </div>
  )
}

export default App;
