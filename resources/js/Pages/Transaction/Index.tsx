import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import Layout from "@/Layouts/Layout";
import { Transaction } from "@/types/transaction";
import { transactionColumns } from "@/components/datatable/transaction/columns";
import { Head, Link, useForm } from "@inertiajs/react";

interface IndexProps {
    transactions: Transaction[];
}

export default function Index({ transactions }: IndexProps) {
    const { delete: destroy } = useForm();

    const handleDelete = (id: string) => {
        destroy(route("transactions.destroy", id));
    };

    const handleEdit = (id: string) => {};

    return (
        <Layout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Data Transaksi
                </h2>
            }
        >
            <Head title="List Data Transaksi" />

            <div className="py-4 ">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-end">
                        <Link className="" href={route("transactions.create")}>
                            <Button size={"sm"}>Tambah Data</Button>
                        </Link>
                    </div>
                    <div className="w-full overflow-auto mt-4 bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg">
                        <DataTable
                            columns={transactionColumns({
                                onEdit: handleEdit,
                                onDelete: handleDelete,
                            })}
                            data={transactions}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
