import { FiHome } from "react-icons/fi";
import { BiCubeAlt, BiPlanet } from "react-icons/bi";
import { BsChatLeft, BsFillInboxFill } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { AiOutlineCalendar, AiOutlineFile } from "react-icons/ai";

export default function MenuAside() {
    return (
        <div className="flex">
            <div className="w-64 h-full bg-gray-200">

                <div className="w-64 h-24"></div>

                <div className="w-56 h-11 flex bg-gray-200 mx-auto my-2 rounded-xl flex hover:bg-gray-100">
                    <div className="my-auto mx-7 text-slate-600"><FiHome /></div>
                    <p className="my-auto text-slate-600 text-lg">Dashboard</p>
                </div>

                <div className="w-56 h-11 flex bg-gray-200 mx-auto my-2 rounded-xl flex hover:bg-gray-100">
                    <div className="my-auto mx-7 text-slate-600"><BiCubeAlt /></div>
                    <p className="my-auto text-slate-600 text-lg">Menu Layout</p>
                </div>

                <div className="w-56 h-11 flex bg-gray-200 mx-auto my-2 rounded-xl flex hover:bg-gray-100">
                    <div className="my-auto mx-7 text-slate-600"><BsFillInboxFill /></div>
                    <p className=" my-auto text-slate-600"> Inbox</p>
                </div>

                <div className="w-56 h-11 flex bg-gray-200 mx-auto my-2 rounded-xl flex hover:bg-gray-100">
                    <div className="my-auto mx-7 text-slate-600"><BiPlanet /></div>
                    <p className="my-auto text-slate-600 text-lg">File Manager</p>
                </div>

                <div className="w-56 h-11 flex bg-gray-200 mx-auto my-2 rounded-xl flex hover:bg-gray-100">
                    <div className="my-auto mx-7 text-slate-600"><RiPagesLine /></div>
                    <p className="my-auto text-slate-600 text-lg">Point of Sale</p>
                </div>

                <div className="w-56 h-11 flex bg-gray-200 mx-auto my-2 rounded-xl flex hover:bg-gray-100">
                    <div className="my-auto mx-7 text-slate-600"><BsChatLeft /></div>
                    <p className="my-auto text-slate-600 text-lg">Chat</p>
                </div>

                <div className="w-56 h-11 flex bg-gray-200 mx-auto my-2 rounded-xl flex hover:bg-gray-100">
                    <div className="my-auto mx-7 text-slate-600"><AiOutlineFile /></div>
                    <p className="my-auto text-slate-600 text-lg">Post</p>
                </div>

                <div className="w-56 h-11 flex bg-gray-200 mx-auto my-2 rounded-xl flex hover:bg-gray-100">
                    <div className="my-auto mx-7 text-slate-600 view"><AiOutlineCalendar /></div>
                    <p className="my-auto text-slate-600 text-lg">Calendar</p>
                </div>

            </div>
        </div>
    )
}