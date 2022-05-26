import { BsFillBellFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

export default function Menu() {
  return (
    <div className="flex">
      <div className="w-11/12 h-16 bg-cyan-900 rounded-xl mt-2 flex absolute mx-14">
        <div className="w-2/12 h-12 border-r flex my-auto text-white ml-3">
          <img className="my-auto" src="assets/enigma.png" alt="logo" />
          <h1 className="my-auto ml-1  font-bold">comigo</h1>
        </div>

        <div className="w-7/12 h-16 flex">
          <p className="my-auto ml-4 text-white"><a href="">Application</a> Dashboard</p>
        </div>

        <div className="w-3/12 h-16 flex">
          <div className="my-auto w-56 h-10 rounded-full bg-gray-100 flex">
            <input type="text" placeholder="Search..." className="my-auto mx-auto w-40 bg-gray-100" />
            <button className="mr-2"><FiSearch /></button>
          </div>

          <div className="flex">
            <button className="my-auto mx-auto ml-1 mr-1 bg-transparent rounded-xl w-9 h-9 flex">
              <div className="my-auto mx-auto text-gray-100 text-xl">
                <BsFillBellFill />
              </div>
            </button>
            <button><img className="w-9 h-9 rounded-full my-auto mx-auto" src="assets/foto.png" alt="" /></button>
          </div>

        </div>

      </div>
    </div>
  )
}