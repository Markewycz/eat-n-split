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
  const [selectedFriend, setSelectedFriend] = useState<null | FriendsTypes>(
    null,
  );

  function handleSetShowAddFriend() {
    setShowAddFriend(show => !show);
  }

  function handleAddFriend(friend: FriendsTypes) {
    setFriends(friends => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend: FriendsTypes) {
    setSelectedFriend(selected => (selected?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value: number) {
    setFriends(friends =>
      friends.map(friend =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleSetShowAddFriend}>
          {!showAddFriend ? 'Add Friend' : 'Close'}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
