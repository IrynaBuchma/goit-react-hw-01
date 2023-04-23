import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const getColorById = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
};

export default function Statistics({ title, stats }) {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.stats__list}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li
                            className={css.item}
                            key={id}
                            style={{ backgroundColor: getColorById()}}
                        >
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}</span>
                </li>
                    )
                })}
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