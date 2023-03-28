import React from 'react'
import { useSelector } from 'react-redux';
import { useGetPostsQuery } from '../../api/DustList';
import Card from '../../components/Cards'

function Main() {
  const { sidoName, stationName } = useSelector((state) => state.selectData);
  const { data, error, isLoading } = useGetPostsQuery(sidoName);

  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const items = data.response.body.items
  const lists = items.filter((item)=>item.stationName === stationName)
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      {lists.length && <Card dustData={lists[0]}/>}
    </div>
  )
}

export default Main