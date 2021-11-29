import React from 'react';
import guestbookListItems from './assets/json/data.json';
import GuestbookListItem from './GuestbookListItem';

export default function() {
    return (
      <ul class="Guestbook__List">
          {guestbookListItems.map((guestbookListItem) => <GuestbookListItem
                title = {guestbookListItem.title}
                content = {guestbookListItem.content} /> )}
      </ul>
    )
}