import React from "react";

type ButtonDefaultProps = {
  children?: React.ReactNode;
  onClick?: () => void | Promise<void>;
};

export function ButtonDefault({
  children = "Generate",
  onClick,
}: ButtonDefaultProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-2 rounded bg-black text-white disabled:opacity-50"
    >
      {children}
    </button>
  );
}
