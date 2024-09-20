import { Resident } from "./resident";

export type Transaction = {
    id: string;
    amount: number;
    transaction_date: string;
    resident: Resident;
    description: string;
};
