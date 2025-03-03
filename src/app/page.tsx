

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mt-4">Welcome to OLEEP</h1>
      <p className="text-center max-w-lg mt-2">
        The Outdoor Leadership & Environmental Education Program (OLEEP) is a mentorship initiative
        connecting Brown University students with high school mentees to teach environmental justice.
      </p>
      <div className="mt-6 flex gap-4">
        <a href="/mentors" className="px-4 py-2 bg-green-600 text-white rounded-md">
          Meet Our Mentors
        </a>
        <a href="/newsletter" className="px-4 py-2 border border-green-600 text-green-600 rounded-md">
          Read Our Newsletter
        </a>
      </div>
    </div>
  );
}
