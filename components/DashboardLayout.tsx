import Sidebar from "./Sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 min-h-screen bg-gray-100 p-8">
        {children}
      </main>
    </div>
  );
}