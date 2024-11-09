import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ConfirmDialog from "@/components/ConfirmDialog";
import { useMemo, useState } from "react";
import { Transaction } from "@/types/transaction";

interface ColumnProps {
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

export const transactionColumns = ({
    onEdit,
    onDelete,
}: Partial<ColumnProps> = {}): ColumnDef<Transaction>[] => {
    const columns: ColumnDef<Transaction>[] = useMemo<ColumnDef<Transaction>[]>(
        () => [
            {
                accessorKey: "description",
                header: "Keterangan",
            },
            {
                accessorKey: "type",
                header: "Jenis",
                cell: ({ row }) => {
                    const transaction = row.original;

                    return (
                        <div className="text-center">
                            {transaction.type === 1 ? (
                                <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                                    Masuk
                                </span>
                            ) : (
                                <span className="px-2 py-1 text-xs font-semibold text-red-800 bg-red-100 rounded-full">
                                    Keluar
                                </span>
                            )}
                        </div>
                    );
                },
            },
            {
                accessorKey: "amount",
                header: "Nominal",
                cell: ({ row }) => {
                    const transaction = row.original;

                    const formatted = new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                    }).format(transaction.amount);

                    return (
                        <div className="text-right font-medium">
                            {formatted}
                        </div>
                    );
                },
            },
            {
                accessorKey: "transaction_date",
                header: "Tgl",
                cell: ({ row }) => {
                    return (
                        <span className="text-xs">
                            {row.original.transaction_date}
                        </span>
                    );
                },
            },
        ],
        []
    );

    if (onEdit && onDelete) {
        columns.push({
            id: "actions",
            cell: ({ row }) => {
                const transaction = row.original;
                const [isDialogOpen, setDialogOpen] = useState(false);

                const handleConfirmDelete = () => {
                    onDelete(transaction.id);
                    setDialogOpen(false);
                };

                return (
                    <>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <span className="sr-only">Open menu</span>
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem
                                    onClick={() => onEdit(transaction.id)}
                                >
                                    Edit
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                {/* <DropdownMenuItem
                                    onClick={() => setDialogOpen(true)}
                                >
                                    Delete
                                </DropdownMenuItem> */}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <ConfirmDialog
                            isOpen={isDialogOpen}
                            onClose={() => setDialogOpen(false)}
                            onConfirm={handleConfirmDelete}
                            title="Hapus data iuran ini?"
                            description="This action cannot be undone. This will permanently delete the transaction."
                        />
                    </>
                );
            },
        });
    }

    return columns;
};
