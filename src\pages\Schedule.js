import React from 'react';
import scheduleData from '../data/schedule';

function Schedule() {
  return (
    <div>
      <h1>Schedule</h1>
      <ul>
        {scheduleData.map((match) => (
          <li key={match.id}>{match.date} - {match.opponent}</li>
        ))}
      </ul>
    </div>
  );
}

export default Schedule;