import React from 'react';
export default function CardProperty({
  text,
  value,
  isActive = false,
}: {
  text: string;
  value?: string;
  isActive?: boolean;
}) {
  const activeState = 'font-bold';
  return (
    <div
      className={`flex justify-between  ${isActive && activeState} rounded-lg`}
    >
      <span>{text}:</span>

      <div>{value}</div>
    </div>
  );
}
