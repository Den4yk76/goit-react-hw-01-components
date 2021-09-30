import PropTypes from 'prop-types';

export default function Stats({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title && 'Upload stats'}</h2>

      <ul className="stat-list">
        {stats.map(el => {
          return (
            <li key={el.id} className="item">
              <span className="label">{el.label} </span>
              <span className="percentage">{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Stats.propTypes = {
  title: PropTypes.bool,
  stats: PropTypes.arrayOf(PropTypes.object),
};
