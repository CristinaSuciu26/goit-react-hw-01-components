import styles from './Transactions.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  console.log('items:', items);
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((items, index) => (
          <tr key={index}>
            <td>{items.type}</td>
            <td>{items.amount}</td>
            <td>{items.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
