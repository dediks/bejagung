import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import {
    PanelLeft,
    Package2,
    Home,
    Users,
    Flower2,
    HandCoins,
} from "lucide-react";
import { Link } from "@inertiajs/react";

const MobileMenu: React.FC = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                    <PanelLeft className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
                <SheetTitle></SheetTitle>
                <nav className="grid gap-6 text-lg font-medium">
                    <Link
                        href="#"
                        className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                    >
                        <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Link
                        href={route("dashboard")}
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                        <Home className="h-5 w-5" />
                        Dashboard
                    </Link>
                    <Link
                        href={route("residents.index")}
                        className="flex items-center gap-4 px-2.5 text-foreground"
                    >
                        <Users className="h-5 w-5" />
                        Data Warga
                    </Link>
                    <Link
                        href={route("transactions.index")}
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                        <Flower2 className="h-5 w-5" />
                        Data Cashflow
                    </Link>
                    <Link
                        href={route("contributions.index")}
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                        <HandCoins className="h-5 w-5" />
                        Data Iuran
                    </Link>
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileMenu;
