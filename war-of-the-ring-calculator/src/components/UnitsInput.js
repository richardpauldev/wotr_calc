import React, { useState } from 'react';

const UnitsInput = ({ type }) => {
  // State to manage the number of units for both attacker and defender
  const [units, setUnits] = useState({
    regular: 0,
    elite: 0,
    leaders: 0,
  });

  // Function to handle input changes for attacker
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUnits({
      ...units,
      [name]: value,
    });
  };

  return (
    <div className={`${type}-input`}>
      <div className="attacker-units">
        <h4>{type === 'attacker' ? 'Attacker Units' : 'Defender Units'}</h4>
        <div className='unit-input-wrapper'>
          <label>
            Regular:
            <input
              type="number"
              name="regular"
              value={units.regular}
              onChange={handleInputChange}
              min="0"
            />
          </label>
        </div>
        <div className='unit-input-wrapper'>
          <label>
            Elite:
            <input
              type="number"
              name="elite"
              value={units.elite}
              onChange={handleInputChange}
              min="0"
            />
          </label>
        </div>
        <div className='unit-input-wrapper'>
          <label>
            Leaders:
            <input
              type="number"
              name="leaders"
              value={units.leaders}
              onChange={handleInputChange}
              min="0"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default UnitsInput;
