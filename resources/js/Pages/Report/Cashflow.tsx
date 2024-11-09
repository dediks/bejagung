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

interface Transaction {
    id: number;
    description: string;
    transaction_date: string;
    transaction_type: number;
    amount: number;
}

interface CashflowProps {
    total_balance?: number;
    income?: number;
    expense?: number;
    latest_transactions?: Transaction[];
}

export default function Cashflow({
    total_balance = 0,
    income = 0,
    expense = 0,
    latest_transactions = [],
}: CashflowProps) {
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
                        Rp. {total_balance}
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
                        <CardTitle className="text-xl">Rp. {income}</CardTitle>
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
                        <CardTitle className="text-xl">Rp. {expense}</CardTitle>
                    </CardHeader>
                </Card>
            </div>
            <Card className="mt-4">
                <CardHeader>
                    <CardTitle className="flex justify-between">
                        <span>Transaksi terakhir</span>
                        <Link href={route("cashflow.show")}>
                            <span className="underline text-gray-500 text-sm">
                                Lihat semua..
                            </span>
                        </Link>
                    </CardTitle>
                </CardHeader>
                <CardContent className="">
                    <Table className="">
                        <TableBody>
                            {latest_transactions.map((transaction) => (
                                <TableRow key={transaction.id}>
                                    <TableCell className="flex flex-col">
                                        <span className="font-semibold">
                                            {transaction.description}
                                        </span>
                                        <span className="text-xs font-thin">
                                            {transaction.transaction_date}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {transaction.transaction_type === 1 ? (
                                            <span className="text-green-600">
                                                + Rp. {transaction.amount}
                                            </span>
                                        ) : (
                                            <span className="text-red-500">
                                                - Rp. {transaction.amount}
                                            </span>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Separator />
            <div className="mt-4"></div>
        </div>
    );
}
