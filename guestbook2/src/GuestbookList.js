import React from 'react';
import guestbookListItems from './assets/json/data.json';
import GuestbookListItem from './GuestbookListItem';

export default function() {
    return (
      <ul className="Guestbook__List">
          {guestbookListItems.map((guestbookListItem) => <GuestbookListItem
                key = {guestbookListItem.no}
                title = {guestbookListItem.title}
                content = {guestbookListItem.content} /> )}
      </ul>
    )
}