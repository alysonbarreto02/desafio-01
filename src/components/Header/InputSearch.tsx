import { FiSearch } from "react-icons/fi";

export function InputSearch() {
  return <div className="my-auto w-56 h-10 rounded-full bg-gray-100 flex">
    <input type="text" placeholder="Search..." className="my-auto mx-auto w-40 bg-gray-100" />
    <button className="mr-2"><FiSearch /></button>
  </div>;
}
