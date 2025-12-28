import { DashboardLayout } from "@/layouts/DashboardLayout";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Building2, Users, Package } from "lucide-react";

const departments = [
  { id: 1, name: "IT", employees: 12, items: 50, status: "Active" },
  { id: 2, name: "Store", employees: 8, items: 1000, status: "Active" },
  { id: 3, name: "Site", employees: 45, items: 200, status: "Active" },
  { id: 4, name: "Admin", employees: 6, items: 60, status: "Active" },
];

const Departments = () => {
  return (
    <DashboardLayout>
      <DashboardHeader title="Departments" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {departments.map((dept) => (
          <div key={dept.id} className="bg-card rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-3 mb-4">
              <div className="stat-icon stat-icon-blue">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-foreground">{dept.name}</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-4 h-4" />
                <span className="text-sm">{dept.employees} Employees</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Package className="w-4 h-4" />
                <span className="text-sm">{dept.items.toLocaleString()} Items</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-success/10 text-success">
                {dept.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Departments;
