import React, { useState } from 'react';
import './styles.css';
import ActionButtons from './components/ActionButtons';
import FactionDropdown from './components/FactionDropdown';
import UnitsInput from './components/UnitsInput';
import CharactersInput from './components/CharactersInput';

function App() {
  const [attackerFaction, setAttackerFaction] = useState('');
  const [defenderFaction, setDefenderFaction] = useState('');

  return (
    <div className='App'>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet"/>
      <h1>War of the Ring Combat Calculator</h1>

      <div className="setup">
        <div className='attacker'>
          <h2>Attacker Setup</h2>
          <FactionDropdown type="attacker" setSelectedFaction={setAttackerFaction} selectedFaction={attackerFaction}/>
          <UnitsInput type="attacker" />
          <CharactersInput type="attacker" faction={attackerFaction} />
        </div>

        <div className='defender'>
          <h2>Defender Setup</h2>
          <FactionDropdown type="defender" setSelectedFaction={setDefenderFaction} selectedFaction={defenderFaction}/>
          <UnitsInput type="defender" />
          <CharactersInput type="defender" faction={defenderFaction}/>
        </div>
      </div>
    </div>
  );
}

export default App;
