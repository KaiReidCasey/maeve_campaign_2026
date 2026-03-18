import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

/* Website's community events page
  TODO:
    - Add calendar
 */

function CommunityEvents() {
  return (
    <div>
      <TopBar />
      <div>
        <h2>Community Events</h2>
        <div>March 17 - (St. Patrick's Day) POWR Meeting AS220</div>
        <div>March 31 - Trans Day of Visibility Vigil</div>
        <div>May 30 - RI Trans Health Conference</div>
      </div>
      <Footer />
    </div>
  );
}

export default CommunityEvents;
