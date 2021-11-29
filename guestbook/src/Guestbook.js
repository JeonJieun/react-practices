import React from 'react';
import './assets/css/styles.css';
import GuestbookAddForm from './GuestbookAddForm';
import GuestbookList from './GuestbookList';

export default function() {
    return (
        <div className="Guestbook">
            
            <h1>방명록</h1>
            <GuestbookAddForm />
            <GuestbookList />

        </div>
    )
} 