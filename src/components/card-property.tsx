import React from 'react';
export default function CardProperty({
  text,
  value,
  isActive = false,
  isNew = false,
}: {
  text: string;
  value?: string;
  isActive?: boolean;
  isNew?: boolean;
}) {
  const activeState = 'font-bold';
  return (
    <div
      className={`flex justify-between items-center relative pl-2 ${
        isActive && activeState
      } rounded-lg`}
    >
      {/* red dot pulsing if new data  */}
      {isNew ? (
        <div
          className="blob green absolute "
          style={{ left: -35 }}
          title="there's new data since the last time you visited the site"
        ></div>
      ) : (
        <div className="absolute left-0" style={{ width: 10 }}></div>
      )}
      <span>{text}:</span>

      <div>{value}</div>
    </div>
  );
}
