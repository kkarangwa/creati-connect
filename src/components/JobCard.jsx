import { MapPinIcon } from "@heroicons/react/24/outline";
import ms from "ms";

export default function JobCard({ position, description, company, location, date}) {
    const timeAgo = ms((new Date().getTime() - new Date(date).getTime()), {long: true});

    return (
        <div className="bg-white p-4 w-full border-[1px] border-gray-200 rounded-xl">
            <div className="flex flex-col justify-between gap-2">
                <p className="text-gray-600 font-bold text-sm">{company}</p>
                <div className="p4 flex gap-1">
                    <MapPinIcon className="w-4 h-4" />
                    <p className="text-gray-500 text-xs">{location}</p>
                </div>
                <h2 className="font-semibold">{position}</h2>
                <p className="text-gray-500 text-xs">{description}</p>
                <p className="text-gray-500 text-xs mt-2">{timeAgo} ago</p>
            </div>
        </div>
    )
}
