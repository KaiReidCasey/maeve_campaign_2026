import './App.css'

import TopBar from './components/TopBar';
import LandingMainBody from './components/LandingMainBody';
import MeetMaeve from './components/MeetMaeve';
import Volunteer from './components/Volunteers';
import Endorsements from './components/Endorsements';
import CommunityEvents from './components/CommunityEvents';
import Footer from './components/Footer';

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
