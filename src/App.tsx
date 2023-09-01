import FriendsList from './FriendsList';
import FormAddFriend from './FormAddFriend';
import Button from './Button';
import FormSplitBill from './FormSplitBill';
import { useState } from 'react';

export type FriendsTypes = {
  id: string;
  name: string;
  image: string;
  balance: number;
};

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState<FriendsTypes[]>([]);

  function handleSetShowAddFriend() {
    setShowAddFriend(show => !show);
  }

  function handleAddFriend(friend: FriendsTypes) {
    setFriends(friends => [...friends, friend]);
    setShowAddFriend(false)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />

        {showAddFriend && (
          <FormAddFriend onAddFriend={handleAddFriend} />
        )}
        <Button onClick={handleSetShowAddFriend}>
          {!showAddFriend ? 'Add Friend' : 'Close'}
        </Button>
      </div>

      <FormSplitBill />
    </div>
  );
}
