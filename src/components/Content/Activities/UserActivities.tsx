export function UserActivities({user}) {
    return <div className="flex items-center w-full justify-start">
        <img src="assets/user.jpg" alt="user" className="h-4 rounded-full mt-2" />
        <p className="text-gray-600 mt-1 text-xs">{user}</p>
    </div>;
}
