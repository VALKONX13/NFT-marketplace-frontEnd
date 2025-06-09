import React from 'react';

type RedarkInputProps = {
  placeholder?: string;
};

function RedarkInput({ placeholder }: RedarkInputProps) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-full bg-white/25 h-[72px] px-12 py-3 text-white placeholder-white outline-none mb-0 placeholder:font-extralight placeholder:text-sm"
      />
    </div>
  );
}

export default RedarkInput;
