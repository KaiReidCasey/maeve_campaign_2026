import './App.css'

import TopBar from './TopBar';
import LandingMainBody from './LandingMainBody';
import MeetMaeve from './MeetMaeve';
import Volunteer from './Volunteers';
import Endorsements from './Endorsements';
import CommunityEvents from './CommunityEvents';
import Footer from './Footer';

/* TODO:
    - Pull page content out into nested component
    - Replace brs with appropriate margins on children
 */

function App() {
  return <div>
    <TopBar />
    <LandingMainBody />
    <br /><br /><br />
    <MeetMaeve />
    <br /><br /><br />
    <Volunteer />
    <br /><br /><br />
    <Endorsements />
    <br /><br /><br />
    <CommunityEvents />
    <br /><br /><br />
    <Footer />
  </div>;
}

export default App;
