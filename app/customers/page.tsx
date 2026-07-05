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
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);

const [editingIndex, setEditingIndex] = useState<number | null>(null);

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
function handleEdit(customer: Customer) {
  const index = customers.findIndex((c) => c.id === customer.id);

  setEditingCustomer(customer);
  setEditingIndex(index);
  setIsModalOpen(true);
}
   function handleAddCustomer(customer: Omit<Customer, "id" | "status">) {
   if (editingIndex !== null) {
    const updatedCustomers = [...customers];

    updatedCustomers[editingIndex] = {
      ...customers[editingIndex],
      ...customer,
    };

    setCustomers(updatedCustomers);

    setEditingCustomer(null);
    setEditingIndex(null);
  } else {
    setCustomers([
      ...customers,
      {
        id: Date.now(),
        ...customer,
        status: "Active",
      },
    ]);
  }

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
  onClick={() => {
    setEditingCustomer(null);
    setEditingIndex(null);
    setIsModalOpen(true);
  }}
/>
      </div>

      <input
        type="text"
        placeholder="Search customers..."
        className="w-full p-3 border rounded-lg mb-8"
      />

      <CustomerTable
  customers={customers}
  onEdit={handleEdit}
/>

      <AddCustomerModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onSave={handleAddCustomer}
  customer={editingCustomer}
/>
    </DashboardLayout>
  );
}