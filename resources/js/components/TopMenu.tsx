import { Link } from "@inertiajs/react";
import { ArrowLeftCircle } from "lucide-react";

const TopMenu = ({ title = "" }) => {
    return (
        <div className="bg-gray-50 shadow-lg border-b p-4 w-full fixed flex items-center space-x-4">
            <div>
                <Link href={route("home")}>
                    <ArrowLeftCircle />
                </Link>
            </div>
            <h1 className=" text-xl font-semibold">{title}</h1>
        </div>
    );
};
export default TopMenu;
