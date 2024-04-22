import React from 'react'
import "./topbar.css"

export default function topbar() {
    return (
        <div className='top'>
            <div className="topLeft">
                <img className='icon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwymUJSyVIucjAx0ic852wYI1RmKsNUEmYMgmWg2NRSQ&s" alt="ico" />
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'>Home</li>
                    <li className='topListItem'>About</li>
                    <li className='topListItem'>Contacto</li>
                    <li className='topListItem'>Iniciar Sesion</li>
                </ul>
            </div>
            <div className="topRight">
            
                <ul className='topList'>

                <li className="topListItem">

                </li>
                </ul>
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
