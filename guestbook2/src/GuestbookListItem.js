import React from 'react';

export default function({title, content}) {
    return (
        <li className="Guestbook__List__Item">
              <strong>{title}</strong>
              <p>
                  {content}
              </p>
              <strong></strong>
              <a href='#'>삭제</a>
        </li>
    )
}