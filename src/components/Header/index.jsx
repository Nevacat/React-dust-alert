import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setSidoName, setStationName } from '../../store/selectData';
import SidoLists from './Sido';
import StationLists from './Station';
import * as S from './style';

function Header() {
  const {sidoName} = useSelector(state=>state.selectData)
  const dispatch = useDispatch();

  const onChange = (e) => {
    const {id, value} = e.target
    if (id === 'sido') {
      dispatch(setSidoName(value));
    }
    if(id === 'station') {
      dispatch(setStationName(value))
    }
  };

  const location = useLocation();

  return (
    <S.Header onChange={onChange}>
      {location.pathname === '/' ? (
        <>
          <SidoLists defaultValue={sidoName}/>
          <StationLists />
        </>
      ) : location.pathname === '/All' ? (
        <SidoLists />
      ) : (
        ''
      )}
    </S.Header>
  );
}

export default Header;
