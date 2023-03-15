import React from 'react'
import NavDown from './NavDown'
import NavUp from './NavUp'
import { useState, useEffect } from 'react';

const Menu = () => {
  const [scrollPosition, setScrollPosition] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    const checkFixed = position > 70;
    setScrollPosition(checkFixed);
  };
  const classSection = `bg-lime-200 ${scrollPosition ?"fixed top-0 left-0 w-full z-50" : "static"}`;
  return (
    <section className={classSection} >
        <NavUp />
        <NavDown />
    </section>
  )
}

export default Menu