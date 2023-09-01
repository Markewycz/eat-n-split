import Friend from './Friend';
import { FriendsTypes } from './App';

// const initialFriends = [
//   {
//     id: 118836,
//     name: 'Clark',
//     image: 'https://i.pravatar.cc/48?u=118836',
//     balance: -7,
//   },
//   {
//     id: 933372,
//     name: 'Sarah',
//     image: 'https://i.pravatar.cc/48?u=933372',
//     balance: 20,
//   },
//   {
//     id: 499476,
//     name: 'Anthony',
//     image: 'https://i.pravatar.cc/48?u=499476',
//     balance: 0,
//   },
// ];

// tu tak samo importuje
type FriendsListProps = {
  friends: FriendsTypes[];
  selectedFriend: FriendsTypes | null;
  onSelection: (friend: FriendsTypes) => void;
};

export default function FriendsList({
  friends,
  selectedFriend,
  onSelection,
}: FriendsListProps) {
  return (
    <ul>
      {friends.map(friend => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}
