import Button from './Button';
import React from 'react';
import { useState } from 'react';

// Czy importowanie tych typow to dobra praktyka czy da sie inaczej jakos to zrobic bo nie bierze automatycznie przypisanego typu w app.tsx
import { FriendsTypes } from './App';

type FormAddFriendProps = {
  // o tutaj ten typ bez friendsTypes bylby any
  onAddFriend: (friend: FriendsTypes) => void;
  // wywala tez blad eslint ze friend nie jest uzyte nigdzie ale jest declared. ustawilem rule pod to zeby nie wyswietlal tego bledu,
  //  ale zastanawia mnie czy da sie to obejsc jakos inaczej
};

export default function FormAddFriend({ onAddFriend }: FormAddFriendProps) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  // czy da sie jakos inaczej ten form element przypisac do typu
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // if (!name || !image) return;

    const id: string = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);   
    setName('');
    setImage('https://i.pravatar.cc/48');
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="name">👩🏾‍🤝‍🧑🏿 Friend name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <label htmlFor="image">🎴 Image URL</label>
      <input
        id="image"
        type="text"
        value={image}
        onChange={e => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
