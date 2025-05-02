import { Link } from 'react-router-dom';
import { GoHomeFill } from 'react-icons/go';

export default function HomeLink() {
  return (
    <Link to="/app" rel="home">
      <GoHomeFill aria-label="Home Icon" />
    </Link>
  );
}
