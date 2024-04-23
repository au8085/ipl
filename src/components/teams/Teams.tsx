import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { teams } from "../../utils/mockdata";
import Image from 'next/image';

const TeamCard: React.FC<{ team: {id: number; name: string; members: string[]; imageUrl: string } }> = ({ team }) => {
  const [showMembers, setShowMembers] = useState(false);

  const toggleMembers = () => {
    setShowMembers(!showMembers);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card onClick={toggleMembers}>
        <div className="image-container">
          <Image src={team.imageUrl} alt={team.name} className="team-image" />
        </div>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {team.name}
          </Typography>
        </CardContent>
      </Card>
      {showMembers && <TeamMembersList members={team.members} />}
    </Grid>
  );
};

const TeamMembersList: React.FC<{ members: string[] }> = ({ members }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Team Members
        </Typography>
        <ul>
          {members.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const TeamList: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {teams.map((team, index) => (
        <TeamCard key={index} team={team} />
      ))}
    </Grid>
  );
};

export default TeamList;
