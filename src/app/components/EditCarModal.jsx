"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

export default function EditCarModal({ car, onClose, onUpdated }) {
  const [form, setForm] = useState({
    carName: car.carName || "",
    serviceType: car.serviceType || "",
    vehicleType: car.vehicleType || "",
    seater: car.seater || "",
    rentalPrice: car.rentalPrice || "",
    category: car.category || "",
    carDetails: car.carDetails || "",
    amenities: car.amenities?.join(", ") || "",
    carImages: [],
  });

  const [existingImages, setExistingImages] = useState(
    car.carImages || []
  );
  const [newPreviews, setNewPreviews] = useState([]);
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [showAddVehicle, setShowAddVehicle] = useState(false);
  const [newVehicleType, setNewVehicleType] = useState("");
  const [addingVehicle, setAddingVehicle] = useState(false);
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const selectedFiles = Array.from(files);
      setForm((p) => ({ ...p, carImages: selectedFiles }));
      setNewPreviews(
        selectedFiles.map((file) =>
          URL.createObjectURL(file)
        )
      );
    } else {
      setForm((p) => ({
        ...p,
        [name]: value,
        ...(name === "serviceType" &&
          value === "CHAUFFERS" && {
          rentalPrice: "",
          category: "",
        }),
      }));
    }
  };
  useEffect(() => {
    fetch("/api/vehicle-types")
      .then((r) => r.json())
      .then((j) => setVehicleTypes(j.data || []));
  }, []);
  const removeNew = (index) => {
    const previews = [...newPreviews];
    const files = [...form.carImages];

    URL.revokeObjectURL(previews[index]);
    previews.splice(index, 1);
    files.splice(index, 1);

    setNewPreviews(previews);
    setForm((p) => ({ ...p, carImages: files }));
  };
  const addVehicleType = async () => {
    if (!newVehicleType.trim()) return;

    try {
      setAddingVehicle(true);

      const res = await fetch("/api/vehicle-types", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newVehicleType.trim() }),
      });

      const json = await res.json();
      if (!res.ok) return;

      setVehicleTypes((p) => [...p, json.data.name]);
      setForm((p) => ({ ...p, vehicleType: json.data.name }));
      setNewVehicleType("");
      setShowAddVehicle(false);
    } finally {
      setAddingVehicle(false);
    }
  };

  useEffect(() => {
    return () =>
      newPreviews.forEach((url) =>
        URL.revokeObjectURL(url)
      );
  }, [newPreviews]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("carName", form.carName);
    data.append("serviceType", form.serviceType);
    data.append("seater", form.seater);
    data.append("carDetails", form.carDetails);
    data.append("vehicleType", form.vehicleType);

    if (form.serviceType === "RENTAL") {
      data.append("rentalPrice", form.rentalPrice);
      data.append("category", form.category);
    }
    if (form.serviceType === "RENTAL") {
      data.append("rentalPrice", form.rentalPrice);
      data.append("category", form.category);

      form.amenities
        .split(",")
        .map((a) => a.trim())
        .filter(Boolean)
        .forEach((a) => data.append("amenities", a));
    }
    existingImages.forEach((img) =>
      data.append("keepImages", img)
    );
    form.carImages.forEach((img) =>
      data.append("carImages", img)
    );

    await fetch(`/api/cars/${car._id}`, {
      method: "PUT",
      body: data,
    });

    onUpdated();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-xl rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-8 py-4 border-b">
          <h2 className="text-xl font-semibold">
            Edit Car Details
          </h2>
          <button type="button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="px-8 py-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Car Name">
              <input
                name="carName"
                value={form.carName}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
              />
            </Input>

            <Input label="Service Type">
              <select
                name="serviceType"
                value={form.serviceType}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
              >
                <option value="">Select</option>
                <option value="CHAUFFERS">Chauffeur</option>
                <option value="RENTAL">Rental</option>
              </select>
            </Input>

            <Input label="Seater">
              <input
                type="number"
                name="seater"
                value={form.seater}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
              />
            </Input>
            {form.serviceType === "RENTAL" && (
              <Input label="Rental Price">
                <input
                  type="number"
                  name="rentalPrice"
                  value={form.rentalPrice}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent"
                />
              </Input>
            )}
            {form.serviceType === "RENTAL" && (
              <Input label="Rental Category">
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent"
                >
                  <option value="">Select Category</option>
                  <option value="Car">Car</option>
                  <option value="SUV">SUV</option>
                  <option value="Premium">Premium</option>
                  <option value="Van">Van</option>
                  <option value="Truck">Truck</option>
                </select>
              </Input>
            )}
          </div>
          {form.serviceType === "RENTAL" && (
            <Input label="Amenities (comma separated)">
              <input
                name="amenities"
                value={form.amenities}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
              />
            </Input>
          )}
                     {form.serviceType === "CHAUFFERS" && (
              <>
                {!showAddVehicle ? (
                  <button
                    type="button"
                    onClick={() => setShowAddVehicle(true)}
                    className="text-sm text-green-600 font-semibold flex items-center gap-1"
                  >
                    <span className="text-lg">+</span> Add Vehicle Type
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <input
                      value={newVehicleType}
                      onChange={(e) => setNewVehicleType(e.target.value)}
                      placeholder="New vehicle type"
                      className="flex-1 bg-gray-50 border rounded-xl px-3 py-2"
                    />
                    <button
                      type="button"
                      onClick={addVehicleType}
                      disabled={addingVehicle}
                      className="bg-green-600 text-white px-2 rounded-lg"
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowAddVehicle(false);
                        setNewVehicleType("");
                      }}
                      className="text-gray-500 px-2"
                    >
                      ✕
                    </button>
                  </div>
                )}

                <Input label="Vehicle Type">
                  <select
                    name="vehicleType"
                    value={form.vehicleType}
                    onChange={handleChange}
                    className="w-full outline-none bg-transparent"
                  >
                    <option value="">Select</option>
                    {vehicleTypes.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </Input>
              </>
            )}
          <Input label="Details">
            <textarea
              rows={3}
              name="carDetails"
              value={form.carDetails}
              onChange={handleChange}
              className="w-full resize-none outline-none bg-transparent"
            />
          </Input>
          <div>
            <p className="text-sm font-medium mb-2">Images</p>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          {(existingImages.length > 0 ||
            newPreviews.length > 0) && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {existingImages.map((img, i) => (
                  <ImageCard
                    key={`old-${i}`}
                    src={img}
                    onRemove={() =>
                      setExistingImages((p) =>
                        p.filter((_, x) => x !== i)
                      )
                    }
                  />
                ))}
                {newPreviews.map((src, i) => (
                  <ImageCard
                    key={`new-${i}`}
                    src={src}
                    onRemove={() => removeNew(i)}
                  />
                ))}
              </div>
            )}
        </div>
        <div className="flex justify-end gap-3 px-8 py-4 border-t">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg"
          >
            Update Car
          </button>
        </div>
      </form>
    </div>
  );
}
function Input({ label, children }) {
  return (
    <div>
      <label className="text-sm font-medium mb-1 block">
        {label}
      </label>
      <div className="bg-gray-50 border rounded-xl px-3 py-2">
        {children}
      </div>
    </div>
  );
}

function ImageCard({ src, onRemove }) {
  return (
    <div className="relative h-24 rounded-xl overflow-hidden">
      <Image src={src} alt="img" fill className="object-cover" />
      <button
        type="button"
        onClick={onRemove}
        className="absolute top-1 right-1 bg-black/60 text-white p-1 rounded-full"
      >
        <FaTimes size={12} />
      </button>
    </div>
  );
}
