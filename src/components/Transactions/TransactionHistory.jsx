import css from './Transactions.module.css';
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
    return (
        <table className={css.transaction}>
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
    items: PropTypes.array.isRequired,
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }
