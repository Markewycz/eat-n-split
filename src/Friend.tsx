
import { FriendValidation } from './FriendsList';
import Button from './Button';

interface FriendProps {
  friend: FriendValidation;
}

export default function Friend({ friend }: FriendProps) {
  return (
    <li>
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

      <Button>Select</Button>
    </li>
  );
}
