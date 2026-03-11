import siteIcon from '../assets/react.svg'

/* Top bar for overall website
  TODO:
    - Add icon
    - Make buttons clickable
 */
function TopBar() {
  return (
    <div id="topBar">
      <nav aria-label="Maeve Dowd Campaign Navigation">
        <img src={siteIcon} className="siteIcon" aria-hidden="true"></img>
        <button>Meet Maeve</button>
        <button>Volunteer</button>
        <button>Endorsements</button>
        <button>Community Events</button>
      </nav>
      <span id="topBarSpace"></span>
      <div id="topBarQuote">Since you've made my existence political, I've become a politician.</div>
    </div>
  );
}

export default TopBar;
