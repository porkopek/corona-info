import React from 'react';
export default function CardProperty({
  text,
  value,
  isActive,
}: {
  text: string;
  value: string;
  isActive: boolean;
}) {
  return (
    <div
      className={`flex justify-between py-2 px-2 bg-${
        isActive && 'green'
      }-100 rounded-lg`}
    >
      <span>{text}:</span>

      <div>{value}</div>
    </div>
  );
}
