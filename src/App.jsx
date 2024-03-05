import React, { useEffect, useState } from 'react'
import SideBar from './components/SideBar'
import ASide from './components/ASide'
import Router from './Router';
import { ThemeContext } from './contexts/ThemeContext';

export default function App() {
  const dark = localStorage.theme === "dark"
  const [ showAside, setShowAside ] = useState(false)
  const [ darkTheme, setDarkTheme ] = useState(dark)
  const [ hideAlert, setHideAlert ] = useState(true)

  useEffect(() => {
    localStorage.theme = darkTheme ? "dark" : "light"
  }, [darkTheme])

  return (
    <div className={`${darkTheme ? 'dark' : 'light'} w-full bg-slate-600`}>
      <SideBar showAside={showAside} setShowAside={setShowAside} />

      <div className="lg:pl-[17rem] md:pr-[22rem]">
        <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
          <Router />
        </ThemeContext.Provider>
      </div>

      <ASide setShowAside={setShowAside} showAside={showAside} />

    </div>
  )
}

