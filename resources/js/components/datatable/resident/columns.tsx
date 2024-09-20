import { Resident } from "@/types/resident";
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

interface ColumnProps {
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

export const residentColumns = ({
    onEdit,
    onDelete,
}: ColumnProps): ColumnDef<Resident>[] => [
    {
        accessorKey: "name",
        header: "Nama",
    },
    {
        accessorKey: "phone",
        header: "No. HP",
    },
    {
        accessorKey: "address",
        header: "Alamat",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const resident = row.original;
            const [isDialogOpen, setDialogOpen] = useState(false);

            const handleConfirmDelete = () => {
                onDelete(resident.id);
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
                                onClick={() => onEdit(resident.id)}
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
                        title="Delete Resident?"
                        description="This action cannot be undone. This will permanently delete the resident."
                    />
                </>
            );
        },
    },
];
