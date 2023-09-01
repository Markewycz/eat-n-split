export default function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with $friend</h2>

      <label htmlFor="billValue">💰 Bill value</label>
      <input id="billValue" type="text" />
      <label htmlFor="yourExpense">🧍‍♂️ Your expense</label>
      <input id="yourExpense" type="text" />
      <label htmlFor="friendExpense">👩🏾‍🤝‍🧑🏿 $friend expense</label>
      <input id="friendExpense" type="text" disabled />
      <label htmlFor="whoPays">🤑 Who is paying the bill?</label>
      <select id="whoPays">
        <option value="user">You</option>
        <option value="friend">$Friend</option>
      </select>
    </form>
  );
}
