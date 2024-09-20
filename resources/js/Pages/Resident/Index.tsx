import { residentColumns } from "@/components/datatable/resident/columns";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { useFlashToast } from "@/hooks/use-flash-toast";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/Layouts/Layout";
import { Resident } from "@/types/resident";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";

interface IndexProps {
    residents: Resident[]; // Replace 'any' with the appropriate type if known
}

export default function Index({ residents }: IndexProps) {
    const { delete: destroy } = useForm();

    const handleDelete = (id: string) => {
        destroy(route("residents.destroy", id));
    };

    const handleEdit = (id: string) => {};

    return (
        <Layout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Daftar Warga
                </h2>
            }
        >
            <Head title="List Warga" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-end">
                        <Link className="" href={route("residents.create")}>
                            <Button size={"sm"}>Tambah Data</Button>
                        </Link>
                    </div>
                    <div className="mt-4 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <DataTable
                            columns={residentColumns({
                                onEdit: handleEdit,
                                onDelete: handleDelete,
                            })}
                            data={residents}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
