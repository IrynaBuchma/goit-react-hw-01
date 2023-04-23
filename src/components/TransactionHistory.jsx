import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
    return (
        <table className="transaction-history">
            <thead>
                <tr style={{ backgroundColor: 'lightblue' }}>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Currency</th>
                </tr>
            </thead>
        
            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                  return (
                    <tr key={id} style={{ backgroundColor: 'orchid'}} >
                      <td>{type}</td>
                      <td>{amount}</td>
                      <td>{currency}</td>
                    </tr>
                  );
                })}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
  };
