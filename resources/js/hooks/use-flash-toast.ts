import { useEffect } from "react";
import { usePage } from "@inertiajs/react";
import { useToast } from "@/hooks/use-toast";

export function useFlashToast() {
    const { toast } = useToast();
    const { flash } = usePage<{
        flash: { message?: string };
        auth: any;
        ziggy: any;
    }>().props;

    useEffect(() => {
        if (flash.message) {
            toast({
                description: flash.message,
            });
        }
    }, [flash, toast]);
}
