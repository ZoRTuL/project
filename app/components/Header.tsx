export default function Header() {
  return (
    <>
      <header className="bg-blue-500 text-white py-3 px-5 fixed top-0 z-100 w-full">
        <div className="flex justify-between items-center">
          <a>Logo</a>
           <button className="px-1 py-2 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-xl text-sm shadow-lg transition">
            Зателефонувати
          </button>
        </div>
      </header>
    </>
  );
}
