// components/TeamList.tsx
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link

interface Team {
  id: number;
  name: string;
  members: string[];
  imageUrl: string;
}

interface TeamListProps {
  teams: Team[];
}

const TeamList: React.FC<TeamListProps> = ({ teams }) => {
  return (
    <Grid container spacing={3}>
      {teams.map((team) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={team.id}>
          <Link href={`/team-members/${team.id}`}> {/* Navigate to TeamMemberPage with team id */}
            <Card style={{ cursor: 'pointer' }}>
              <div>
                <div style={{ position: 'relative', width: '100%', paddingTop: '75%' }}>
                  {/* Maintain aspect ratio for the image */}
                  <Image
                    src={team.imageUrl}
                    alt={team.name}
                    layout="fill"
                    objectFit="cover"
                    className="team-image"
                  />
                </div>
                <CardContent>
                  <Typography variant="h5">{team.name}</Typography>
                </CardContent>
              </div>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default TeamList;
