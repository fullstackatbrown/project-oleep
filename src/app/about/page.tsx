import "./about.css";

export default function About() {
  return (
    <section className="about-section bg-white text-gray-800 px-4 sm:px-8 md:px-12 py-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20">
        <h1 className="text-center font-bold mb-8" style={{ fontSize: '2rem' }}>Guiding Principles</h1>

        <div className="about-card">
          {[
            { title: "Environmental Justice", content: "Climate change and environmental degradation continue to disproportionately affect the most vulnerable populations. OLEEP strives to develop environmental leaders who are driven to bring about justice in their communities and around the world."},
            { title: "Science Education", content: "Our workshops provide a space for students to learn about the physical world around them. While building climate change literacy and fostering scientific curiosity, students develop empirical and quantitative reasoning skills as envisioned by the Met." },
            { title: "Mentorship", content: "Mentorship provides students with guidance, support, and friendship while they grow into young leaders and discover their next steps, particularly navigating the process of applying to and attending college, technical school, and/or the workforce ." },
            { title: "Community", content: "All students deserve the chance to learn and experiment in a safe and supportive environment where they feel valued for who they are as individuals. We believe in creating brave spaces where students can take chances, learn collaboratively, and support each other." },
            { title: "Leadership", content: "A world increasingly threatened by climate change and environmental degradation is a world that demands leadership from us all. Through open discussion and creativity, OLEEP offers a place for all students to determine their strengths, build their skills, and discover the way they lead." },
            { title: "Outdoors", content: "We believe that exploring the natural world provides endless learning opportunities and that strong community bonds can be developed through shared exposure to many different and unfamiliar scenarios."}
          ].map(({ title, content }) => (
            <div className="card-item" key={title}>
              <h2 className="font-bold text-lg text-center mb-2">{title}</h2>
              <p>{content}</p>
            </div>
          ))}
        </div>

        <div className="history-section mt-12">
          <h1 className="text-center font-bold mb-8" style={{ fontSize: '2rem' }}>History</h1>
          <p className="mb-4">
          Founded in 1997, OLEEP, originally the Outdoor Leadership and Experiential Education Program (now the Outdoor Leadership and Environmental Education Program), has gone through several iterations. This coming fall, we’ll be launching new and exciting programming options once again. Read more about our new structure below.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">OLEEP 1.0</h2>
          <p className="mb-4">
          All Met student mentees interested in joining OLEEP start here. Basically a more structured version of our traditional programming offerings, OLEEP 1.0 centers on weekly environmental science and justice workshops, taught by Brown students at the Met every Wednesday afternoon. Our curriculum focuses primarily on developing climate literacy among students, in a way that centers both science and justice and emphasizes experiential, hands-on learning.
          Students enrolled in OLEEP 1.0 are assigned to a mentoring pod, groups of around two Brown student mentors and two to four Met student mentees. These pods serve as smaller “families” within OLEEP and aim to provide students with additional, individualized support and mentorship.
          The final component of OLEEP 1.0 is field trips: throughout the year, participants will go on two overnight field trips and four day field trips, all with the goal of getting youth outside and exploring their surroundings.
          </p>
          <p className="mb-4">
            Students enrolled in OLEEP 1.0 are assigned to a mentoring pod, groups of around two Brown student
            mentors and two to four Met student mentees. These pods serve as smaller “families” within OLEEP and
            aim to provide students with additional, individualized support and mentorship. The final component
            of OLEEP 1.0 is field trips: throughout the year, participants will go on two overnight field trips
            and four day field trips, all with the goal of getting youth outside and exploring their surroundings.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">OLEEP 2.0</h2>
          <p>
          OLEEP 2.0 is designed for students who have already completed a year of OLEEP workshops. In this second level, small groups of mentees draw on the knowledge they developed the previous year to select and execute an environmental science or justice related project that benefits the broader community. Project selection, planning, and implementation happen throughout the year, with direct support from two to three mentors.
          </p>
          <p>OLEEP 2.0 participants also attend all the same field trips and overnights as OLEEP 1.0 participants.</p>
        </div>

      </div>
    </section>
  );
}
