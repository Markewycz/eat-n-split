import Button from './Button';
import { FriendsTypes } from './App';
import { useState } from 'react';
import React from 'react';

type FormSplitBillProps = {
  selectedFriend: FriendsTypes;
  onSplitBill: (value: number) => void;
};

export default function FormSplitBill({
  selectedFriend,
  onSplitBill,
}: FormSplitBillProps) {
  const [bill, setBill] = useState<number>(0);
  const [paidByUser, setPaidByUser] = useState<number>(0);
  const paidByFriend = bill - paidByUser;
  const [whoIsPaying, setWhoIsPaying] = useState<string>('user');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label htmlFor="billValue">💰 Bill value</label>
      <input
        id="billValue"
        type="number"
        value={bill}
        onChange={e => setBill(Number(e.target.value))}
      />
      <label htmlFor="yourExpense">🧍‍♂️ Your expense</label>
      <input
        id="yourExpense"
        type="number"
        value={paidByUser}
        onChange={e =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value),
          )
        }
      />
      <label htmlFor="friendExpense">
        👩🏾‍🤝‍🧑🏿 {selectedFriend.name} expense
      </label>
      <input id="friendExpense" type="text" disabled value={paidByFriend} />
      <label htmlFor="whoPays">🤑 Who is paying the bill?</label>
      <select
        id="whoPays"
        value={whoIsPaying}
        onChange={e => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
