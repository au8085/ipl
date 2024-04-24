// components/TeamPagination.tsx
import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core';
import Image from 'next/image';

interface Team {
  id: number;
  name: string;
  members: string[];
  imageUrl: string;
}

interface TeamPaginationProps {
  teams: Team[];
}

const TeamPagination: React.FC<TeamPaginationProps> = ({ teams }) => {
  const itemsPerPage = 3; // Number of items to display per page
  const [page, setPage] = useState(1); // Current page
  const totalPages = Math.ceil(teams.length / itemsPerPage); // Total number of pages

  // Function to handle previous page
  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1)); // Ensure page doesn't go below 1
  };

  // Function to handle next page
  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages)); // Ensure page doesn't exceed total pages
  };

  // Calculate start and end indices based on current page and items per page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get teams to display for current page
  const teamsToShow = teams.slice(startIndex, endIndex);

  return (
    <div>
      <Grid container spacing={3}>
        {teamsToShow.map((team) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={team.id}>
            <Card>
              <div>
                <Image src={team.imageUrl} alt={team.name} className="team-image" />
                <CardContent>
                  <Typography variant="h5">{team.name}</Typography>
                </CardContent>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button disabled={page === 1} onClick={handlePrevPage}>
          Previousdsfd
        </Button>
        <span style={{ margin: '0 10px' }}>
          Page {page} of {totalPages}
        </span>
        <Button disabled={page === totalPages} onClick={handleNextPage}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default TeamPagination;
