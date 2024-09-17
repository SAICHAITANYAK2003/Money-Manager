import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const updatedtransactionList = transactionList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({transactionList: updatedtransactionList})
  }

  onChangetitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const changeOption = transactionTypeOptions.find(
      eachOption => eachOption.optionId === optionId,
    )
    const {displayText} = changeOption
    const newTransactionItem = {
      id: uuidv4(),
      name: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransactionItem],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, transactionList} = this.state
    const incomeAmount = this.getIncome()
    const balanceAmount = this.getBalance()
    const expensesAmount = this.getExpenses()
    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="header-container">
            <h1 className="title-name">Hi,Richard</h1>
            <p className="">Welcome back to your Money Manager</p>
          </div>
          <div className="data-container">
            <MoneyDetails
              incomeAmount={incomeAmount}
              balanceAmount={balanceAmount}
              expensesAmount={expensesAmount}
            />
          </div>
          <div className="form-container">
            <form className="transaction-form" onSubmit={this.onAddTransaction}>
              <h1>Add Transaction</h1>
              <label className="input-label" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="input"
                placeholder="TITLE"
                onChange={this.onChangetitleInput}
                value={titleInput}
              />
              <label className="input-label" htmlFor="amount">
                Amount
              </label>
              <input
                type="text"
                id="amount"
                className="input"
                placeholder="AMOUNT"
                onChange={this.onChangeAmountInput}
                value={amountInput}
              />
              <label htmlFor="select">Type</label>
              <select
                id="select"
                className="input"
                onChange={this.onChangeOptionId}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button
                className="button"
                type="submit"
                onClick={this.onSubmitBtn}
              >
                Add
              </button>
            </form>

            <div className="transaction-history">
              <h1 className="transaction-heading">History</h1>
              <div className="transaction-data-container">
                <ul className="transaction-data">
                  <li className="transaction-header">
                    <p className="transaction-title">Title</p>
                    <p className="transaction-Amout">Amount</p>
                    <p className="transaction-type">Type</p>
                    <p className="transaction-type">Delete</p>
                  </li>
                  {transactionList.map(eachTransaction => (
                    <TransactionItem
                      key={eachTransaction.id}
                      transactionDetails={eachTransaction}
                      deleteTransaction={this.deleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
