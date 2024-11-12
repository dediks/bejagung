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

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        phone: "",
        address: "",
    });

    function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        post(route("residents.store"), {
            preserveScroll: true,
            // onSuccess: () => reset("password"),
        });
    }

    return (
        <Layout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Buat Data Warga Baru
                </h2>
            }
        >
            <Head title="Buat Data Warga Baru" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={submit}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Input Data Warga</CardTitle>
                                    <CardDescription>
                                        Isi form di bawah ini untuk menambahkan
                                        data warga baru.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-6">
                                        <div className="grid gap-3">
                                            <Label htmlFor="name">Nama</Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                className="w-full"
                                                placeholder="cth: Melky Lobo"
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.name && (
                                                <div>{errors.name}</div>
                                            )}
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="phone">
                                                No. Hp
                                            </Label>
                                            <Input
                                                id="phone"
                                                type="text"
                                                className="w-full"
                                                placeholder="cth: 0812345678xx"
                                                onChange={(e) =>
                                                    setData(
                                                        "phone",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.phone && (
                                                <div>{errors.phone}</div>
                                            )}
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="description">
                                                Alamat
                                            </Label>
                                            <Textarea
                                                id="description"
                                                className="min-h-32"
                                                placeholder="cth: Kulone kali"
                                                onChange={(e) =>
                                                    setData(
                                                        "address",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.address && (
                                                <div>{errors.address}</div>
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
