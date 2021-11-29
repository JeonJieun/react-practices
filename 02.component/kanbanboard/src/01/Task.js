import React from 'react';

export default function({name}) {
    return (
        <li className='TaskList__Task'>
            <input type='checkbox' checked='true' />
                {name}
                <a href='#' className='TaskList__Task--remove'></a>
        </li>
    );
} 