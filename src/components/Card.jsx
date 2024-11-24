import { EyeIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";

export default function Card({image, title, description, likes, views}) {
    return (
        <div className="bg-white p-4 w-full">
            <img src={image} alt="Card" className="w-full max-h-70 object-cover rounded-lg" />
            <div className="p-4 flex justify-between">
                <div className="flex flex-col justify-between">
                    <h2 className="font-bold">{title}</h2>
                    <p className="text-gray-500 text-xs">{description}</p>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    <div className="flex items-center gap-x-1">
                        <HandThumbUpIcon className="w-4 h-4" />
                        <p className="text-gray-500 text-xs">{likes}</p>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <EyeIcon className="w-4 h-4" />
                        <p className="text-gray-500 text-xs">{views}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}