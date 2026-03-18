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
        <Link to="/"><img src={siteIcon} className="siteIcon" aria-hidden="true"></img></Link>
        <Link to="/MeetMaeve">Meet Maeve</Link>
        <Link to="/Volunteers">Volunteer</Link>
        <Link to="/Endorsements">Endorsements</Link>
        <Link to="/CommunityEvents">Community Events</Link>
      </nav>
      <span id="topBarSpace"></span>
      <div id="topBarQuote">Since you've made my existence political, I've become a politician.</div>
    </div>
  );
}

export default TopBar;
