import mentorData from "./mentorData.json";
import "./mentors.css";

async function fetchMentors() {
    return mentorData;
}

export default async function Mentors() {
    const mentors = await fetchMentors();

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Mentors</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mentors.map((mentor) => (
                    <div key={mentor.id} className="relative group">
                        {/* Mentor Card */}
                        <div className="mentor-card">
                            <div className="flex items-center space-x-4">
                                <img
                                    src={`https://via.placeholder.com/50?text=${mentor.name.charAt(
                                        0
                                    )}`}
                                    alt={mentor.name}
                                    className="mentor-image"
                                />
                                <div>
                                    <h2 className="text-xl font-semibold text-black">
                                        {mentor.name}
                                    </h2>
                                    <p className="text-sm text-black">
                                        {mentor.role}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hover Popup */}
                        <div className="hover-popup">
                            <p>
                                <strong>{mentor.name}</strong>
                            </p>
                            <p>
                                <strong>Role:</strong> {mentor.role}
                            </p>
                            <p>
                                <strong>Concentration:</strong>{" "}
                                {mentor.concentration}
                            </p>
                            <p>
                                <strong>Email:</strong> {mentor.email}
                            </p>
                            <p>
                                <strong>Hometown:</strong> {mentor.hometown}
                            </p>
                            <p>
                                <strong>Favorite OLEEP Fact:</strong>{" "}
                                {mentor["favorite-OLEEP-fact"]}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
