import React, { useState, useEffect } from 'react';
import style from './Nav.module.css';

export default function Nav() {
  const [activeButton, setActiveButton] = useState('Home');

  useEffect(() => {

      const buttons = document.getElementById("buttons")
  
      function callback (entrys) {
        entrys.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(style.visibleButtons);
          }
        });
      }
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
  
      const observadorButtons = new IntersectionObserver(callback, options);
  
      observadorButtons.observe(buttons);

    function handleScroll() {
      const home = document.getElementById('Home');
      const profile = document.getElementById('profile');
      const projects = document.getElementById('proyects');
      const contact = document.getElementById('contact');


      const scrollPosition = window.scrollY;  
      console.log(window.scrollY);
      if (scrollPosition >= contact.offsetTop -1) {
        setActiveButton('contact');
      } else if (scrollPosition >= projects.offsetTop -1) {
        setActiveButton('proyects');
      } else if (scrollPosition >= profile.offsetTop) {
        setActiveButton('profile');
      } else if (scrollPosition >= home.offsetTop) {
        setActiveButton('Home');
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  function handlerScroll(page) {
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }

  return (
    <div className={style.nav}>
  
      <div className={style.containerBtns} id='buttons'>
        <button onClick={() => handlerScroll('Home')} className={activeButton === 'Home' ? `${style.btns} ${style.active}` : style.btns}>
          Home
        </button>
        <button onClick={() => handlerScroll('profile')} className={activeButton === 'profile' ? `${style.btns} ${style.active}` : style.btns}>
          Profile
        </button>
        <button onClick={() => handlerScroll('proyects')} className={activeButton === 'proyects' ? `${style.btns} ${style.active}` : style.btns}>
          Proyects
        </button>
        <button onClick={() => handlerScroll('contact')} className={activeButton === 'contact' ? `${style.btns} ${style.active}` : style.btns}>
          Contact
        </button>
      </div>
    </div>
  );
}