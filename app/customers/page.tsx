"use client";

import { useState } from "react";

import DashboardLayout from "@/components/DashboardLayout";
import Button from "@/components/Button";
import CustomerTable from "@/components/CustomerTable";
import AddCustomerModal from "@/components/AddCustomerModal";


type Customer = {
  id: number;
  name: string;
  phone: string;
  email: string;
  business: string;
  address: string;
  status: string;
};

export default function CustomersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [customers, setCustomers] = useState<Customer[]>([
   {
  id: 1,
  name: "John Smith",
  phone: "+44 7700 900123",
  email: "john@example.com",
  business: "ABC Services",
  address: "London",
  status: "Active",
},
 {
  id: 2,
  name: "Sarah Johnson",
  phone: "+1 202 555 0199",
  email: "sarah@example.com",
  business: "Johnson Repairs",
  address: "New York",
  status: "Lead",
},
   {
  id: 3,
  name: "Michael Brown",
  phone: "+234 803 456 7890",
  email: "michael@example.com",
  business: "Brown Electrical",
  address: "Lagos",
  status: "Inactive",
},
  ]);

  function handleAddCustomer(customer: Omit<Customer, "id" | "status">) {
    setCustomers([
  ...customers,
  {
    id: customers.length + 1,
    ...customer,
    status: "Active",
  },
]);
    setIsModalOpen(false);
  }

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">
          Customers
        </h1>

        <Button
          text="+ Add Customer"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      <input
        type="text"
        placeholder="Search customers..."
        className="w-full p-3 border rounded-lg mb-8"
      />

      <CustomerTable customers={customers} />

      <AddCustomerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddCustomer}
      />
    </DashboardLayout>
  );
}