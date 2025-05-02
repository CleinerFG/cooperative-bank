import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';

export default function HomeLink() {
  return (
    <Link to="/app" rel="home">
      <GoHome aria-label="Home Icon" />
    </Link>
  );
}
