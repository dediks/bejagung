import React from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";

interface ColumnVisibilityDropdownProps {
    table: any;
}

const ColumnVisibilityDropdown: React.FC<ColumnVisibilityDropdownProps> = ({
    table,
}) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                    Columns
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {table
                    .getAllColumns()
                    .filter((column: any) => column.getCanHide())
                    .map((column: any) => {
                        return (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                className="capitalize"
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) =>
                                    column.toggleVisibility(!!value)
                                }
                            >
                                {column.id}
                            </DropdownMenuCheckboxItem>
                        );
                    })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ColumnVisibilityDropdown;
