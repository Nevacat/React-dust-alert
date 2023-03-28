import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dustApi } from '../../api/DustList';
import Card from '../../components/Cards';
import store from '../../store';

function Bookmark() {
  const { bookmark } = useSelector((state) => state.bookmark);
  const dispatch = useDispatch();
  const [bookmarkList, setBookmarkList] = useState(null);

  async function allCityFectcher(bookmarkList) {
    const totalListArray = [];
    const bookmarkSidoArray = [];

    for (const list of bookmarkList){
      if(!totalListArray.includes(list.sidoName)){
        bookmarkSidoArray.push(list.sidoName)
      }
    }

    bookmarkSidoArray.forEach(async (city) => {
      const { data } = await store.dispatch(dustApi.endpoints.getPosts.initiate(city));
      totalListArray.push(...data.response.body.items);
    });

    return totalListArray;
  }

  useEffect(() => {
    allCityFectcher(bookmark).then((totalData) => {
      const bookmarkList = bookmark.map((bookmarkItem) => {
        return totalData.find((item) => item.stationName === bookmarkItem.stationName);
      });

      console.log('init bookmark: ', bookmarkList);

      setBookmarkList(bookmarkList);
    });
  }, [bookmark]);

  return <div>{bookmarkList ? bookmarkList.map((item, index) => <Card key={index} dustData={item} />) : null}</div>;
}

export default Bookmark;
