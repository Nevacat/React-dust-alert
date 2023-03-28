import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMapLocationDot, faStar } from '@fortawesome/free-solid-svg-icons'
import * as S from "./style"

function Menu() {
  return (
    <S.MenuSection>
      <S.Menus to="/">
        <FontAwesomeIcon icon={faLocationDot}/>
        <S.Menu>지역보기</S.Menu>
      </S.Menus>
      <S.Menus to="/All">
        <FontAwesomeIcon icon={faMapLocationDot}/>
        <S.Menu>전체지역</S.Menu>
      </S.Menus>
      <S.Menus to="/Bookmark">
        <FontAwesomeIcon icon={faStar}/>
        <S.Menu>즐겨찾기</S.Menu>
      </S.Menus>
    </S.MenuSection>
  )
}

export default Menu