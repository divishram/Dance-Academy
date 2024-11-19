import NavBar from "./components/NavBar/NavBar";
import HomeIntro from "./components/Main/HomeIntro";
import DanceSchedule from "./components/DanceSchedule/DanceSchedule";
import DanceServices from "./components/DanceServices/DanceServices";

import "./App.css";

// Sample data
const scheduleData = [
  { day: "Mon", time: "6:00 PM - 7:00 PM", type: "Bollywood" },
  { day: "Wed", time: "7:00 PM - 8:00 PM", type: "Persian" },
  { day: "Fri", time: "5:30 PM - 6:30 PM", type: "Kurdish" },
];

const services = [
  {
    id: "1",
    imageSrc: "images/bollywood-dance.webp",
    imageAlt: "2 Indian women in cultural dance clothing",
    title: "Bollywood Dance",
    description: "Learn the energetic form of Bollywood dance, combining classical Indian dance with contemporary moves.",
  },
  {
    id: "2",
    imageSrc: "images/persian-dance.webp",
    imageAlt: "Persians dancing with traditional clothing. Iranian flag on the right side",
    title: "Persian Dance",
    description: "Experience the graceful choreography of Persian dance.",
  },
  {
    id: "3",
    imageSrc: "images/kurdish-dance.webp",
    imageAlt: "Kurdish woman wearing red clothing with hand on her hip",
    title: "Kurdish Dance",
    description: "Try the unique rhythms of Kurdish dance, a blend of ancient traditions and joyful choreography.",
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <HomeIntro />
      <DanceSchedule schedule={scheduleData} />
      <DanceServices services={services}    /> 
    </div>
  );
};

export default App;
