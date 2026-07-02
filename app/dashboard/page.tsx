import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-2">
        Dashboard
      </h1>

      <p className="text-gray-600 mb-8">
        Welcome back to FlowDesk AI 👋
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        <StatCard title="Revenue" value="£0" />
        <StatCard title="Customers" value="0" />
        <StatCard title="Quotes" value="0" />
        <StatCard title="Jobs" value="0" />
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border">
        <h2 className="text-xl font-semibold mb-4">
          Recent Activity
        </h2>

        <p className="text-gray-500">
          No recent activity.
        </p>
      </div>
    </DashboardLayout>
  );
}