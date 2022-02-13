import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
// import LaunchItem from './LaunchItem';


const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      id
      flight_number
      name
      date_local
      success
    }
  }
`;

function Launches(){
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log(error); 
        return <p>Error happen</p>;
    }
};

export default Launches