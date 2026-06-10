import React, { useEffect, useState } from "react";
import AdminLayout from "../Admin/components/AdminLayout";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const API = "https://palms-backend-bwad.onrender.com/api/issues";
// const API = "http://localhost:5000/api/issues";


const JournalManager = () => {
    const [issues, setIssues] = useState([]);
    const [editing, setEditing] = useState(null);

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [description, setDescription] = useState("");
    const [isFree, setIsFree] = useState(true);

    const [coverFile, setCoverFile] = useState(null);
    const [pdfFile, setPdfFile] = useState(null);

    const [campaignType, setCampaignType] = useState("newsletter");
    const [senderName, setSenderName] = useState("PALMS PLUS");
    const [buttonText, setButtonText] = useState("Download Full Issue");
    const [brochureFile, setBrochureFile] = useState(null);

    const [loading, setLoading] = useState(false);

    const token = localStorage.getItem("adminToken");

    // FETCH ISSUES
    const fetchIssues = async () => {
        const res = await fetch(API);
        const data = await res.json();
        setIssues(data);
    };

    useEffect(() => {
        fetchIssues();
    }, []);

    useEffect(() => {
        if (editing) {
            setTitle(editing.title || "");
            setSubtitle(editing.subtitle || "");
            setDescription(editing.description || "");
            setIsFree(editing.isFree ?? true);

            setCampaignType(editing.campaignType || "newsletter");
            setSenderName(editing.senderName || "PALMS PLUS");
            setButtonText(editing.buttonText || "Download Newsletter");
        }
    }, [editing]);


    const resetForm = () => {
        setTitle("");
        setSubtitle("");
        setDescription("");
        setIsFree(true);
        setCampaignType("newsletter");
        setSenderName("PALMS PLUS");
        setButtonText("Download Full Issue");

        setCoverFile(null);
        setPdfFile(null);
        setBrochureFile(null);

        setEditing(null);
    };
    // CREATE OR UPDATE
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            title,
            subtitle,
            description,
            isFree,
            campaignType,
            senderName,
            buttonText
        };
        let issue;

        if (editing) {
            const res = await fetch(`${API}/${editing._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });
            issue = await res.json();
        } else {
            const res = await fetch(API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });
            issue = await res.json();
        }

        // UPLOAD COVER
        if (coverFile) {
            const formData = new FormData();
            formData.append("cover", coverFile);

            await fetch(`${API}/${issue._id}/cover`, {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
                body: formData
            });
        }

        if (pdfFile || brochureFile) {

            const formData = new FormData();

            if (pdfFile) {
                formData.append("pdf", pdfFile);
            }

            if (brochureFile) {
                formData.append("brochure", brochureFile);
            }

            await fetch(`${API}/${issue._id}/files`, {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
                body: formData
            });
        }

        setLoading(false);
        resetForm();
        fetchIssues();
    };

    const publishIssue = async (id) => {
        const res = await fetch(`${API}/${id}/publish`, {
            method: "PUT",
            headers: { Authorization: `Bearer ${token}` }
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message);
            return;
        }

        fetchIssues();
    };

    const sendIssue = async (id) => {
        const res = await fetch(`${API}/${id}/send`, {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` }
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message);
            return;
        }

        alert("Campaign Sent 🚀");
        fetchIssues();
    };

    const deleteIssue = async (id) => {
        if (!window.confirm("Delete this issue permanently?")) return;

        const res = await fetch(`${API}/${id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` }
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message); // 👈 show backend message
            return;
        }

        fetchIssues();
    };

    return (
        <AdminLayout>
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-gray-900">
                    PALMS PLUS Journal Manager
                </h1>
                <p className="text-gray-500 mt-2">
                    Create, publish, and broadcast leadership issues.
                </p>
            </div>

            {/* CREATE FORM */}
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-3xl shadow-sm border mb-14 space-y-6"
            >
                <input
                    placeholder="Issue Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border px-4 py-3 rounded-xl"
                />

                <input
                    placeholder="Subtitle"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    className="w-full border px-4 py-3 rounded-xl"
                />

                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border px-4 py-3 rounded-xl h-32"
                />

                <div className="grid md:grid-cols-3 gap-6">

                    <select
                        value={campaignType}
                        onChange={(e) => setCampaignType(e.target.value)}
                        className="border px-4 py-3 rounded-xl"
                    >
                        <option value="newsletter">Newsletter</option>
                        <option value="event">Event</option>
                        <option value="promotion">Promotion</option>
                        <option value="announcement">Announcement</option>
                    </select>

                    <input
                        placeholder="Sender Name (ex: PALMS PLUS)"
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        className="border px-4 py-3 rounded-xl"
                    />

                    <input
                        placeholder="Button Text (ex: Download Full Issue)"
                        value={buttonText}
                        onChange={(e) => setButtonText(e.target.value)}
                        className="border px-4 py-3 rounded-xl"
                    />

                </div>

                <label className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        checked={isFree}
                        onChange={() => setIsFree(!isFree)}
                    />
                    Free Issue
                </label>


                <div className="grid md:grid-cols-3 gap-6">



                    {/* COVER UPLOAD */}
                    {campaignType === "newsletter" && (

                        <div
                            onClick={() => document.getElementById("coverInput").click()}
                            className="border border-dashed border-gray-300 rounded-2xl p-8 text-center cursor-pointer hover:border-black transition"
                        >
                            {coverFile ? (
                                <p className="text-sm text-green-600">
                                    {coverFile.name}
                                </p>
                            ) : (
                                <p className="text-sm text-gray-500">
                                    Click to upload Cover Image
                                </p>
                            )}

                            <input
                                id="coverInput"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => setCoverFile(e.target.files[0])}
                            />
                        </div>
                    )}
                    {/* PDF UPLOAD */}
                    <div
                        onClick={() => document.getElementById("pdfInput").click()}
                        className="border border-dashed border-gray-300 rounded-2xl p-8 text-center cursor-pointer hover:border-black transition"
                    >
                        {pdfFile ? (
                            <p className="text-sm text-green-600">
                                {pdfFile.name}
                            </p>
                        ) : (
                            <p className="text-sm text-gray-500">
                                Click to upload Newsletter PDF
                            </p>
                        )}

                        <input
                            id="pdfInput"
                            type="file"
                            accept="application/pdf"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files[0];

                                if (!file) return;

                                const maxSize = 10 * 1024 * 1024; // 10MB

                                if (file.size > maxSize) {
                                    alert("Please upload a PDF smaller than 10 MB.");
                                    e.target.value = "";
                                    return;
                                }

                                setPdfFile(file);
                            }}
                        />
                    </div>

                    {/* BROCHURE UPLOAD */}
                    <div
                        onClick={() => document.getElementById("brochureInput").click()}
                        className="border border-dashed border-gray-300 rounded-2xl p-8 text-center cursor-pointer hover:border-black transition"
                    >

                        {brochureFile ? (
                            <p className="text-sm text-green-600">
                                {brochureFile.name}
                            </p>
                        ) : (
                            <p className="text-sm text-gray-500">
                                Click to upload Brochure (Optional)
                            </p>
                        )}

                        <input
                            id="brochureInput"
                            type="file"
                            accept="image/png,image/jpeg,image/jpg,image/webp"
                            className="hidden"
                            onChange={(e) => setBrochureFile(e.target.files[0])}
                        />
                    </div>

                </div>

                <button className="bg-[var(--palms-blue)] text-white px-6 py-3 rounded-xl">
                    {loading ? "Saving..." : editing ? "Update Issue" : "Create Issue"}
                </button>

                {editing && (
                    <button
                        type="button"
                        onClick={resetForm}
                        className="ml-4 bg-gray-400 text-white px-6 py-3 rounded-xl"
                    >
                        Cancel Editing
                    </button>
                )}
            </form>

            {/* ISSUE GRID */}
            <div className="grid md:grid-cols-3 gap-8">
                {issues.map((issue) => (
                    <div
                        key={issue._id}
                        className="bg-white border rounded-3xl p-6 shadow-sm"
                    >
                        {issue.coverImage?.url && (
                            <img
                                src={issue.coverImage.url}
                                className="h-80 w-full object-cover rounded-xl mb-4"
                                alt=""
                            />
                        )}
                        <h3 className="font-semibold text-lg text-gray-900">
                            {issue.title}
                        </h3>
                        <p className="text-sm text-gray-500">{issue.subtitle}</p>
                        <p className="text-xs mt-2">
                            Campaign Type: {issue.campaignType || "newsletter"}
                        </p>

                        {issue.pdfFile?.url && (
                            <p className="text-xs text-green-600">
                                Newsletter PDF attached
                            </p>
                        )}

                        {issue.brochureFile?.url && (
                            <p className="text-xs text-blue-600">
                                Brochure attached
                            </p>
                        )}

                        <div className="mt-4 space-y-2 text-xs">
                            <p>Status: {issue.isPublished ? "Published" : "Draft"}</p>
                            <p>
                                Campaign:{" "}
                                {issue.brevoCampaignId ? "Sent ✅" : "Not Sent"}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-6">

                            {issue.campaignType === "newsletter" && !issue.isPublished && (
                                <button
                                    onClick={() => publishIssue(issue._id)}
                                    className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm"
                                >
                                    Publish
                                </button>
                            )}

                            {!issue.brevoCampaignId && (
                                <button
                                    onClick={() => sendIssue(issue._id)}
                                    className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm"
                                >
                                    Send
                                </button>
                            )}

                            {issue.brevoCampaignId && (
                                <button
                                    disabled
                                    className="bg-gray-400 text-white px-3 py-2 rounded-lg text-sm cursor-not-allowed"
                                >
                                    Sent ✅
                                </button>
                            )}

                            {!(issue.campaignType === "newsletter" && issue.isPublished) && (<button
                                onClick={() => {
                                    setEditing(issue);
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }} className="bg-yellow-500 text-white px-3 py-2 rounded-lg text-sm"
                            >
                                Edit
                            </button>
                            )}

                            <button
                                onClick={() => deleteIssue(issue._id)}
                                className="bg-red-500 text-white px-3 py-2 rounded-lg text-sm"
                            >
                                Delete
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </AdminLayout>
    );
};

export default JournalManager;