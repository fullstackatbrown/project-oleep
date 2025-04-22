"use client";

import Image from "next/image";
import { useState } from "react";

type MentorObject = {
    id: string;
    name: string;
    email: string;
    concentration: string;
    role: string;
    favoriteFact: string;
    hometown: string;
    imageUrl: string;
};

export default function MentorsClient({
    mentors,
}: {
    mentors: MentorObject[];
}) {
    const [selectedMentor, setSelectedMentor] = useState<MentorObject | null>(
        null
    );

    const openModal = (mentor: MentorObject) => {
        setSelectedMentor(mentor);
    };
    const closeModal = () => setSelectedMentor(null);

    return (
        <>
            <div className="mentor-container">
                {mentors.map((mentor) => (
                    <div
                        key={mentor.id}
                        className="relative group"
                        onClick={() => openModal(mentor)}
                    >
                        <div className="mentor-card" title="Click to view bio">
                            <Image
                                width={300}
                                height={300}
                                src={mentor.imageUrl}
                                alt={mentor.name}
                                className="mentor-image"
                            />
                            <div className="mentor-info">
                                <h2 className="text-xl font-semibold text-black mentor-name">
                                    {mentor.name}
                                </h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedMentor && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div
                        className="modal-content rounded-lg flex w-3/4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            width={300}
                            height={300}
                            src={selectedMentor.imageUrl}
                            alt={selectedMentor.name}
                            className="w-1/2 h-auto object-cover rounded-lg"
                        />
                        <div className="flex-1 p-6 pt-8 pb-8">
                            <button
                                className="close-button"
                                onClick={closeModal}
                            >
                                &times;
                            </button>
                            <p className="text-2xl font-bold mb-4">
                                <strong>{selectedMentor.name}</strong>
                            </p>
                            <p className="mb-3">
                                <strong>Role:</strong> {selectedMentor.role}
                            </p>
                            <p className="mb-3">
                                <strong>Concentration:</strong>{" "}
                                {selectedMentor.concentration}
                            </p>
                            <p className="mb-3">
                                <strong>Hometown:</strong>{" "}
                                {selectedMentor.hometown}
                            </p>
                            <p className="mb-3">
                                <strong>Favorite OLEEP Fact:</strong>{" "}
                                {selectedMentor.favoriteFact}
                            </p>
                            <p className="mb-3">
                                <strong>Email:</strong>{" "}
                                <a
                                    href={`mailto:${selectedMentor.email}`}
                                    className="text-blue-500 hover:underline"
                                >
                                    {selectedMentor.email}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
