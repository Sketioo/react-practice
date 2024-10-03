import React from 'react'
import { AiFillHeart } from "react-icons/ai";

interface Props {
  onClick : () => void;
}
const Like = () => {
  return (
    <div>
      <AiFillHeart/>
    </div>
  )
}

export default Like