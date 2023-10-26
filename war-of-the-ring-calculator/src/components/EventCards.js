import React, { useState, useEffect } from "react";

const EventCards = () => {
    const [eventCardsData, setEventCardsData] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);

    useEffect(() => {
        axios.get('/api/event-cards')
            .then(response => {
                setEventCardsData(response.data);
            })
            .catch(error => {
                console.log("Error fetching event cards:", error);
            });
    }, []);

    const handleCheckboxChange = (event) => {
        const value = parseInt(event.target.value);
        setSelectedCards(prevState =>
            prevState.includes(value)
                ? prevState.filter(card => card !== value)
                : [...prevState, value]
        );
    };

    return (
        <div className="event-cards">
            <h3>Select Event Cards</h3>
            <form>
                {eventCardsData.map(card => (
                    <div key={card.id} className="event-card">
                        <input
                            type="checkbox"
                            id={`card-${card.id}`}
                            value={card.id}
                            checked={selectedCards.includes(card.id)}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor ={`card-${card.id}`} title={card.description}>
                            {card.name}
                        </label>
                    </div>
                ))}
            </form>
        </div>
    )
};

export default EventCards