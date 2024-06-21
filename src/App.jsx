import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  const appData = [
    {title: "Easy", targetTime: 1},
    {title: "Not Easy", targetTime: 5},
    {title: "Getting tough", targetTime: 10},
    {title: "Pors ONLY", targetTime: 15},
  ]
  return (
    <>
      <Player />
      <div id="challenges">
        {appData.map((x) => <TimerChallenge key={x.title} title={x.title} targetTime={x.targetTime} />)} 
      </div>
    </>
  );
}

export default App;
