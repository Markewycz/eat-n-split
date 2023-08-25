import React from 'react';

type ButtonProps = {
  children: string;
};

export default function Button({ children }: ButtonProps) {
  return <button className="button">{children}</button>;
}
