import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col gap-30 items-center justify-center min-h-screen bg-gray-100">
      <div className="mb-4">
        <h1 className="text-4x1 font-bold mb-2">COUNTER</h1>
        <hr className="border-t-2 border-gray-300 w-full" />
      </div>

      <div className="mb-4">
        <input
          type="text"
          value={count}
          className="text-center border border-gray-300 rounded p-2 w-20"
        />
      </div>

      <div className="flex gap-15">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg:blue-600"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>

        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg:gray-600"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg:red-600"
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;
