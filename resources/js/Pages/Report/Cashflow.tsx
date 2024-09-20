import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Link } from "@inertiajs/react";
import {
    ArrowDownLeftFromCircle,
    ArrowDownLeftFromCircleIcon,
    ArrowDownLeftIcon,
    ArrowLeftCircle,
    ArrowUpRightIcon,
} from "lucide-react";

export default function Cashflow() {
    return (
        <div className="px-4">
            <div className="my-4 flex items-center space-x-4">
                <div>
                    <Link href={route("home")}>
                        <ArrowLeftCircle />
                    </Link>
                </div>
                <h1 className=" text-xl font-semibold">Arus Uang Kas</h1>
            </div>
            <Separator />
            <Card className="mt-4">
                <CardHeader className="text-center">
                    <CardDescription>Saldo</CardDescription>
                    <CardTitle className="text-2xl font-bold">
                        Rp. 50.000.000
                    </CardTitle>
                </CardHeader>
            </Card>
            <div className="mt-4 flex space-x-2 justify-between">
                <Card className="bg-green-600 text-gray-100 w-6/12">
                    <CardHeader className="pb-4">
                        <div className="mb-2 text-xs text-muted-foreground ">
                            <ArrowDownLeftIcon className="w-6 p-1 bg-gray-200 rounded-full" />
                        </div>
                        <CardDescription className="text-xs text-gray-100">
                            Uang Masuk
                        </CardDescription>
                        <CardTitle className="text-xl">
                            Rp. 12.000.000
                        </CardTitle>
                    </CardHeader>
                </Card>
                <Card className="bg-yellow-500 text-gray-100 w-6/12">
                    <CardHeader className="pb-2">
                        <div className="mb-2 text-xs text-muted-foreground ">
                            <ArrowUpRightIcon className="w-6 p-1 bg-gray-200 rounded-full" />
                        </div>
                        <CardDescription className="text-xs text-gray-100">
                            Uang Keluar
                        </CardDescription>
                        <CardTitle className="text-xl">
                            Rp. 12.000.000
                        </CardTitle>
                    </CardHeader>
                </Card>
            </div>
            <Card className="mt-4">
                <CardHeader>
                    <CardTitle className="flex justify-between">
                        <span>Transaksi terakhir</span>
                        <span className="text-gray-500 text-sm">
                            Lihat semua..
                        </span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="">
                    <Table className="">
                        <TableBody>
                            <TableRow>
                                <TableCell className="flex flex-col">
                                    <span className="font-semibold">
                                        Belanja Hadiah
                                    </span>
                                    <span className="text-xs font-thin">
                                        10 Sept 24
                                    </span>
                                </TableCell>
                                <TableCell className="text-right text-red-500">
                                    - Rp. 2.000.000
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="flex flex-col">
                                    <span className="font-semibold">
                                        Tarikan Agustusan
                                    </span>
                                    <span className="text-xs font-thin">
                                        10 Sept 24
                                    </span>
                                </TableCell>
                                <TableCell className="text-right text-green-600">
                                    + Rp. 3.000.000
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="flex flex-col">
                                    <span className="font-semibold">
                                        Iuran bulanan
                                    </span>
                                    <span className="text-xs font-thin">
                                        10 Sept 24
                                    </span>
                                </TableCell>
                                <TableCell className="text-right text-green-600">
                                    + Rp. 600.000
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Separator />
            <div className="mt-4"></div>
        </div>
    );
}
