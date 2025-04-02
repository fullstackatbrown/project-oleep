import { createBucketClient } from "@cosmicjs/sdk";
import "./mentors.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const cosmic = createBucketClient({
    bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG || "",
    readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY || "",
});

type CosmicMentorResponse = {
    objects: Array<{
        slug: string;
        title: string;
        type: string;
        metadata: {
            name: string;
            email: string;
            concentration: string;
            favorite_thing_about_oleep: string;
            hometown: string;
            image: {
                url: string;
                imgix_url: string;
            };
        };
    }>;
    total: number;
};

async function fetchMentors() {
    try {
        const { objects } = await cosmic.objects
            .find({ type: "mentors" })
            .props("slug,title,metadata,type")
            .depth(1);
        const mentors = objects as CosmicMentorResponse["objects"];
        return mentors.map((obj) => ({
            id: obj.slug,
            name: obj.metadata.name,
            email: obj.metadata.email,
            concentration: obj.metadata.concentration,
            favoriteFact: obj.metadata.favorite_thing_about_oleep,
            hometown: obj.metadata.hometown,
            imageUrl: obj.metadata.image.url,
        }));
    } catch (error) {
        console.error("Error fetching mentors:", error);
        return [];
    }
}

export default async function Mentors() {
    const mentors = await fetchMentors();

    return (
        <div className={`p-8 ${quicksand.className}`} id="page-container">
            <h1 style={{ marginTop: 0, marginBottom: "2rem" }}>Mentors</h1>
            <div className="mentor-container">
                {mentors.map((mentor) => (
                    <div key={mentor.id} className="relative group">
                        <div className="mentor-card">
                            <img
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

                        <div className="hover-popup">
                            <p>
                                <strong>{mentor.name}</strong>
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
                                {mentor.favoriteFact}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
