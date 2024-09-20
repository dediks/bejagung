import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const MonthYearPicker = ({
    className,
    classNames,
    showOutsideDays = true,
    ...props
}: CalendarProps) => {
    const [selected, setSelected] = useState<Date | undefined>(undefined);

    return (
        <div className="month-year-picker">
            <DayPicker
                classNames={{
                    months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                    month: "space-y-4",
                    caption: "flex justify-center pt-1 relative items-center",
                    caption_label: "text-sm font-medium",
                    nav: "space-x-1 flex items-center",
                    nav_button: cn(
                        buttonVariants({ variant: "outline" }),
                        "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
                    ),
                    nav_button_previous: "absolute left-1",
                    nav_button_next: "absolute right-1",
                    table: "w-full border-collapse space-y-1",
                    head_row: "flex",
                    head_cell:
                        "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
                    row: "flex w-full mt-2",
                    cell: cn(
                        "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
                        props.mode === "range"
                            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
                            : "[&:has([aria-selected])]:rounded-md"
                    ),
                    day: cn(
                        buttonVariants({ variant: "ghost" }),
                        "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                    ),
                    day_range_start: "day-range-start",
                    day_range_end: "day-range-end",
                    day_selected:
                        "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                    day_today: "bg-accent text-accent-foreground",
                    day_outside:
                        "day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
                    day_disabled: "text-muted-foreground opacity-50",
                    day_range_middle:
                        "aria-selected:bg-accent aria-selected:text-accent-foreground",
                    day_hidden: "invisible",
                    ...classNames,
                }}
                mode="single"
                selected={selected}
                onSelect={setSelected}
                captionLayout="dropdown" // Show dropdowns for month and year
                fromYear={2000} // Set a minimum year for the dropdown
                toYear={2030} // Set a maximum year for the dropdown
                showOutsideDays={false}
                fixedWeeks={false} // No need for fixed weeks, as you're only showing months/years
            />
            {selected && (
                <p className="mt-2">
                    You selected: {format(selected, "MM/yyyy")}
                </p>
            )}
        </div>
    );
};

export default MonthYearPicker;