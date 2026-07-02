import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">

      <h1 className="text-3xl font-extrabold mb-10">
        FlowDesk AI
      </h1>

      <nav className="space-y-2">

        <Link href="/dashboard" className="block rounded-lg p-3 hover:bg-slate-700 transition">
          📊 Dashboard
        </Link>

        <Link href="/customers" className="block rounded-lg p-3 hover:bg-slate-700 transition">
          👥 Customers
        </Link>

        <Link href="/quotes" className="block rounded-lg p-3 hover:bg-slate-700 transition">
          📄 Quotes
        </Link>

        <Link href="/jobs" className="block rounded-lg p-3 hover:bg-slate-700 transition">
          🛠 Jobs
        </Link>

        <Link href="/invoices" className="block rounded-lg p-3 hover:bg-slate-700 transition">
          🧾 Invoices
        </Link>

        <Link href="/settings" className="block rounded-lg p-3 hover:bg-slate-700 transition">
          ⚙️ Settings
        </Link>

      </nav>
    </aside>
  );
}