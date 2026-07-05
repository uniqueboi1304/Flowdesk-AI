"use client";

import { useEffect, useState } from "react";

type Customer = {
  name: string;
  phone: string;
  email: string;
  business: string;
  address: string;
};

type CustomerFormProps = {
  onSave: (customer: Customer) => void;
  customer?: Customer | null;
};

export default function CustomerForm({
  onSave,
  customer,
}: CustomerFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [address, setAddress] = useState("");
  useEffect(() => {
  if (customer) {
    setFullName(customer.name);
    setEmail(customer.email);
    setPhone(customer.phone);
    setBusiness(customer.business);
    setAddress(customer.address);
  } else {
    setFullName("");
    setEmail("");
    setPhone("");
    setBusiness("");
    setAddress("");
  }
}, [customer]);

  function handleSubmit() {
    onSave({
      name: fullName,
      phone,
      email,
      business,
      address,
    });

    setFullName("");
    setEmail("");
    setPhone("");
    setBusiness("");
    setAddress("");
  }

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="w-full border rounded-lg p-3"
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded-lg p-3"
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full border rounded-lg p-3"
      />

      <input
        type="text"
        placeholder="Business Name"
        value={business}
        onChange={(e) => setBusiness(e.target.value)}
        className="w-full border rounded-lg p-3"
      />

      <textarea
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full border rounded-lg p-3"
      />

      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          Save Customer
        </button>
      </div>
    </div>
  );
}