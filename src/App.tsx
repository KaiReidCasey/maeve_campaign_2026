import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MeetMaeve from './pages/MeetMaeve';
import Volunteers from './pages/Volunteers';
import Endorsements from './pages/Endorsements';
import CommunityEvents from './pages/CommunityEvents';

import './App.css'

// import TopBar from './components/TopBar';
// import LandingMainBody from './components/LandingMainBody';
// import MeetMaeve from './components/MeetMaeve';
// import Volunteer from './components/Volunteers';
// import Endorsements from './components/Endorsements';
// import CommunityEvents from './components/CommunityEvents';
// import Footer from './components/Footer';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meetmaeve" element={<MeetMaeve />} />
      <Route path="/volunteers" element={<Volunteers />} />
      <Route path="/endorsements" element={<Endorsements />} />
      <Route path="/communityevents" element={<CommunityEvents />} />
      {/* <Route path="/meetmaeve" element={<MeetMaeve />} />
      <Route path="/meetmaeve/:id" element={<MeetMaeve />} /> */}
    </Routes>
  );
}
