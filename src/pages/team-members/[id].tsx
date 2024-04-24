import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Typography, Grid, Card, CardContent, Button, makeStyles } from '@material-ui/core';
import { teams } from '../../utils/mockdata';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  paginationContainer: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationText: {
    margin: theme.spacing(0, 2),
  },
  cardImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
}));

interface Team {
  id: number;
  name: string;
  members: string[];
  imageUrl: string;
}

const TeamMemberPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [team, setTeam] = useState<Team | null>(null);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 10;

  useEffect(() => {
    if (id && typeof id === 'string') {
      const selectedTeam = teams.find((team) => team.id === Number(id));
      if (selectedTeam) {
        setTeam(selectedTeam);
      }
    }
  }, [id]);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers: string[] = team ? team.members.slice(indexOfFirstItem, indexOfLastItem) : [];

  const totalPages = Math.ceil((team?.members.length || 0) / itemsPerPage);

  const classes = useStyles();

  return (
    <div style={{ padding: '20px' }}>
      {team ? (
        <>
          <Typography variant="h4">{team.name}</Typography>
          <Grid container spacing={3}>
            {currentMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card>
                  <CardContent>
                    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                      <Image src={team.imageUrl} alt={`${team.name} member`} layout="fill" objectFit="cover" className={classes.cardImage} />
                    </div>
                    <Typography variant="h6">{member}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <div className={classes.paginationContainer}>
            <Button disabled={page === 1} onClick={() => handleChangePage(page - 1)} color="primary" variant="contained">
              Previous
            </Button>
            <Typography variant="body1" className={classes.paginationText}>
              Page {page} of {totalPages}
            </Typography>
            <Button disabled={page === totalPages} onClick={() => handleChangePage(page + 1)} color="primary" variant="contained">
              Next
            </Button>
          </div>
        </>
      ) : (
        <Typography variant="body1">Team not found</Typography>
      )}
    </div>
  );
};

export default TeamMemberPage;
