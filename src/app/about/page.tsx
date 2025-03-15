import "./about.css"

export default function about() {
    return (
      <div className="p-6 bg-white text-gray-800">
        <h1 className="text-xl font-bold mb-4 text-center">Guiding Principles</h1>
        
          <div className="about-card">
            <div className= "card-item">
            <h2 className="font-semibold">Environmental Justice</h2>
            <p>
              Climate change and environmental degradation continue to disproportionately affect the most 
              vulnerable populations. OLEEP strives to develop environmental leaders who are driven to bring 
              about justice in their communities and around the world.
            </p>
            </div>
            
            <div className= "card-item">
            <h2 className="font-semibold">Science Education</h2>
            <p>
              Our workshops provide a space for students to learn about the physical world around them. 
              While building climate change literacy and fostering scientific curiosity, students develop empirical 
              and quantitative reasoning skills as envisioned by the Met.
            </p>
            </div>

            <div className= "card-item">
            <h2 className="font-semibold">Mentorship</h2>
            <p>
              Mentorship provides students with guidance, support, and friendship while they grow into young 
              leaders and discover their next steps, particularly navigating the process of applying to and 
              attending college, technical school, and/or the workforce.
            </p>
            </div>

            <div className= "card-item">
            <h2 className="font-semibold">Community</h2>
            <p>
              All students deserve the chance to learn and experiment in a safe and supportive environment where 
              they feel valued for who they are as individuals. We believe in creating brave spaces where students 
              can take chances, learn collaboratively, and support each other.
            </p>
            </div>

            <div className= "card-item">
            <h2 className="font-semibold">Leadership</h2>
            <p>
              A world increasingly threatened by climate change and environmental degradation is a world that 
              demands leadership from us all. There's no one leadership style. Through open discussion and 
              creativity, OLEEP offers a place for all students to determine their strengths, build their skills, 
              and discover the way they lead.
            </p>
            </div>

            <div className= "card-item">
            <h2 className="font-semibold">Outdoors</h2>
            <p>
              We believe that exploring the natural world provides endless learning opportunities and that 
              strong community bonds can be developed through shared exposure to many different and unfamiliar 
              scenarios.
            </p>
            </div>
            </div>
          
     




        <h1 className="text-xl font-bold mb-4 text-center">History</h1>
  
        <p className="mb-6 text-center">
          Founded in 1997, OLEEP, originally the Outdoor Leadership and Experiential Education Program (now the Outdoor Leadership and Environmental Education Program), has gone through several iterations. This coming fall, we’ll be launching new and exciting programming options once again. Read more about our new structure below.
        </p>
  
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3 text-center">OLEEP 1.0</h2>
          <p className="mb-4 text-justify">
            All Met student mentees interested in joining OLEEP start here. Basically a more structured version of our traditional programming offerings, OLEEP 1.0 centers on weekly environmental science and justice workshops, taught by Brown students at the Met every Wednesday afternoon. Our curriculum focuses primarily on developing climate literacy among students, in a way that centers both science and justice and emphasizes experiential, hands-on learning.
          </p>
          <p className="mb-4 text-justify">
            Students enrolled in OLEEP 1.0 are assigned to a mentoring pod, groups of around two Brown student mentors and two to four Met student mentees. These pods serve as smaller “families” within OLEEP and aim to provide students with additional, individualized support and mentorship.
          </p>
          <p className="text-justify">
            The final component of OLEEP 1.0 is field trips: throughout the year, participants will go on two overnight field trips and four day field trips, all with the goal of getting youth outside and exploring their surroundings.
          </p>
        </section>
  
        <section>
          <h2 className="text-lg font-semibold mb-3 text-center">OLEEP 2.0</h2>
          <p className="mb-4 text-justify">
            OLEEP 2.0 is designed for students who have already completed a year of OLEEP workshops. In this second level, small groups of mentees draw on the knowledge they developed the previous year to select and execute an environmental science or justice-related project that benefits the broader community. Project selection, planning, and implementation happen throughout the year, with direct support from two to three mentors.
          </p>
          <p className="text-justify">
            OLEEP 2.0 participants also attend all the same field trips and overnights as OLEEP 1.0 participants.
          </p>
        </section>
      </div>
    );
  }
  