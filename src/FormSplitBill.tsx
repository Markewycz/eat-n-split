import Button from './Button';
import { FriendsTypes } from './App';

type FormSplitBillProps = {
  selectedFriend: FriendsTypes;
};

export default function FormSplitBill({ selectedFriend }: FormSplitBillProps) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label htmlFor="billValue">💰 Bill value</label>
      <input id="billValue" type="text" />
      <label htmlFor="yourExpense">🧍‍♂️ Your expense</label>
      <input id="yourExpense" type="text" />
      <label htmlFor="friendExpense">
        👩🏾‍🤝‍🧑🏿 {selectedFriend.name} expense
      </label>
      <input id="friendExpense" type="text" disabled />
      <label htmlFor="whoPays">🤑 Who is paying the bill?</label>
      <select id="whoPays">
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
