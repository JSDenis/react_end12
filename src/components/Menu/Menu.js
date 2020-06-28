import React from 'react';

import './Menu.scss';

let menuList = [
    {
        name: 'tut.by',
        link: 'https://tut.by'
    },
    {
        name: 'tut.by1',
        link: 'https://tut.by'
    },
    {
        name: 'tut.by2',
        link: 'https://tut.by'
    },
    {
        name: 'tut.by3',
        link: 'https://tut.by'
    },
    
    {
        name: 'tut.by4',
        link: 'https://tut.by'
    }]

function Menu() {
    return (
        <ul className="list">
            {menuList.map((item, index) =>{  
            return <li key={index}><a href={item.link}>{item.name}</a></li>
            })}
        </ul>
    )
}

export default Menu;