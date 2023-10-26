import React, { useState, useEffect } from 'react';

const CharactersInput = ({ type, faction }) => {
  const evilCharacters = ['Saruman', 'Mouth of Sauron', 'Witch King'];
  const goodCharacters = ['Pippin', 'Merry', 'Boromir', 'Gimli', 'Legolas', 'Strider', 'Aragorn', 'Gandalf the Grey', 'Gandalf the White'];

  const [selectedCharacters, setSelectedCharacters] = useState([]);

  useEffect(() => {
    // Clear the selected characters when the faction changes
    setSelectedCharacters([]);
  }, [faction]);

  const handleCharacterChange = (event) => {
    const value = event.target.value;
    setSelectedCharacters(prevState => 
      prevState.includes(value)
        ? prevState.filter(item => item !== value)
        : [...prevState, value]
    );
  };

  const isEvil = [
    'Isengard',
    'Sauron',
    'Southrons & Easterlings'].includes(faction); // Replace with actual evil faction names
  const isGood = ['Dwarves',
    'Gondor',
    'The North',
    'Rohan',
    'Elves'].includes(faction); // Replace with actual good faction names

  const availableCharacters = isEvil ? evilCharacters : isGood ? goodCharacters : [];

  return (
    <div className={`${type}-characters`}>
      <h4>{type.charAt(0).toUpperCase() + type.slice(1)} Characters</h4>
      {availableCharacters.map((character, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={character}
            checked={selectedCharacters.includes(character)}
            onChange={handleCharacterChange}
          />
          {character}
        </label>
      ))}
    </div>
  );
};

export default CharactersInput;
