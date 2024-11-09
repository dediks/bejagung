import { Resident } from "./resident";

export type Transaction = {
    id: string;
    amount: number;
    transaction_date: string;
    type: number;
    resident: Resident;
    description: string;
};
