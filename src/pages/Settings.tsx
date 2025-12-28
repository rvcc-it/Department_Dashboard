import { DashboardLayout } from "@/layouts/DashboardLayout";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { User, Bell, Shield, Palette } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Settings = () => {
  return (
    <DashboardLayout>
      <DashboardHeader title="Settings" />
      
      <div className="space-y-6 max-w-2xl">
        {/* Profile Section */}
        <div className="bg-card rounded-lg border border-border shadow-sm">
          <div className="p-5 border-b border-border flex items-center gap-3">
            <User className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-medium text-foreground">Profile</h3>
          </div>
          <div className="p-5 space-y-4">
            <div>
              <Label className="text-sm text-muted-foreground">Name</Label>
              <p className="text-foreground font-medium">Admin User</p>
            </div>
            <div>
              <Label className="text-sm text-muted-foreground">Email</Label>
              <p className="text-foreground font-medium">admin@company.com</p>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-card rounded-lg border border-border shadow-sm">
          <div className="p-5 border-b border-border flex items-center gap-3">
            <Bell className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-medium text-foreground">Notifications</h3>
          </div>
          <div className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-foreground font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Receive email alerts for low stock</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-foreground font-medium">Critical Alerts</p>
                <p className="text-sm text-muted-foreground">Get notified for critical inventory levels</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-card rounded-lg border border-border shadow-sm">
          <div className="p-5 border-b border-border flex items-center gap-3">
            <Shield className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-medium text-foreground">Security</h3>
          </div>
          <div className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-foreground font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
