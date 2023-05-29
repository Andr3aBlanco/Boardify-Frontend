import React from 'react';
import TournamentCard from './TournamentCard';

const TournamentsList = ({ tournaments }) => {
  return (
    <div>
      {tournaments.map((tournament) => (
        <TournamentCard
          key={tournament.id}
          imageUrl={tournament.imageUrl}
          tournamentName={tournament.name}
          gameName={tournament.game}
          teamCount={tournament.teamCount}
          teamSize={tournament.teamSize}
          attendeesCount={tournament.attendeesCount}
          location={tournament.location}
          date={tournament.date}
          entryFees={tournament.entryFees}
          prize={tournament.prize}
        />
      ))}
    </div>
  );
};

export default TournamentsList;
