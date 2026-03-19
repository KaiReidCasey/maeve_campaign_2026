import siteIcon from '../assets/react.svg'
import { Link } from 'react-router-dom';

/* Top bar for overall website
  TODO:
    - Add icon
    - Make clickable links into clickable buttons
 */
function TopBar() {
  return (
    <div id="topBar">
      <nav aria-label="Maeve Dowd Campaign Navigation">
        <ul>
        <li>
          <Link to="/"><img src={siteIcon} className="siteIcon" aria-hidden="true"></img></Link>
        </li>
        <li>
          <Link to="/MeetMaeve" className="topBarLink">Meet Maeve</Link>
        </li>
        <li>
          <Link to="/Volunteers" className="topBarLink">Volunteer</Link>
        </li>
        <li><Link to="/Endorsements" className="topBarLink">Endorsements</Link></li>
        <li><Link to="/CommunityEvents" className="topBarLink">Community Events</Link></li>
        </ul>
      </nav>
      <span id="topBarSpace"></span>
      <div id="topBarQuote">Since you've made my existence political, I've become a politician.</div>
    </div>
  );
}

export default TopBar;
