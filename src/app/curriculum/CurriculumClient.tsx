import Image from "next/image";

type Workshop = {
    id: string;
    title: string;
    date: string;
    duration: string;
    pdfUrl: string;
};

export default function CurriculumClient({ workshops }: { workshops: Workshop[] }) {

    return (
        <div className="curriculum-wrapper">
            <div className="info-box">
                <p>This page serves as a comprehensive resource for all our weekly environmental workshops. Here, you will find PDF files containing valuable materials, presentations, and guides from each session.</p>
                <p>We update this page regularly to ensure you have access to the latest information, insights, and discussions from our workshops.</p>
            </div>

            <div className="header-row">
               <Image
                     src="/calendar.png"
                     alt="Workshop Icon"
                     width={70}          // adjust as needed
                     height={70}
                     className="header-icon"
                     />
                <h1 className="section-header">Workshop <br></br>  Program</h1>
               </div>

            <div className="events-list">
                {workshops.map((ws) => {
                    const [day, weekday] = ws.date.includes(" ") ? ws.date.split(" ") : [ws.date, ""];
                    return (
                        <div key={ws.id} className="event">
                            <div className="date-box">
                                <p>{day}</p>
                                <p>{weekday}</p>
                            </div>
                            <h3 className="event-title">{ws.title}</h3>
                            <div className="right-side">
                                <div className="duration">
                                    <img src="/clock.png" alt="clock" />
                                    <span>{ws.duration}</span>
                                </div>
                                <a href={ws.pdfUrl} target="_blank" rel="noopener noreferrer" className="download-button">
                                    <img src="/download.png" alt="download" />
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>

          <style jsx>{`
            
                .info-box {
                    background-color: #EAFEDA;
                    padding: 16px;
                    border: 1px solid #000;
                    text-align: center;
                    font-size: 14px;
                    margin-bottom: 30px;
                    font-family: Inter;
                    max-width: 900px;
                    margin-left: auto; 
                    margin-right: auto;     
                }
                .section-header {
                    text-align: center;
                    font-family: Inter;
                    font-weight: 600;
                    margin-bottom: 20px;
                    line-height: 1.0;
                    text-align: left;
                    font-size: 30px;
                }
         
                .events-list {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    max-width: 800px;
                    margin: auto;
                }
                .event {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  border: 1px solid #ccc;
                  border-radius: 12px;
                  padding: 12px 16px;
                  background-color: white;
                  font-family: Quicksand;
                  gap: 20px;
               }

               .date-box {
                  background-color: #4CAF50;
                  color: white;
                  width: 50px;
                  height: 50px;
                  border-radius: 10px;
                  text-align: center;
                  font-weight: bold;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  flex-shrink: 0;
               }

               .date-box p {
                  margin: 0;
                  line-height: 1.2;
                  font-size: 14px;
               }
                .event-title {
                    margin: 0 16px;
                    flex-grow: 1;
                    font-size: 1rem;
                    font-weight: 600;
                    font-family: Inter;
                }
                
                  .right-side {
                     display: flex;
                     align-items: center;
                     gap: 12px;
                     border-left: 1px solid #ccc;     
                     padding-left: 20px;              
                  }

                  .duration {
                     display: flex;
                     align-items: center;
                     gap: 6px;
                     font-size: 14px;
                  }

                  .duration img {
                     height: 18px;
                     width: 18px;
                  }

                  .download-button img {
                     width: 24px;
                     height: 24px;
                  }
                .header-row {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 12px;
                  margin-bottom: 20px;
               }

               .header-icon {
                  width: 40px;
                  height: 40px;
               }

               .section-header {
                  font-family: Quicksand;
                  margin: 0;
                  font-size: 2rem;
               }    
            `}</style>
        </div>
    );
}
