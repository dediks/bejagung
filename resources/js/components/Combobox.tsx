"use client";

import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Drawer,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

type Item = {
    value: string;
    label: string;
};

export function ComboBox({
    placeholder = "Select",
    data = [],
    setData,
}: {
    placeholder: string;
    data: Item[];
    setData: (data: any) => void;
}) {
    const [open, setOpen] = React.useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const [selectedItem, setSelectedItem] = React.useState<Item | null>(null);

    React.useEffect(() => {
        setData(selectedItem ? selectedItem.value : null);
    }, [selectedItem]);

    if (isDesktop) {
        return (
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className="w-[150px] justify-start"
                    >
                        {selectedItem ? (
                            <>{selectedItem.label}</>
                        ) : (
                            <>{placeholder}</>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0" align="start">
                    <ComboboxItemList
                        setOpen={setOpen}
                        setSelectedItem={setSelectedItem}
                        data={data}
                    />
                </PopoverContent>
            </Popover>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline" className="w-[150px] justify-start">
                    {selectedItem ? (
                        <>{selectedItem.label}</>
                    ) : (
                        <>{placeholder}</>
                    )}
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerTitle></DrawerTitle>
                <div className="mt-4 border-t">
                    <ComboboxItemList
                        setOpen={setOpen}
                        setSelectedItem={setSelectedItem}
                        data={data}
                    />
                </div>
            </DrawerContent>
        </Drawer>
    );
}

function ComboboxItemList({
    setOpen,
    setSelectedItem,
    data,
}: {
    setOpen: (open: boolean) => void;
    setSelectedItem: (item: Item | null) => void;
    data: Item[];
}) {
    return (
        <Command>
            <CommandInput placeholder="Cari..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                    {data.map((item) => (
                        <CommandItem
                            key={item.value}
                            value={item.value}
                            onSelect={(value) => {
                                setSelectedItem(
                                    data.find(
                                        (priority) =>
                                            priority.value === item.value
                                    ) || null
                                );
                                setOpen(false);
                            }}
                        >
                            {item.label}
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </Command>
    );
}
