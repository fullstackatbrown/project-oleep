import { createBucketClient } from "@cosmicjs/sdk";
import "./mentors.css";
import { Quicksand } from "next/font/google";
import MentorsClient from "./MentorsClient";

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const cosmic = createBucketClient({
    bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG || "",
    readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY || "",
});


type CosmicMentor = {
    slug: string;
    title: string;
    metadata: {
        name: string;
        email: string;
        concentration: string;
        role: string;
        favorite_thing_about_oleep: string;
        hometown: string;
        image?: { url?: string; imgix_url?: string };
    };
    type: string;
};

async function fetchMentors() {
    try {
        const { objects } = await cosmic.objects
            .find({ type: "mentors" })
            .props("slug,title,metadata,type")
            .depth(1);
        return objects.map((obj: CosmicMentor) => ({
            id: obj.slug,
            name: obj.metadata.name,
            email: obj.metadata.email,
            concentration: obj.metadata.concentration,
            role: obj.metadata.role,
            favoriteFact: obj.metadata.favorite_thing_about_oleep,
            hometown: obj.metadata.hometown,
            imageUrl:
                obj.metadata.image?.url ||
                obj.metadata.image?.imgix_url ||
                "/noMentorImage.jpg",
        }));
    } catch (error) {
        console.error("Error fetching mentors:", error);
        return [];
    }
}

export default async function Mentors() {
    // console.log if cosmic.bucketslug is set or not
    if (!process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG || process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG === "") {
        console.error("Cosmic bucket slug is not set.");
    } else {
        console.log("Cosmic bucket slug is set:");
    }
    const mentors = await fetchMentors();
    return (
        <div className={`p-8 ${quicksand.className}`} id="page-container">
            <h1
                style={{
                    marginTop: 0,
                    marginBottom: "2rem",
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                }}
            >
                Mentors
            </h1>
            <MentorsClient mentors={mentors} />
        </div>
    );
}
