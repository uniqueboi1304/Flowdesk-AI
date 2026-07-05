import CustomerForm from "@/components/CustomerForm";

type Customer = {
  name: string;
  phone: string;
  email: string;
  business: string;
  address: string;
};

type AddCustomerModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (customer: Customer) => void;
  customer?: Customer | null;
};

export default function AddCustomerModal({
  isOpen,
  onClose,
  onSave, 
  customer,
}: AddCustomerModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[500px] p-8">
        <h2 className="text-2xl font-bold mb-6">
          Add New Customer
        </h2>

        <CustomerForm
  onSave={onSave}
  customer={customer}
/>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="border px-5 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}