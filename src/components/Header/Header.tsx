import { InputSearch } from "./InputSearch";
import { Logo } from "./Logo";
import { NotificationsButton } from "./NotificationsButton";
import { UserButton } from "./UserButton";

export default function Menu() {
  return (

    <div className="flex">
      <div className="w-11/12 h-16 bg-cyan-900 rounded-xl mt-2 flex absolute mx-14 shadow-md shadow-cyan-800 sha">
        <Logo />
        <div className="w-full flex justify-end">
          <InputSearch />
          <div className="flex pr-3">
            <NotificationsButton />
            <UserButton />
          </div>
        </div>
      </div>
    </div>
  )
}

