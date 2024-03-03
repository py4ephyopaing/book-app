import React, { useState } from 'react'
import SideBar from './components/SideBar'
import ASide from './components/ASide'
import Home from './pages/Home'
import classNames from 'classnames';
import Router from './Router';

export default function App() {

  let [ showAside, setShowAside ] = useState(false);
  let [ darkTheme, setDarkTheme ] = useState(false);

  return (
    <div className={classNames({
      "w-full bg-slate-600": true,
      "dark": darkTheme
    })}>
      <SideBar showAside={showAside} setShowAside={setShowAside} />

      <div className="lg:pl-[17rem] md:pr-[22rem]">
        <Router />
      </div>

      <ASide setShowAside={setShowAside} showAside={showAside} />
    </div>
  )
}

