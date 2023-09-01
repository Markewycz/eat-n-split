import { FriendsTypes } from './App';
import Button from './Button';

// tu tak samo importuje to i musze to dac typ
type FriendProps = {
  friend: FriendsTypes;
  selectedFriend: FriendsTypes | null;
  onSelection: (friend: FriendsTypes) => void;
};

export default function Friend({
  friend,
  selectedFriend,
  onSelection,
}: FriendProps) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 ? (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {friend.name} owe you {Math.abs(friend.balance)}€
        </p>
      ) : friend.balance === 0 ? (
        <p className="">You and {friend.name} are even!</p>
      ) : null}

      <Button onClick={() => onSelection?.(friend)}>
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </li>
  );
}
