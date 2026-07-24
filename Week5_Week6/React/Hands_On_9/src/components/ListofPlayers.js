import React from 'react';

function ListofPlayers() {

    const players = [
        { name: "Virat", score: 95 },
        { name: "Rohit", score: 85 },
        { name: "Gill", score: 65 },
        { name: "Rahul", score: 72 },
        { name: "Iyer", score: 60 },
        { name: "Pant", score: 78 },
        { name: "Hardik", score: 88 },
        { name: "Jadeja", score: 55 },
        { name: "Bumrah", score: 45 },
        { name: "Shami", score: 68 },
        { name: "Siraj", score: 75 }
    ];

    const below70 = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of Players</h2>

            <h3>All Players</h3>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>

            <h3>Players with Score Below 70</h3>
            <ul>
                {below70.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListofPlayers;