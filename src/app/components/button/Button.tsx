interface Props {
  message: string;
}

export default function Button({ message }: Props) {
  return (
    <div className="pt-24 w-full">
      <button
        className="
            flex mx-auto text-white 
            bg-slate-700 border-0 
            py-2 px-6 focus:outline-none 
            hover:bg-slate-900 rounded text-lg"
      >
        {message}
      </button>
    </div>
  );
}
