import React, { useEffect, useState } from "react";
import AdminLayout from "../Admin/components/AdminLayout";
import { useDropzone } from "react-dropzone";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const GalleryManager = () => {
    const [folders, setFolders] = useState([]);
    const [editingFolder, setEditingFolder] = useState(null);

    const [name, setName] = useState("");
    const [selectedFolder, setSelectedFolder] = useState(null);
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [coverFile, setCoverFile] = useState(null);
    const [coverLoading, setCoverLoading] = useState(false);
    const [coverPreview, setCoverPreview] = useState(null);

    const token = localStorage.getItem("adminToken");

    const fetchFolders = async () => {
        const res = await fetch("https://palms-backend-bwad.onrender.com/api/gallery");
        const data = await res.json();
        setFolders(data);
    };

    useEffect(() => {
        fetchFolders();
    }, []);

    // CREATE or UPDATE
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let createdFolder;

            const payload = {
                name,
            };

            // 🔥 CREATE OR UPDATE
            if (editingFolder) {
                const res = await fetch(
                    `https://palms-backend-bwad.onrender.com/api/gallery/${editingFolder._id}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        },
                        body: JSON.stringify(payload)
                    }
                );

                if (!res.ok) {
                    alert("Failed to update folder");
                    return;
                }

                createdFolder = await res.json();

            } else {
                const res = await fetch(
                    "https://palms-backend-bwad.onrender.com/api/gallery",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        },
                        body: JSON.stringify(payload)
                    }
                );

                if (!res.ok) {
                    alert("Failed to create folder");
                    return;
                }

                createdFolder = await res.json();
            }

            // 🔥 NOW UPLOAD COVER IF SELECTED
            if (coverFile) {
                setCoverLoading(true);

                const formData = new FormData();
                formData.append("cover", coverFile);

                const coverRes = await fetch(
                    `https://palms-backend-bwad.onrender.com/api/gallery/${createdFolder._id}/cover`,
                    {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${token}`
                        },
                        body: formData
                    }
                );

                if (!coverRes.ok) {
                    alert("Cover upload failed");
                }

                setCoverLoading(false);
            }

            // 🔥 REFRESH EVERYTHING
            resetForm();
            fetchFolders();

        } catch (error) {
            console.error(error);
            alert("Something went wrong");
            setCoverLoading(false);
        }
    };

    const resetForm = () => {
        setName("");
        setCoverFile(null);
        setEditingFolder(null);
    };

    const editFolder = (folder) => {
        setEditingFolder(folder);
        setName(folder.name);
    };

    const deleteFolder = async (id) => {
        if (!window.confirm("Are you sure you want to permanently delete this folder and all images?")) return;

        try {
            const res = await fetch(
                `https://palms-backend-bwad.onrender.com/api/gallery/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (!res.ok) {
                alert("Delete failed");
                return;
            }

            fetchFolders();

        } catch (error) {
            alert("Network error. Please try again.");
        }
    };


    const onDrop = (acceptedFiles) => {
        setFiles(prev => [...prev, ...acceptedFiles]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "image/*": [] },
        maxFiles: 10,
        maxSize: 5 * 1024 * 1024, // 5MB
        onDropRejected: (fileRejections) => {
            alert("Some files are too large. Max size is 5MB.");
        }
    });

    const [previews, setPreviews] = useState([]);

    useEffect(() => {
        const mapped = files.map(file => ({
            file,
            preview: URL.createObjectURL(file)
        }));

        setPreviews(mapped);

        return () => {
            mapped.forEach(p => URL.revokeObjectURL(p.preview));
        };
    }, [files]);

    const uploadImages = async () => {
        if (!selectedFolder || files.length === 0) return;

        setLoading(true); // 🔥 START LOADING

        try {
            const formData = new FormData();
            files.forEach(file => formData.append("images", file));

            const res = await fetch(
                `https://palms-backend-bwad.onrender.com/api/gallery/${selectedFolder._id}/upload`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    body: formData
                }
            );

            if (!res.ok) {
                alert("Upload failed");
                return;
            }

            const updatedFolder = await res.json();

            setSelectedFolder(updatedFolder);
            setFiles([]);
            fetchFolders();

        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        } finally {
            setLoading(false); // 🔥 STOP LOADING (ALWAYS RUNS)
        }
    };

    const deleteImage = async (image) => {
        const res = await fetch(
            `https://palms-backend-bwad.onrender.com/api/gallery/${selectedFolder._id}/delete-image`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ public_id: image.public_id })
            }
        );

        if (!res.ok) {
            alert("Delete failed");
            return;
        }

        const updatedFolder = await res.json();
        setSelectedFolder(updatedFolder);
    };

    useEffect(() => {
        if (!coverFile) return;

        const previewUrl = URL.createObjectURL(coverFile);
        setCoverPreview(previewUrl);

        return () => URL.revokeObjectURL(previewUrl);
    }, [coverFile]);


    return (
        <AdminLayout>

            <div className="flex items-center justify-between mb-12">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                        Gallery Manager
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Organize folders, manage covers, and control images.
                    </p>
                </div>

                <div className="text-sm bg-gray-100 px-4 py-2 rounded-xl text-gray-600">
                    {folders.length} Folders
                </div>
            </div>

            {/* CREATE / EDIT FORM */}
            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm mb-14 space-y-6">
                <input
                    type="text"
                    placeholder="Enter folder name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition px-4 py-3 rounded-xl outline-none"
                />

                <div className="space-y-3">
                    <label className="font-semibold text-sm">Upload Cover Image</label>

                    <div
                        onClick={() => document.getElementById("coverInput").click()}
                        className="border border-dashed border-gray-300 hover:border-black transition rounded-2xl p-10 text-center cursor-pointer bg-gray-50 hover:bg-gray-100"
                    >
                        {coverFile ? (
                            <img
                                src={coverPreview}
                                className="h-40 mx-auto object-cover rounded-xl"
                                alt=""
                            />
                        ) : (
                            "Click to upload cover image"
                        )}
                    </div>

                    <input
                        id="coverInput"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files[0];

                            if (file.size > 5 * 1024 * 1024) {
                                alert("Cover image must be less than 5MB");
                                return;
                            }

                            setCoverFile(file);
                        }} />
                </div>


                <div className="flex gap-4">
                    <button className="bg-[var(--palms-green)] text-white px-6 py-3 rounded-xl">
                        {editingFolder ? "Update Folder" : "Create Folder"}
                    </button>

                    {editingFolder && (
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

            {/* FOLDER LIST */}
            <div className="grid grid-cols-3 gap-6">
                {folders.map(folder => (
                    <div key={folder._id} className="group bg-white border  border-gray-200 hover:border-gray-300 transition-all duration-300 rounded-3xl shadow-sm hover:shadow-lg overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={folder.coverImage?.url}
                                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900">
                                {folder.name}
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                {folder.images.length || 0} images
                            </p>


                            <div className="flex gap-2 mt-6">
                                <button
                                    onClick={() => editFolder(folder)}
                                    className="px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 rounded-xl transition"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => deleteFolder(folder._id)}
                                    className="px-4 py-2 text-sm font-medium bg-red-50 text-red-600 hover:bg-red-100 rounded-xl transition"
                                >
                                    Delete
                                </button>

                                <button
                                    onClick={() => setSelectedFolder(folder)}
                                    className="ml-auto px-4 py-2 text-sm font-medium bg-black text-white hover:opacity-90 rounded-xl transition"
                                >
                                    Manage
                                </button>
                            </div>

                        </div>

                    </div>
                ))}
            </div>

            {selectedFolder && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white rounded-3xl w-[900px] max-h-[85vh] overflow-auto shadow-2xl border border-gray-200 p-10">
                        <h2 className="text-2xl font-semibold mb-6">
                            Manage Images - {selectedFolder.name}
                        </h2>

                        {/* DROPZONE */}
                        <div
                            {...getRootProps()}
                            className="border border-dashed border-gray-300 hover:border-black transition rounded-2xl p-14 text-center cursor-pointer bg-gray-50"
                        >
                            <input {...getInputProps()} />
                            <p className="text-gray-600 font-medium">
                                {isDragActive ? "Drop images here..." : "Drag & drop images or click to upload"}
                            </p>
                            <p className="text-xs text-gray-400 mt-2">
                                Max 10 files • 5MB each
                            </p>                        </div>

                        {/* NEW FILE PREVIEW */}
                        {files.length > 0 && (
                            <>
                                <h3 className="mt-6 mb-2 font-semibold">New Images Preview</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    {previews.map((p, index) => (
                                        <img
                                            key={index}
                                            src={p.preview}
                                            className="h-32 w-full object-cover rounded-xl"
                                            alt=""
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={uploadImages}
                                    disabled={loading}
                                    className={`px-6 py-3 rounded-xl mt-4 text-white transition ${loading
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-[var(--palms-green)] hover:opacity-90"
                                        }`}
                                >
                                    {loading ? (
                                        <span className="flex items-center gap-2">
                                            <AiOutlineLoading3Quarters className="animate-spin" />
                                            Uploading...
                                        </span>
                                    ) : (
                                        "Upload"
                                    )}
                                </button>
                            </>
                        )}

                        {coverLoading && (
                            <p className="text-sm text-gray-500 mt-2">
                                Uploading cover...
                            </p>
                        )}

                        {/* EXISTING IMAGES */}
                        <h3 className="mt-8 mb-3 font-semibold">Existing Images</h3>

                        <div className="grid grid-cols-3 gap-4">
                            {selectedFolder.images.map((img) => (
                                <div key={img.public_id} className="relative group overflow-hidden rounded-2xl">
                                    <img
                                        src={img.url}
                                        className="h-32 w-full object-cover rounded-xl"
                                        alt=""
                                    />

                                    <button
                                        onClick={() => deleteImage(img)}
                                        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition bg-white text-red-600 text-xs font-medium px-3 py-1 rounded-full shadow"
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setSelectedFolder(null)}
                            className="mt-6 bg-gray-400 text-white px-6 py-3 rounded-xl"
                        >
                            Close
                        </button>

                    </div>
                </div>
            )}


        </AdminLayout>
    );
};

export default GalleryManager;