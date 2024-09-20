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
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/Layouts/Layout";
import { Resident } from "@/types/resident";
import { Head, useForm } from "@inertiajs/react";

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
    const { data, setData, post, processing, errors, setDefaults } = useForm({
        resident_id: "",
        amount: 15000,
        payment_date: new Date(),
    });

    function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log(data);

        post(route("contributions.store"), {
            preserveScroll: true,
            // onSuccess: () => reset("password"),
        });
    }

    return (
        <Layout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Input Iuran
                </h2>
            }
        >
            <Head title="Input Iuran" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={submit}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Input Iuran Warga</CardTitle>
                                    <CardDescription>
                                        Bulan September 2024
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-6">
                                        <div className="grid gap-3">
                                            <Label htmlFor="name">
                                                Nama Warga
                                            </Label>
                                            <ComboBox
                                                placeholder="Pilih nama warga"
                                                data={residents}
                                                setData={(e) =>
                                                    setData("resident_id", e)
                                                }
                                            />
                                            {errors.resident_id && (
                                                <div>{errors.resident_id}</div>
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
                                                placeholder=""
                                                value={data.amount}
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
                                                Tgl Bayar
                                            </Label>
                                            <DatePicker
                                                date={data.payment_date}
                                                setDate={(e) => {
                                                    setData("payment_date", e);
                                                }}
                                            />
                                            {errors.payment_date && (
                                                <div>{errors.payment_date}</div>
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
