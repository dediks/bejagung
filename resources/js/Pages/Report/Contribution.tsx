import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { getMonth, getYear } from "date-fns";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Progress } from "@/components/ui/progress";
import { DataTable } from "@/components/ui/data-table";
import {
    ArrowBigLeft,
    ArrowLeft,
    ArrowLeftCircle,
    ArrowUpDown,
    Check,
    Minus,
} from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ScrollBar, ScrollArea } from "@/components/ui/scroll-area";
import TopMenu from "@/components/TopMenu";

export type ContributionReport = {
    id: string;
    name: string;
    contributions: {
        id: string;
        amount: number;
        payment_date: string;
    }[];
};

export const columns: ColumnDef<ContributionReport>[] = [
    {
        id: "number",
        header: "No.",
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Nama
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-right">Nominal</div>,
        cell: ({ row }) => {
            if (
                row.original.contributions &&
                row.original.contributions.length < 1
            ) {
                return <div className="text-right"></div>;
            }

            const amount = row.original.contributions
                ? row.original.contributions[0].amount
                : 0;

            const formatted = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
            }).format(amount);

            return <div className="text-right font-medium">{formatted}</div>;
        },
    },
    {
        accessorKey: "status",
        header: () => <div className="">Status</div>,
        cell: ({ row }) => {
            if (
                row.original.contributions &&
                row.original.contributions.length < 1
            ) {
                return (
                    <div className="flex justify-center">
                        <Minus className="text-center text-destructive" />
                    </div>
                );
            }

            return (
                <div className="flex justify-center">
                    <Check className="text-center text-green-500" />
                </div>
            );
        },
    },
    {
        accessorKey: "payment_date",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Tgl Bayar
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            if (
                row.original.contributions &&
                row.original.contributions.length < 1
            ) {
                return <div className=""></div>;
            }

            const date = row.original.contributions
                ? row.original.contributions[0].payment_date
                : "";

            return <div className="text-right">{date}</div>;
        },
    },
];

const filterByYear = (
    selectedYear: number,
    setSelectedYear: (year: number) => void
) => {
    const years = [2024, 2025, 2026, 2027, 2028];

    const handleFilterByYear = (year: number) => {
        setSelectedYear(year);
    };

    const yearsEl = years.map((year) => (
        <Button
            disabled={year > getYear(new Date())}
            key={year}
            variant={selectedYear === year ? "default" : "outline"}
            size={"sm"}
            onClick={() => handleFilterByYear(year)}
            ref={
                selectedYear === year
                    ? (el) =>
                          el?.scrollIntoView({
                              behavior: "smooth",
                              inline: "center",
                              block: "nearest",
                          })
                    : null
            }
        >
            {year}
        </Button>
    ));

    return (
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">{yearsEl}</div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
};

const filterByMonth = (
    selectedMonth: number,
    setSelectedMonth: (month: number) => void
) => {
    const months = [
        { id: 1, label: "Januari" },
        { id: 2, label: "Februari" },
        { id: 3, label: "Maret" },
        { id: 4, label: "April" },
        { id: 5, label: "Mei" },
        { id: 6, label: "Juni" },
        { id: 7, label: "Juli" },
        { id: 8, label: "Agustus" },
        { id: 9, label: "September" },
        { id: 10, label: "Oktober" },
        { id: 11, label: "November" },
        { id: 12, label: "Desember" },
    ];

    const handleFilterByMonth = (month: { id: number; label: string }) => {
        setSelectedMonth(month.id);

        // router.reload({ only: ["contributions"] });

        router.visit(
            route("contributions-report.index", [{ selected_month: month.id }]),
            {
                only: [
                    "contributions",
                    "current_year",
                    "current_month",
                    "total_contributions",
                    "total_data",
                    "total_resident_paid",
                ],
            }
        );
    };

    const monthsEl = months.map((month) => (
        <Button
            key={month.id}
            variant={selectedMonth === month.id ? "default" : "outline"}
            size={"sm"}
            onClick={() => handleFilterByMonth(month)}
            ref={
                selectedMonth === month.id
                    ? (el) =>
                          el?.scrollIntoView({
                              behavior: "smooth",
                              inline: "center",
                              block: "nearest",
                          })
                    : null
            }
        >
            {month.label}
        </Button>
    ));

    return (
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">{monthsEl}</div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
};

type ContributionProps = {
    contributions: ContributionReport[];
    current_year: string;
    current_month: string;
    total_contributions: number;
    total_data: number;
    total_resident_paid: number;
};

const Contribution = ({
    contributions,
    current_year,
    current_month,
    total_contributions,
    total_data,
    total_resident_paid,
}: ContributionProps) => {
    console.log("current month", current_month);
    console.log("getmonth", getMonth(new Date()));

    const [data, setData] = useState<ContributionReport[]>(contributions);
    const [selectedYear, setSelectedYear] = useState<number>(
        current_year ? parseInt(current_year) : getYear(new Date())
    );
    const [selectedMonth, setSelectedMonth] = useState<number>(
        current_month ? parseInt(current_month) : getMonth(new Date())
    );

    const months = [
        "",
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    return (
        <>
            <TopMenu title="Rekapitulasi Iuran Bulanan RT01" />
            <Separator />
            <div className="px-4 py-24">
                <div className="flex space-x-4 justify-between">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardDescription>Total Data</CardDescription>
                            <CardTitle className="text-4xl">
                                {total_data}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">
                                Rumah
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardDescription>Progress Iuran</CardDescription>
                            <CardTitle className="text-4xl">
                                {(
                                    (total_resident_paid / total_data) *
                                    100
                                ).toFixed(2)}
                                %
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">
                                {total_resident_paid} dari {total_data} rumah
                                telah membayar iuran
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Progress value={80} aria-label="12% increase" />
                        </CardFooter>
                    </Card>
                </div>
                <Card className="mt-4">
                    <CardHeader>
                        <CardTitle>Filter</CardTitle>
                    </CardHeader>
                    <CardContent className="">
                        <div className="">
                            {filterByYear(selectedYear, setSelectedYear)}
                        </div>
                        <div className="">
                            {filterByMonth(selectedMonth, setSelectedMonth)}
                        </div>
                    </CardContent>
                </Card>
                <Separator />
                <div className="mt-4">
                    <h2 className="py-4 font-semibold">
                        Data Iuran untuk bulan :{" "}
                        <span className="italic">
                            {months[selectedMonth]} {selectedYear}
                        </span>
                    </h2>
                    <DataTable columns={columns} data={data} />
                </div>
            </div>
        </>
    );
};

export default Contribution;
