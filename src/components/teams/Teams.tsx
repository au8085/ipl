// components/TeamList.tsx
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link
import { makeStyles,} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
 heading:{
  color: '#000',
  textAlign: 'center',
  fontSize: '18px',
  fontWeight: 600,
 },
 ourTeam:{
    textAlign: 'center',
    marginTop: theme.spacing(4),
 }
 
}));

interface Team {
  id: number;
  name: string;
  members: string[];
  imageUrl: string;
  songUrl: string
}

interface TeamListProps {
  teams: Team[];
}

const TeamList: React.FC<TeamListProps> = ({ teams }) => {
  const classes = useStyles();
  return (
    <>
    <div className={classes.ourTeam}>
    <Typography variant="h5"> Our IPL Teams</Typography>
    </div>
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
                  <Typography variant="h5" className={classes.heading}>{team.name}</Typography>
                </CardContent>
              </div>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
    </>
  );
};

export default TeamList;
