import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const GradeColors = {
  "1" : "#0494fc",
  "2" : "#169916",
  "3" : "orange",
  "4" : "#FF0000",
  "5" : "A70000"
}

export const CardSection = styled.ul`
  width: 36rem;
  margin: 0 auto;
`

export const Card = styled.li`
  height: 20rem;
  font-size: ${(props)=>props.theme.fontRegular};
  color: #fff;
  background-color: ${(props)=>(
    GradeColors[props.grade] ?? "#000"
  )};
  border-radius:12px;
  margin:10px 0;
  padding:0.8rem;
  position:relative;
`
export const StationName = styled.p`
  font-size: ${(props)=>props.theme.fontMedium};
  font-weight:${(props)=>props.theme.weightBold};
`

export const SidoName = styled.span`
  font-size: ${(props)=>props.theme.fontSemiMedium};
  font-weight:${(props)=>props.theme.weightRegular};
`

export const BookmarkIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 2.4rem;
  position: absolute;
  top:1rem;
  right:1rem;
`

export const Grade = styled.div`
  color:${(props)=>(
    GradeColors[props.grade] ?? "#000"
  )};
  font-size:  ${(props)=>props.theme.fontLarge};
  font-weight:${(props)=>props.theme.weightBold};
  text-align: center;
  line-height:8rem;
  background-color:#fff;
  border-radius:12px;
  margin: 1.2rem 2.4rem;
  `
