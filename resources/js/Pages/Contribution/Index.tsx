import { contributionColumns } from "@/components/datatable/contribution/columns";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { useFlashToast } from "@/hooks/use-flash-toast";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/Layouts/Layout";
import { Contribution } from "@/types/contribution";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";

interface IndexProps {
    contributions: Contribution[];
}

export default function Index({ contributions }: IndexProps) {
    console.log(contributions);
    const { delete: destroy } = useForm();

    const handleDelete = (id: string) => {
        destroy(route("contributions.destroy", id));
    };

    const handleEdit = (id: string) => {};

    return (
        <Layout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Daftar Iuran Warga
                </h2>
            }
        >
            <Head title="List Iuran Warga" />
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-end">
                        <Link className="" href={route("contributions.create")}>
                            <Button size={"sm"}>Tambah Data</Button>
                        </Link>
                    </div>
                    <div className="mt-4 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <DataTable
                            columns={contributionColumns({
                                onEdit: handleEdit,
                                onDelete: handleDelete,
                            })}
                            data={contributions}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
