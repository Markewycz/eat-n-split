import FriendsList from './FriendsList';
import FormAddFriend from './FormAddFriend';
import Button from './Button';
import FormSplitBill from './FormSplitBill';
import { useState } from 'react';

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleSetShowAddFriend() {
    setShowAddFriend(show => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />

        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleSetShowAddFriend}>
          {!showAddFriend ? 'Add Friend' : 'Close'}
        </Button>
      </div>

      <FormSplitBill />
    </div>
  );
}
