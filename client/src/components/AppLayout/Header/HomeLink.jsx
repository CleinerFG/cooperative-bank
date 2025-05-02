import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export default function HomeLink() {
  return (
    <Link to="/app" rel="home">
      <HomeRoundedIcon style={{ color: '#fff' }} />
    </Link>
  );
}
