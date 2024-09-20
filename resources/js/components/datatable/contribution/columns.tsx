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
import { useState } from "react";
import { Contribution } from "@/types/contribution";

interface ColumnProps {
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

export const contributionColumns = ({
    onEdit,
    onDelete,
}: ColumnProps): ColumnDef<Contribution>[] => [
    {
        accessorKey: "name",
        header: "Nama",
        cell: ({ row }) => {
            const contribution = row.original;
            return (
                <div className="flex items-center space-x-2">
                    <div>{contribution.resident.name}</div>
                </div>
            );
        },
    },
    {
        accessorKey: "amount",
        header: "Nominal",
        cell: ({ row }) => {
            const contribution = row.original;

            const formatted = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
            }).format(contribution.amount);

            return <div className="text-right font-medium">{formatted}</div>;
        },
    },
    {
        accessorKey: "payment_date",
        header: "Tgl Bayar",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const contribution = row.original;
            const [isDialogOpen, setDialogOpen] = useState(false);

            const handleConfirmDelete = () => {
                onDelete(contribution.id);
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
                                onClick={() => onEdit(contribution.id)}
                            >
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={() => setDialogOpen(true)}
                            >
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <ConfirmDialog
                        isOpen={isDialogOpen}
                        onClose={() => setDialogOpen(false)}
                        onConfirm={handleConfirmDelete}
                        title="Hapus data iuran ini?"
                        description="This action cannot be undone. This will permanently delete the contribution."
                    />
                </>
            );
        },
    },
];
