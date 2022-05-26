import { FiHome } from "react-icons/fi";
import { BiCubeAlt, BiPlanet } from "react-icons/bi";
import { BsChatLeft, BsFillInboxFill } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { ImDrawer2 } from "react-icons/im";
import { AiOutlineCalendar, AiOutlineFile } from "react-icons/ai";

export default function MenuAside() {
    return (
        <div className="flex">
            <div className="w-64 h-full bg-gray-200">

                <div className="w-64 h-24"></div>

                <div className="w-56 h-11 flex bg-gray-200 mx-auto my-2 rounded-xl flex hover:bg-gray-100">
                    <div className="my-auto mx-7"><FiHome /></div>
                    <p className="my-auto">Dashboard</p>
                </div>

                <div className="w-56 h-11 flex bg-gray-200 mx-auto my-2 rounded-xl flex hover:bg-gray-100">
                    <div className="my-auto mx-7"><BiCubeAlt /></div>
                    <p className="my-auto">Menu Layout</p>
                </div>

                <div className="w-56 h-11 flex bg-gray-200 mx-auto my-2 rounded-xl flex hover:bg-gray-100">
                    <div className="my-auto mx-7"><BsFillInboxFill /></div>
                    <p className=" my-auto"> Inbox</p>
                </div>

                <div className="w-56 h-11 flex bg-gray-200 mx-auto my-2 rounded-xl flex hover:bg-gray-100">
                    <div className="my-auto mx-7"><BiPlanet /></div>
                    <p className="my-auto">File Manager</p>
                </div>

                <div className="w-56 h-11 flex bg-gray-200 mx-auto my-2 rounded-xl flex hover:bg-gray-100">
                    <div className="my-auto mx-7"><RiPagesLine /></div>
                    <p className="my-auto">Point of Sale</p>
                </div>

                <div className="w-56 h-11 flex bg-gray-200 mx-auto my-2 rounded-xl flex hover:bg-gray-100">
                    <div className="my-auto mx-7"><BsChatLeft /></div>
                    <p className="my-auto">Chat</p>
                </div>

                <div className="w-56 h-11 flex bg-gray-200 mx-auto my-2 rounded-xl flex hover:bg-gray-100">
                    <div className="my-auto mx-7"><AiOutlineFile /></div>
                    <p className="my-auto">Post</p>
                </div>

                <div className="w-56 h-11 flex bg-gray-200 mx-auto my-2 rounded-xl flex hover:bg-gray-100">
                    <div className="my-auto mx-7"><AiOutlineCalendar /></div>
                    <p className="my-auto">Calendar</p>
                </div>

            </div>
        </div>
    )
}