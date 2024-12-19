import NavBar from "./components/NavBar/NavBar";
import HomeIntro from "./components/Main/HomeIntro";
import DanceSchedule from "./components/DanceSchedule/DanceSchedule";
import DanceServices from "./components/DanceServices/DanceServices";
import Instructor from "./components/Instructor/Instructor";

import "./App.css";

// Sample data
const scheduleData = [
  { day: "Mon", time: "6:00 PM - 7:00 PM", type: "Bollywood" },
  { day: "Wed", time: "7:00 PM - 8:00 PM", type: "Persian" },
  { day: "Fri", time: "5:30 PM - 6:30 PM", type: "Kurdish" },
];



const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <HomeIntro />
      <DanceSchedule schedule={scheduleData} />
      <DanceServices/> 
      <Instructor/>

    </div>
  );
};

export default App;
