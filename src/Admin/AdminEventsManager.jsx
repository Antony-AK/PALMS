import React, { useEffect, useState } from "react";
import AdminLayout from "../Admin/components/AdminLayout";
import API from "../services/api";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const AdminEventsManager = () => {
    const [events, setEvents] = useState([]);
    const [editingEvent, setEditingEvent] = useState(null);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        bannerImage: "",
        bannerFile: null,
        date: "",
        time: "",
        venue: "",
        speaker: "",
        price: "",
        seatsAvailable: "",
        deadline: "",
        status: "draft"
    });

    const fetchEvents = async () => {
        const res = await API.get("/events/admin/all");
        setEvents(res.data);
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const resetForm = () => {
        setEditingEvent(null);
        setFormData({
            title: "",
            description: "",
            bannerImage: "",
            date: "",
            time: "",
            venue: "",
            speaker: "",
            price: "",
            seatsAvailable: "",
            deadline: "",
            status: "draft"
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();

        data.append("title", formData.title);
        data.append("description", formData.description);
        data.append("date", formData.date);
        data.append("time", formData.time);
        data.append("venue", formData.venue);
        data.append("speaker", formData.speaker);
        data.append("price", formData.price);
        data.append("seatsAvailable", formData.seatsAvailable);
        data.append("deadline", formData.deadline);
        data.append("status", formData.status);

        if (formData.bannerFile) {
            data.append("banner", formData.bannerFile);
        }

        try {
            if (editingEvent) {
                await API.put(`/events/${editingEvent._id}`, data);
            } else {
                await API.post("/events", data);
            }

            fetchEvents();
            resetForm();
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const toggleStatus = async (id) => {
        try {
            await API.patch(`/events/${id}/toggle-status`);
            fetchEvents();
        } catch (error) {
            console.error(error);
        }
    };

    const editEvent = (event) => {
        setEditingEvent(event);
        setFormData({
            title: event.title,
            description: event.description,
            date: event.date?.substring(0, 10),
            time: event.time,
            venue: event.venue,
            speaker: event.speaker,
            price: event.price,
            seatsAvailable: event.seatsAvailable,
            deadline: event.deadline?.substring(0, 10),
            status: event.status
        });
    };


    const deleteEvent = async (id) => {
        if (!window.confirm("Delete this event permanently?")) return;
        await API.delete(`/events/${id}`);
        fetchEvents();
    };

    return (
        <AdminLayout>
            {/* HEADER */}
            <div className="flex items-center justify-between mb-12">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900">
                        Events Manager
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Create, publish and manage programme announcements.
                    </p>
                </div>

                <div className="text-sm bg-gray-100 px-4 py-2 rounded-xl text-gray-600">
                    {events.length} Events
                </div>
            </div>

            {/* CREATE / EDIT FORM */}
            <form
                onSubmit={handleSubmit}
                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm mb-14 space-y-6"
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Event Title"
                    value={formData.title}
                    onChange={handleChange}
                    className="input-style"
                    required
                />

                <textarea
                    name="description"
                    placeholder="Event Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="input-style h-28"
                />

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                        setFormData({ ...formData, bannerFile: e.target.files[0] })
                    }
                    className="input-style"
                />

                {/* <a
                    href={event.landingPageUrl}
                    target="_blank"
                    className="text-sm text-blue-600 underline"
                >
                    View Landing Page
                </a> */}

                <div className="grid md:grid-cols-2 gap-6">

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-600">
                            Event Date
                        </label>

                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="input-style px-4 py-3 rounded-xl "
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-600">
                            Event Time
                        </label>

                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="border px-4 py-3 input-style rounded-xl"
                        />
                    </div>

                </div>

                <input name="venue" placeholder="Venue" value={formData.venue} onChange={handleChange} className="input-style" />
                <input name="speaker" placeholder="Speaker" value={formData.speaker} onChange={handleChange} className="input-style" />

                <div className="grid grid-cols-3 gap-4">
                    <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} className="input-style " />
                    <input name="seatsAvailable" type="number" placeholder="Seats Available" value={formData.seatsAvailable} onChange={handleChange} className="input-style" />
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-600">
                            Expiry Date
                        </label>

                        <input
                            type="date"
                            name="deadline"
                            value={formData.deadline}
                            onChange={handleChange}
                            className="border px-4 input-style py-3 rounded-xl"
                        />
                    </div>                </div>

                <select name="status" value={formData.status} onChange={handleChange} className="input-style">
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                </select>

                <div className="flex gap-4">
                    <button
                        className="bg-[var(--palms-green)] text-white px-6 py-3 rounded-xl flex items-center gap-2"
                    >
                        {loading ? (
                            <>
                                <AiOutlineLoading3Quarters className="animate-spin" />
                                Saving...
                            </>
                        ) : editingEvent ? "Update Event" : "Create Event"}
                    </button>

                    {editingEvent && (
                        <button
                            type="button"
                            onClick={resetForm}
                            className="bg-gray-400 text-white px-6 py-3 rounded-xl"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>

            {/* EVENT LIST */}
            <div className="grid grid-cols-3 gap-6">
                {events.map(event => (
                    <div
                        key={event._id}
                        className="group bg-white border border-gray-200 hover:border-gray-300 transition rounded-3xl shadow-sm hover:shadow-lg overflow-hidden"
                    >
                        <div className="relative  overflow-hidden">
                            <img
                                src={event.bannerImage?.url}
                                className="h-[500px] w-full object-cover group-hover:scale-105 transition"
                                alt=""
                            />
                            <div className={`absolute top-4 left-4 text-white text-xs px-3 py-1 rounded-full 
    ${event.status === "published" ? "bg-green-600" : "bg-gray-600"}`}>
                                {event.status}
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-semibold">{event.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">
                                {new Date(event.date).toDateString()}
                            </p>

                            <div className="flex gap-3 mt-6 flex-wrap">

                                {event.status === "draft" ? (
                                    <button
                                        onClick={() => toggleStatus(event._id)}
                                        className="px-4 py-2 text-sm bg-green-50 text-green-600 hover:bg-green-100 rounded-xl"
                                    >
                                        Publish
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => toggleStatus(event._id)}
                                        className="px-4 py-2 text-sm bg-yellow-50 text-yellow-600 hover:bg-yellow-100 rounded-xl"
                                    >
                                        Unpublish
                                    </button>
                                )}

                                <button
                                    onClick={() => editEvent(event)}
                                    className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-xl"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => deleteEvent(event._id)}
                                    className="px-4 py-2 text-sm bg-red-50 text-red-600 hover:bg-red-100 rounded-xl"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </AdminLayout>
    );
};

export default AdminEventsManager;