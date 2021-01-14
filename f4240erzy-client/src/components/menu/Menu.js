import React, { useEffect, useState }  from 'react';
import Game from '../game/Game'
import About from '../about/About'
import './Menu.css'


function Menu(){
    // 1 - menu
    // 2 - game
    // 3 - about
    const [view, setView] = useState(1)

    if (view == 1) {
        return(
            <div className="container">
                <div className="title">
                    F424erzy
                </div>
                <div className="menu-button" onClick={() => setView(2)}>
                    New game
                </div>
                <div className="menu-button" onClick={() => setView(3)}>
                    About
                </div>
            </div>
        )
    }
    else if(view == 2){
        return(
            <Game backToMenu={() => { setView(1) }}/>
        )
    }
    else if(view == 3){
        return(
            <About backToMenu={() => { setView(1) }} />
        )
    }
}

export default Menu;