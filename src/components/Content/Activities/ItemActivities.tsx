import { LineBall } from "./LineBall";
import { TextActivities } from "./TextActivities";
import { UserActivities } from "./UserActivities";

export default function ItemActivities({activity}) {
    return (
        <div className="flex">
            <LineBall 
            status={activity.type}/>
            <div className="w-full h-full flex-col">
                <TextActivities 
                text={activity.text}
                time={activity.time}/>
                <UserActivities
                user={activity.user}
                 />
            </div>
        </div>
    )
}


