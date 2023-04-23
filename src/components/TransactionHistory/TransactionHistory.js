import PropTypes from 'prop-types';

const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(ta => {
            return (
              <tr key={ta.id}>
                <td>{ta.type}</td>
                <td>{ta.amount}</td>
                <td>{ta.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      ;
    </div>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
