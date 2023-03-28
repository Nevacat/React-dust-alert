import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetPostsQuery } from '../../../api/DustList';
import { setStationName } from '../../../store/selectData';

function StationLists() {
  const { sidoName } = useSelector((state) => state.selectData);
  const { data, error, isLoading } = useGetPostsQuery(sidoName);
  const dispatch = useDispatch()
  useEffect(() => {
    if (isLoading)return;
    dispatch(setStationName(items[0].stationName));
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const items = data.response.body.items

  return (
    <div>
      <select name="station" id="station" defaultValue={items[0].stationName}>
        {items.map((list) => (
          <option key={list.stationName} value={list.stationName}>
            {list.stationName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StationLists;
