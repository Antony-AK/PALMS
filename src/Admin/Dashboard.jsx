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
    API.get("/admin/analytics")
      .then(res => setData(res.data))
      .catch(() => setData(null));
  }, []);

  const loading = !data;

  const published = data?.overview?.publishedEvents || 0;
  const draft = data?.overview?.draftEvents || 0;
  const total = data?.overview?.totalEvents || 0;

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

          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <>
              <Card title="Total Events" value={total} />
              <Card title="Subscribers" value={data.overview.totalSubscribers} />
              <Card title="Journal Issues" value={data.overview.totalIssues} />
            </>
          )}

        </div>

        {/* MONTHLY EVENTS */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm mb-10">

          <h2 className="text-lg font-semibold mb-6">
            Events Created (Monthly)
          </h2>

          {loading ? (
            <SkeletonLines count={5} />
          ) : (
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
                      style={{ width: `${item.count * 20}%` }}
                    />
                  </div>

                </div>

              ))}

            </div>
          )}

        </div>

        {/* EVENT STATUS */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm mb-10">

          <h2 className="text-lg font-semibold mb-6">
            Event Status Overview
          </h2>

          {loading ? (
            <SkeletonLines count={2} />
          ) : (
            <>
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
            </>
          )}

        </div>

        {/* TOP EVENTS */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm">

          <h2 className="text-lg font-semibold mb-6">
            Top Events (Seat Fill)
          </h2>

          {loading ? (
            <SkeletonLines count={4} />
          ) : (
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
          )}

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

const SkeletonCard = () => (
  <div className="bg-white p-6 rounded-2xl border shadow-sm animate-pulse">
    <div className="h-3 bg-gray-200 rounded w-20 mb-4"></div>
    <div className="h-8 bg-gray-200 rounded w-16"></div>
  </div>
);

const SkeletonLines = ({ count }) => (
  <div className="space-y-4 animate-pulse">
    {[...Array(count)].map((_, i) => (
      <div key={i}>
        <div className="h-3 bg-gray-200 rounded w-1/3 mb-2"></div>
        <div className="h-2 bg-gray-200 rounded"></div>
      </div>
    ))}
  </div>
);

export default Dashboard;