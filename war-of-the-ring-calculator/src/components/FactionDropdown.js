import React from 'react';

const FactionDropdown = ({ type, setSelectedFaction, selectedFaction }) => {
    // Sample faction data
    const factions = [
        'Dwarves',
        'Gondor',
        'The North',
        'Rohan',
        'Elves',
        'Isengard',
        'Sauron',
        'Southrons & Easterlings'
    ];

    // State to manage selected factions for attacker and defender
    const handleFactionChange = (event) => {
        const selectedFaction = event.target.value;
        
        // Update the state in the parent component
        setSelectedFaction(selectedFaction);
    };

    return (
        <div className={`${type}-faction`}>
            <h4>{type === 'attacker' ? 'Attacker Faction' : 'Defender Faction'}</h4>
            <label> 
                <select onChange={handleFactionChange}>
                    <option value="">Select Faction</option>
                    {factions.map((faction, index) => (
                        <option key={index} value={faction}>
                            {faction}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};

export default FactionDropdown;
