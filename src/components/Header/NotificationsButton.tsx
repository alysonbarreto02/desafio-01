import { BsFillBellFill } from "react-icons/bs";

export function NotificationsButton() {
  return <button className="my-auto mx-auto ml-1 mr-1 bg-transparent rounded-xl w-9 h-9 flex">
    <div className="my-auto mx-auto text-gray-100 text-xl">
      <BsFillBellFill />
    </div>
  </button>;
}
