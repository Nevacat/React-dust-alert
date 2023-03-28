import React from 'react'
import { SidoData } from '../../../constants/SidoData'

function SidoLists(props) {

  return (
    <div>
      <select name="sido" id="sido" {...props}>
        {SidoData.map((list, index)=>(
          <option key={index} value={list}>{list}</option>
        ))}
      </select>
    </div>
  )
}

export default SidoLists