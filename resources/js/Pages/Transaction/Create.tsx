import { ComboBox } from "@/components/Combobox";
import DatePicker from "@/components/Datepicker";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
    CardHeader,
    CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Layout, { description } from "@/Layouts/Layout";
import { Resident } from "@/types/resident";
import { Head, useForm } from "@inertiajs/react";
import { Dropdown } from "react-day-picker";

export default function Create({
    residents,
}: {
    residents: [
        {
            value: string;
            label: string;
        }
    ];
}) {
    const { data, setData, post, processing, errors } = useForm({
        resident_id: "",
        amount: 0,
        type: "",
        transaction_date: new Date(),
        description: "",
    });

    function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log(data);

        post(route("transactions.store"), {
            preserveScroll: true,
        });
    }

    return (
        <Layout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Input Data Transaksi
                </h2>
            }
        >
            <Head title="Input Data Transaksi" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={submit}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Input Data Transaksi</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-6">
                                        <div className="grid gap-3">
                                            <Label htmlFor="name">
                                                Jenis Transaksi
                                            </Label>
                                            <Select
                                                onValueChange={(e) => {
                                                    console.log(e);
                                                    setData("type", e);
                                                }}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih jenis transaksi" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value={"1"}>
                                                            Masuk
                                                        </SelectItem>
                                                        <SelectItem value={"0"}>
                                                            Keluar
                                                        </SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                            {errors.type && (
                                                <div>{errors.type}</div>
                                            )}
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="amount">
                                                Nominal
                                            </Label>
                                            <Input
                                                id="amount"
                                                type="number"
                                                className="w-full"
                                                placeholder="Nominal transaksi"
                                                onChange={(e) =>
                                                    setData(
                                                        "amount",
                                                        parseInt(e.target.value)
                                                    )
                                                }
                                            />
                                            {errors.amount && (
                                                <div>{errors.amount}</div>
                                            )}
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="description">
                                                Tgl Transaksi
                                            </Label>
                                            <DatePicker
                                                date={data.transaction_date}
                                                setDate={(e) => {
                                                    setData(
                                                        "transaction_date",
                                                        e
                                                    );
                                                }}
                                            />
                                            {errors.transaction_date && (
                                                <div>
                                                    {errors.transaction_date}
                                                </div>
                                            )}
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="description">
                                                Keterangan
                                            </Label>
                                            <Textarea
                                                id="description"
                                                className="w-full"
                                                placeholder="Keterangan transaksi"
                                                onChange={(e) =>
                                                    setData(
                                                        "description",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.description && (
                                                <div>{errors.description}</div>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex space-x-4 justify-center md:justify-end">
                                    <Button variant={"outline"}>Batal</Button>
                                    <Button type="submit" disabled={processing}>
                                        Simpan
                                    </Button>
                                </CardFooter>
                            </Card>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
