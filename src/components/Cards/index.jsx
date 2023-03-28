import React, { useContext, useEffect, useState } from 'react';
import { Grade } from '../../constants/Grade';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../../store/bookmarkReducer';

function Card({ dustData }) {
  const { bookmark } = useSelector((state) => state.bookmark);
  const [isBookmark, setIsBookmark] = useState(false)
  const dispatch = useDispatch();

  const onBookmark = (dustData) => {
    setIsBookmark(!isBookmark)
    if (!isBookmark) {
      dispatch(
        addBookmark({
          bookmark: {
            sidoName: dustData.sidoName,
            stationName: dustData.stationName,
          },
        })
      );
    } else {
      dispatch(
        removeBookmark({
          bookmark: {
            sidoName: dustData.sidoName,
            stationName: dustData.stationName,
          },
        })
      );
    }
  };

  useEffect(() => {
    bookmark.map((item) => {
      if (
        item.sidoName === dustData.sidoName &&
        item.stationName === dustData.stationName
      ) {
        setIsBookmark(true);
      }
    });
  }, []);

  return (
    <S.CardSection>
      <S.Card grade={dustData.pm10Grade}>
        <S.StationName>
          <S.SidoName>{dustData.sidoName}</S.SidoName>
          <br />
          {dustData.stationName}
        </S.StationName>
        <div
          onClick={() => {
            onBookmark(dustData);
          }}
        >
          {bookmark.find((item) => item.stationName === dustData.stationName) ? (
            <S.BookmarkIcon icon={solidStar} />
          ) : (
            <S.BookmarkIcon icon={regularStar} />
          )}
        </div>
        <S.Grade grade={dustData.pm10Grade}>{Grade[dustData.pm10Grade] ?? 'ㅡ'}</S.Grade>
        <p>미세먼지 수치: {dustData.pm10Value}</p>
        <p>{dustData.dataTime}</p>
      </S.Card>
    </S.CardSection>
  );
}

export default Card;
