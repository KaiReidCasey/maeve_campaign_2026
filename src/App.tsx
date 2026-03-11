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
  return <div id="appMain">
    <TopBar />
    <LandingMainBody />
    <MeetMaeve />
    <Volunteer />
    <Endorsements />
    <CommunityEvents />
    <Footer />
  </div>;
}

export default App;
