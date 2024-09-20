import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
    CardHeader,
    CardFooter,
} from "@/components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@headlessui/react";
import { Head, Link } from "@inertiajs/react";
import {
    BookUser,
    CheckIcon,
    Flower2,
    HandMetal,
    ListTodo,
    NotebookTabs,
} from "lucide-react";

export default function Dashboard() {
    return (
        <div className="px-4 py-8 bg-gray-50">
            <Card className="">
                <CardHeader>
                    <CardTitle>Halo,</CardTitle>
                    <CardDescription>
                        Warga-wargi,
                        <span className="italic">nolsatunolenam</span>
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className=" flex items-center space-x-4 rounded-md border p-4">
                        <HandMetal />
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                                RT0106
                            </p>
                            <p className="text-sm text-muted-foreground">
                                The Miniature of Indonesia
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <Link
                    href={route("contributions-report.index")}
                    className="flex flex-col items-center p-4"
                >
                    <div className="text-white shadow-lg p-5 bg-amber-400 rounded-full">
                        <NotebookTabs className="w-10 h-10" />
                    </div>
                    <div className="mt-4 font-medium text-sm">
                        Absensi Iuran
                    </div>
                </Link>
                <Link
                    href={route("cashflow.index")}
                    className="flex flex-col items-center p-4"
                >
                    <div className="text-white shadow-lg p-5 bg-blue-400 rounded-full">
                        <Flower2 className="w-10 h-10" />
                    </div>
                    <div className="mt-4 font-medium text-sm">Cashflow</div>
                </Link>
                <div className="flex flex-col items-center p-4">
                    <div className="text-white shadow-lg p-5 bg-green-400 rounded-full">
                        <ListTodo className="w-10 h-10" />
                    </div>
                    <div className="mt-4 font-medium text-sm">Program</div>
                </div>
                <Link
                    href={route("dashboard")}
                    className="flex flex-col items-center p-4"
                >
                    <div className="text-white shadow-lg p-5 bg-red-400 rounded-full">
                        <BookUser className="w-10 h-10" />
                    </div>
                    <div className="mt-4 font-medium text-sm">Admin</div>
                </Link>
            </div>
        </div>
    );
}
