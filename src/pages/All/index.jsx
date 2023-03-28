import React from 'react';
import { useSelector } from 'react-redux';
import { useGetPostsQuery } from '../../api/DustList';
import Card from '../../components/Cards';

function All() {
  const { sidoName } = useSelector((state) => state.selectData);
  const { data, error, isLoading } = useGetPostsQuery(sidoName);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const items = data.response.body.items;
  return <div>
    {
      items.length&&items.map((item, index)=>(
        <Card key={index} dustData={item}/>  
      ))
    }
  </div>;
}

export default All;
