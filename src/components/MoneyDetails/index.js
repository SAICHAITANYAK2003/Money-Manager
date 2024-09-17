// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="money-details-container">
      <div className="balanceAmount-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="amount-image"
        />
        <div className="balance-text">
          <p className="balance-title">Your Balance</p>
          <p className="balance-count" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="balanceAmount-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="amount-image"
        />
        <div className="balance-text">
          <p className="balance-title">Your Income</p>
          <p className="balance-count" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="balanceAmount-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="amount-image"
        />
        <div className="balance-text">
          <p className="balance-title">Your Expenses</p>
          <p className="balance-count" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
