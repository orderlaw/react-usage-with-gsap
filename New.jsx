// packages import
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// files import
import Newcss from './New.module.css'

const New = () => {

  // naming using useRef
  const boxItem = useRef(null);

  // using gsap animations using useEffect
  useEffect(() => {
    gsap.to(boxItem.current, {
      rotation: "+=360",
      duration: 2,
      repeat: -1
    });
  }, [])

  return (
    <>
      <div className={Newcss.box_outer}>
        <div ref={boxItem} className={Newcss.box}></div>
      </div>
    </>
  )
}

export default New