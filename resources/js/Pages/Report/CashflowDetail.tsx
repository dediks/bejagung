import { Transaction } from "@/types/transaction";
import { transactionColumns } from "@/components/datatable/transaction/columns";
import { DataTable } from "@/components/ui/data-table";
import TopMenu from "@/components/TopMenu";

interface IndexProps {
    transactions: Transaction[];
}

const CashflowDetail = ({ transactions }: IndexProps) => {
    return (
        <div>
            <TopMenu title="Detail Cashflow" />
            <div className="px-4 py-24">
                <div>
                    
                </div>
                <DataTable data={transactions} columns={transactionColumns()} />
            </div>
        </div>
    );
};

export default CashflowDetail;
