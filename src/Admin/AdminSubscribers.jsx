import React, { useEffect, useState } from "react";
import AdminLayout from "../Admin/components/AdminLayout";

// const API = "https://palms-backend-bwad.onrender.com/api/subscribers";
const API = "http://localhost:5000/api/subscribers";


const AdminSubscribers = () => {

  const [subscribers, setSubscribers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  const limit = 20;

  const fetchSubscribers = async () => {
    const res = await fetch(
      `${API}?page=${page}&limit=${limit}&search=${search}`
    );
    const data = await res.json();

    setSubscribers(data.subscribers);
    setTotalPages(data.totalPages);
    setTotal(data.total);
  };

  useEffect(() => {
    fetchSubscribers();
  }, [page, search]);

  // DELETE
  const deleteSubscriber = async (id) => {
    if (!window.confirm("Delete this subscriber?")) return;

    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchSubscribers();
  };

  // TOGGLE ACTIVE
  const toggleSubscriber = async (id) => {
    await fetch(`${API}/${id}/toggle`, { method: "PUT" });
    fetchSubscribers();
  };

  // EXPORT CSV
  const exportCSV = () => {
    const headers = ["Name", "Email", "Type", "Status", "Joined"];
    const rows = subscribers.map(sub => [
      sub.name,
      sub.email,
      sub.subscriptionType,
      sub.isActive ? "Active" : "Inactive",
      new Date(sub.createdAt).toLocaleDateString()
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map(e => e.join(",")).join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "subscribers.csv";
    link.click();
  };

  const handleCSVUpload = async (e) => {

    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`${API}/import`, {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    alert(data.message);
    fetchSubscribers();

  };

  return (
    <AdminLayout>

      <div className="mb-12 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Subscribers
          </h1>
          <p className="text-gray-500 mt-2">
            Manage newsletter subscribers.
          </p>
        </div>

        <div className="flex gap-4">

          <label className="bg-blue-600  text-white px-4 py-3 rounded-xl cursor-pointer">

            Import Subscribers CSV

            <input
              type="file"
              accept=".csv"
              onChange={handleCSVUpload}
              className="hidden"
            />

          </label>
           <button
          onClick={exportCSV}
          className="bg-[var(--palms-blue)] text-white px-6 py-3 rounded-xl"
        >
          Export CSV
        </button>

        </div>

       
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm border mb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            Total Subscribers
          </h2>
          <span className="bg-[var(--palms-blue)] text-white px-4 py-2 rounded-xl text-sm">
            {total}
          </span>
        </div>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
          className="mt-6 w-full border px-4 py-3 rounded-xl"
        />
      </div>

      <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Joined</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {subscribers.map(sub => (
              <tr key={sub._id} className="border-b hover:bg-gray-50">

                <td className="p-4">{sub.name || "-"}</td>
                <td className="p-4">{sub.email}</td>

                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${sub.subscriptionType === "paid"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                    }`}>
                    {sub.subscriptionType}
                  </span>
                </td>

                <td className="p-4">
                  <button
                    onClick={() => toggleSubscriber(sub._id)}
                    className={`px-3 py-1 rounded-full text-xs ${sub.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                      }`}
                  >
                    {sub.isActive ? "Active" : "Inactive"}
                  </button>
                </td>

                <td className="p-4">
                  {new Date(sub.createdAt).toLocaleDateString()}
                </td>

                <td className="p-4">
                  <button
                    onClick={() => deleteSubscriber(sub._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg text-xs"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(prev => prev - 1)}
          className="px-4 py-2 border rounded-lg"
        >
          Prev
        </button>

        <span className="px-4 py-2">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(prev => prev + 1)}
          className="px-4 py-2 border rounded-lg"
        >
          Next
        </button>
      </div>

    </AdminLayout>
  );
};

export default AdminSubscribers;