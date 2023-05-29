import React from 'react';

const TournamentCard = ({
  imageUrl,
  tournamentName,
  gameName,
  teamCount,
  teamSize,
  attendeesCount,
  location,
  date,
  entryFees,
  prize,
}) => {
  return (
    <div className="tournament-card">
      <img src={imageUrl} alt={tournamentName} className="tournament-image" />
      <h2 className="tournament-name">{tournamentName}</h2>
      <p className="game-name">Game: {gameName}</p>
      <p className="team-count">Teams: {teamCount}</p>
      <p className="team-size">Team Size: {teamSize}</p>
      <p className="attendees-count">Attendees: {attendeesCount}</p>
      <p className="location">Location: {location}</p>
      <p className="date">Date: {date}</p>
      <p className="entry-fees">Entry Fees: {entryFees}</p>
      <p className="prize">Prize: {prize}</p>
      <button className="enroll-button">Enroll</button>
    </div>
  );
};

export default TournamentCard;
