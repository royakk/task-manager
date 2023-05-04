import React from 'react';

interface CustomButtonProps {
  label: string;
  onClick: () => void;
}

function CustomButton({ label, onClick }: CustomButtonProps) {
  return (
    <button className="h-10 px-6 font-semibold rounded-md bg-violet-600 text-white " onClick={onClick}>
      {label}
    </button>
  );
}

export default CustomButton;