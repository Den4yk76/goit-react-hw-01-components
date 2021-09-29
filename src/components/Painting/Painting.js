import PropTypes from 'prop-types';
import defaultImg from '../../components/default.jpg';

export default function Painting({
  name,
  tag,
  location,
  avatar = defaultImg,
  stats,
}) {
  return (
    <div class="profile">
      <div class="description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          class="avatar"
          width="250"
        />
        <p class="name">{name}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers </span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li>
          <span class="label">Views </span>
          <span class="quantity">{stats.views}</span>
        </li>
        <li>
          <span class="label">Likes </span>
          <span class="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Painting.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
