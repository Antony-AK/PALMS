import React, { useEffect, useState } from "react";
import AdminLayout from "../Admin/components/AdminLayout";
import API from "../services/api";

const monthNames = [
  "", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/admin/analytics").then(res => setData(res.data));
  }, []);

  if (!data) return <div className="p-20 text-center">Loading...</div>;

  const published = data.overview.publishedEvents;
  const draft = data.overview.draftEvents;
  const total = data.overview.totalEvents;

  const publishedPercent = total
    ? Math.round((published / total) * 100)
    : 0;

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto py-10">

        <h1 className="text-3xl font-semibold text-gray-900 mb-10">
          Platform Summary
        </h1>

        {/* SUMMARY CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <Card title="Total Events" value={total} />
          <Card title="Subscribers" value={data.overview.totalSubscribers} />
          <Card title="Journal Issues" value={data.overview.totalIssues} />

        </div>

        {/* MONTHLY EVENTS */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm mb-10">
          <h2 className="text-lg font-semibold mb-6">
            Events Created (Monthly)
          </h2>

          <div className="space-y-4">
            {data.eventsPerMonth.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{monthNames[item._id]}</span>
                  <span>{item.count} events</span>
                </div>

                <div className="h-2 bg-gray-100 rounded-full">
                  <div
                    className="h-2 bg-black rounded-full"
                    style={{
                      width: `${item.count * 20}%`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EVENT STATUS */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm mb-10">
          <h2 className="text-lg font-semibold mb-6">
            Event Status Overview
          </h2>

          <div className="mb-4 text-sm">
            {published} Published / {draft} Draft
          </div>

          <div className="h-3 bg-gray-100 rounded-full">
            <div
              className="h-3 bg-green-600 rounded-full"
              style={{ width: `${publishedPercent}%` }}
            />
          </div>

          <div className="text-xs text-gray-500 mt-2">
            {publishedPercent}% of events are published
          </div>
        </div>

        {/* TOP EVENTS */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <h2 className="text-lg font-semibold mb-6">
            Top Events (Seat Fill)
          </h2>

          <div className="space-y-4">
            {data.seatStats.map((event, i) => {
              const percent = event.seatsAvailable
                ? Math.round(
                    (event.seatsBooked / event.seatsAvailable) * 100
                  )
                : 0;

              return (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{event.title}</span>
                    <span>{percent}%</span>
                  </div>

                  <div className="h-2 bg-gray-100 rounded-full">
                    <div
                      className="h-2 bg-green-600 rounded-full"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </AdminLayout>
  );
};

const Card = ({ title, value }) => (
  <div className="bg-white p-6 rounded-2xl border shadow-sm">
    <p className="text-xs uppercase text-gray-400">
      {title}
    </p>
    <h3 className="text-2xl font-semibold mt-2">
      {value}
    </h3>
  </div>
);

export default Dashboard;