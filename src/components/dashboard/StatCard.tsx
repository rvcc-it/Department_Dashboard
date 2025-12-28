import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: "blue" | "orange" | "green" | "yellow";
}

export function StatCard({ title, value, icon: Icon, iconColor }: StatCardProps) {
  const iconColorClasses = {
    blue: "stat-icon-blue",
    orange: "stat-icon-orange",
    green: "stat-icon-green",
    yellow: "stat-icon-yellow",
  };

  return (
    <div className="stat-card">
      <div className="flex items-center gap-3 mb-3">
        <div className={`stat-icon ${iconColorClasses[iconColor]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-sm text-muted-foreground font-medium">{title}</span>
      </div>
      <p className="text-3xl font-medium text-foreground">{value}</p>
    </div>
  );
}
