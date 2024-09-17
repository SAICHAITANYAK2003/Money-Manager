// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, name, amount, type} = transactionDetails
  const onDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li className="TransactionItem-header">
      <p className="TransactionItem-title">{name}</p>
      <p className="TransactionItem-amount">Rs {amount}</p>
      <p className="TransactionItem-type">{type}</p>
      <button
        className="TransactionItem-button"
        onClick={onDelete}
        data-testid="delete"
        type="button"
      >
        <img
          className="TransactionItem-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
