import { DashboardLayout } from "@/layouts/DashboardLayout";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { FileText, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const reports = [
  { id: 1, name: "Monthly Inventory Report", date: "2024-04-24", type: "PDF" },
  { id: 2, name: "Department Analysis Q1", date: "2024-04-20", type: "Excel" },
  { id: 3, name: "Stock Movement Summary", date: "2024-04-15", type: "PDF" },
  { id: 4, name: "Annual Audit Report", date: "2024-04-01", type: "PDF" },
];

const Reports = () => {
  return (
    <DashboardLayout>
      <DashboardHeader title="Reports" />
      
      <div className="bg-card rounded-lg border border-border shadow-sm">
        <div className="p-5 border-b border-border">
          <h3 className="text-lg font-medium text-foreground">Recent Reports</h3>
        </div>
        
        <div className="divide-y divide-border">
          {reports.map((report) => (
            <div key={report.id} className="p-5 flex items-center justify-between hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="stat-icon stat-icon-blue">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{report.name}</h4>
                  <p className="text-sm text-muted-foreground">{report.date} • {report.type}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Eye className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
