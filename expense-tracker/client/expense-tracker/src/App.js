  
import React from 'react';
import { Header } from './components/header';
import { Balance } from './components/balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/transactionlist';
import { AddTransaction } from './components/addtransaction';

import { GlobalProvider } from './content/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;