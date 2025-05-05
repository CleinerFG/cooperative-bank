import { Link } from 'react-router-dom';
import { House } from 'lucide-react';
import { Sun, Moon } from 'lucide-react';

export default function HomeLink() {
  return (
    <Link to="/app" rel="home">
      <House aria-label="Home Icon" />
    </Link>
  );
}
