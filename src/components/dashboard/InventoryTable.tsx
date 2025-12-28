import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusBadge } from "./StatusBadge";

interface InventoryItem {
  id: number;
  department: string;
  item: string;
  totalQuantity: number;
  available: number;
  remaining: number;
  status: "critical" | "good" | "low";
}

const inventoryData: InventoryItem[] = [
  {
    id: 1,
    department: "IT",
    item: "Laptop",
    totalQuantity: 50,
    available: 20,
    remaining: 30,
    status: "critical",
  },
  {
    id: 2,
    department: "Store",
    item: "Cement Bags",
    totalQuantity: 1000,
    available: 650,
    remaining: 350,
    status: "good",
  },
  {
    id: 3,
    department: "Site",
    item: "Safety Helmets",
    totalQuantity: 200,
    available: 120,
    remaining: 80,
    status: "low",
  },
  {
    id: 4,
    department: "Admin",
    item: "Office Chairs",
    totalQuantity: 60,
    available: 45,
    remaining: 15,
    status: "critical",
  },
];

export function InventoryTable() {
  return (
    <div className="bg-card rounded-lg border border-border shadow-sm">
      <div className="p-5 border-b border-border">
        <h3 className="text-lg font-medium text-foreground">Department Inventory</h3>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="font-medium text-muted-foreground">Department</TableHead>
              <TableHead className="font-medium text-muted-foreground">Item</TableHead>
              <TableHead className="font-medium text-muted-foreground">Total Quantity</TableHead>
              <TableHead className="font-medium text-muted-foreground">Available</TableHead>
              <TableHead className="font-medium text-muted-foreground">Remaining</TableHead>
              <TableHead className="font-medium text-muted-foreground">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventoryData.map((item) => (
              <TableRow key={item.id} className="hover:bg-muted/50">
                <TableCell className="font-medium text-foreground">{item.department}</TableCell>
                <TableCell className="text-foreground">{item.item}</TableCell>
                <TableCell className="text-foreground">{item.totalQuantity.toLocaleString()}</TableCell>
                <TableCell className="text-foreground">{item.available.toLocaleString()}</TableCell>
                <TableCell className="text-foreground">{item.remaining.toLocaleString()}</TableCell>
                <TableCell>
                  <StatusBadge status={item.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
