import React from 'react'
import TeamList from "../components/teams/Teams";
import { teams } from '../utils/mockdata';
const HomePage = () => {
  return (
    <div className='pad10'>
      <h1> Ipl Team </h1>
      <TeamList teams={teams} />
    </div>
  )
}

export default HomePage
