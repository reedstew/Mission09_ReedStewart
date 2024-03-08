import React from "react";
import logo from "./logo.svg";
import jsonData from ".//CollegeBaseballTeams.json";
import "./App.css";
import { NumberLiteralType } from "typescript";

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

const teamNames = jsonData.teams;

function Welcome() {
  return (
    <div>
      <h1>NCAA Basketball Teams</h1>
      <h3>
        This website lists out information about all the colleges in NCAA
        Basketball. Get ready for March Madness!
      </h3>
    </div>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <li>
        <div className="card">
          <h2>{oneTeam.school}</h2>
          <h3>Mascot Name: {oneTeam.name}</h3>
          <h3>
            Location: {oneTeam.city}, {oneTeam.state}
          </h3>
        </div>
      </li>
    );
  }
}

function TeamList() {
  return (
    <div>
      <ul className="card-container">
        {teamNames.map((teamNum) => (
          <Team {...teamNum} />
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <div>
        <TeamList />
      </div>
    </div>
  );
}

export default App;
