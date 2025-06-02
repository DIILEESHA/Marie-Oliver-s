import Gift from "./components/gift/Gift";
import Header from "./components/header/Header";
import Location from "./components/location/Location";
import Tips from "./components/location/Tips";
import Nav from "./components/nav/Nav";
import Rsvp from "./components/rsvp/Rsvp";
import Schedule from "./components/schedule/Schedule";

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Schedule />
      <Location />
      <Tips />
      <Gift />
      <Rsvp />
    </div>
  );
};

export default App;
