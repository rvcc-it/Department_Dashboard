import { DashboardLayout } from "@/layouts/DashboardLayout";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { InventoryTable } from "@/components/dashboard/InventoryTable";
import { Grid2x2, Package, CheckCircle, Clock } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <DashboardHeader title="Department Inventory" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        <StatCard
          title="Items"
          value="4"
          icon={Grid2x2}
          iconColor="blue"
        />
        <StatCard
          title="Total Quantity"
          value="1,310"
          icon={Package}
          iconColor="orange"
        />
        <StatCard
          title="Available"
          value="835"
          icon={CheckCircle}
          iconColor="green"
        />
        <StatCard
          title="Remaining"
          value="475"
          icon={Clock}
          iconColor="yellow"
        />
      </div>

      <InventoryTable />
    </DashboardLayout>
  );
};

export default Index;
