import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  console.log('Stats:', stats);
  return (
    <div className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map((stat, index) => (
          <li key={index} className={styles.item}>
            <section className={styles.section}>
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage}%</span>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default Statistics;
