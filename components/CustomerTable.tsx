type Customer = {
  id: number;
  name: string;
  phone: string;
  email: string;
  business: string;
  address: string;
  status: string;
};

type CustomerTableProps = {
  customers: Customer[];
  onEdit: (customer: Customer) => void;
};
export default function CustomerTable({
  customers,
  onEdit,
}: CustomerTableProps) {
  return (
    <div className="bg-white rounded-xl shadow border overflow-hidden">

      <table className="w-full">

       <thead className="bg-gray-100">
  <tr>
  <th className="text-left p-4">ID</th>
  <th className="text-left p-4">Name</th>
  <th className="text-left p-4">Phone</th>
  <th className="text-left p-4">Email</th>
  <th className="text-left p-4">Status</th>
  <th className="text-center p-4">Actions</th>
</tr>
</thead>

        <tbody>

          {customers.map((customer, ) => (

            <tr
              key={customer.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="p-4">{customer.id}</td>

              <td className="p-4">{customer.name}</td>

              <td className="p-4">{customer.phone}</td>

              <td className="p-4">{customer.email}</td>

              <td className="p-4">{customer.status}</td>
              <td className="p-4 text-center">
  <button
  onClick={() => onEdit(customer)}
  className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
>
  Edit
</button>

  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
    Delete
  </button>
</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}