import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-100 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-gray-500">Revenue</h2>
            <p className="text-3xl font-bold">£0</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-gray-500">Quotes</h2>
            <p className="text-3xl font-bold">0</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-gray-500">Jobs</h2>
            <p className="text-3xl font-bold">0</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-gray-500">Invoices</h2>
            <p className="text-3xl font-bold">£0</p>
          </div>
        </div>
      </main>
    </>
  );
}