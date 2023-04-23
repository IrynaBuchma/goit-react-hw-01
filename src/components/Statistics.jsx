import PropTypes from 'prop-types';

const getColorById = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
};

export default function Statistics({ title, stats }) {
    return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}

            <ul className="stat-list">
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li
                            className="item"
                            key={id}
                            style={{ backgroundColor: getColorById()}}
                        >
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}</span>
                </li>
                    )
                }
                )}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    stat: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })
}