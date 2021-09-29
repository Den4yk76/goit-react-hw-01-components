import Painting from './Painting/Painting';
import Stats from './Stats/Stats';
import user from '../user.json';
import statisticalData from '../statistical-data.json';

export default function App() {
  return (
    <div>
      <Painting
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stats title stats={statisticalData} />
    </div>
  );
}
