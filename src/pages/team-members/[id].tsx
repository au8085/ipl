// pages/team-members/[id].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { teams } from '../../utils/mockdata'; // Import teams from mockdata

interface Team {
  id: number;
  name: string;
  members: string[];
}

const TeamMemberPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [team, setTeam] = useState<Team | null>(null);

  useEffect(() => {
    if (id && typeof id === 'string') {
      const selectedTeam = teams.find((team) => team.id === Number(id));
      if (selectedTeam) {
        setTeam(selectedTeam);
      }
    }
  }, [id]);

  return (
    <div>
      {team ? (
        <div>
          <Typography variant="h4">{team.name}</Typography>
          <Typography variant="h6">Members:</Typography>
          <ul>
            {team.members.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
      ) : (
        <Typography variant="body1">Team not found</Typography>
      )}
    </div>
  );
};

export default TeamMemberPage;
