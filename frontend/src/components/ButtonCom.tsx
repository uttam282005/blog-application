export const Button = ({ label, onClick }: { label: string, onClick: () => Promise<void> }) => {
  return (
    <div>
      <button onClick={onClick} className="rounded-lg bg-black text-white w-80 h-9 hover:bg-gray-900"> {label} </button>
    </div>
  );
};
