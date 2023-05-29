import React from 'react';
import TournamentsList from './TournamentList';

const TournamentsPage = () => {
  // This data needs to be changed to come from database 
  const tournaments = [
    {
      id: 1,
      imageUrl: 'https://www.example.com/image1.jpg',
      name: 'Tournament 1',
      game: 'Game 1',
      teamCount: 10,
      teamSize: 5,
      attendeesCount: 20,
      location: 'City 1',
      date: '2023-06-01',
      entryFees: '$10',
      prize: '$100',
    },
    {
      id: 2,
      imageUrl: 'https://www.example.com/image2.jpg',
      name: 'Tournament 2',
      game: 'Game 2',
      teamCount: 8,
      teamSize: 4,
      attendeesCount: 16,
      location: 'City 2',
      date: '2023-06-05',
      entryFees: '$15',
      prize: '$200',
    },
    // Add more tournaments here...
    {
      id: 10,
      imageUrl: 'https://www.example.com/image10.jpg',
      name: 'Tournament 10',
      game: 'Game 10',
      teamCount: 12,
      teamSize: 6,
      attendeesCount: 24,
      location: 'City 10',
      date: '2023-06-20',
      entryFees: '$20',
      prize: '$500',
    },
  ];

  return (
    <div>
      <h1>Tournaments</h1>
      <TournamentsList tournaments={tournaments} />
    </div>
  );
};

export default TournamentsPage;
