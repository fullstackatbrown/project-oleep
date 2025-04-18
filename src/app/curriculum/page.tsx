export default function Curriculum() {
  return (
    <div className="parent">
      <div className="content-wrapper">
        <div className="header">
            <div className="info-box">
              <p>This page serves as a comprehensive resource for all our weekly environmental workshops. Here, you will find PDF files containing valuable materials, presentations, and guides from each session.</p>
              <p>We update this page regularly to ensure you have access to the latest information, insights, and discussions from our workshops.</p>
            </div>
        </div>
        <div className="workshop-program">
          <h1>Workshop Program</h1>
            <div className="event">
              <div className="date">
                <p>23</p>
                <p>Fri</p>
              </div>
              <h3>Sustainable Living & Zero-Waste Practices</h3>
            </div>
            <div className="event">
              <div className="date">
                <p>23</p>
                <p>Fri</p>
              </div>
              <h3>Sustainable Living & Zero-Waste Practices</h3>
            </div>
            <div className="event">
              <div className="date">
                <p>23</p>
                <p>Fri</p>
              </div>
              <h3>Sustainable Living & Zero-Waste Practices</h3>
            </div>
            <div className="event">
              <div className="date">
                <p>23</p>
                <p>Fri</p>
              </div>
              <h3>Sustainable Living & Zero-Waste Practices</h3>
            </div>
            <div className="event">
              <div className="date">
                <p>23</p>
                <p>Fri</p>
              </div>
              <h3>Sustainable Living & Zero-Waste Practices</h3>
            </div>
        </div>
      </div>

    <style>{`
      body, html {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      }

      .parent {
        display: flex;
        justify-content: center;
        width: 100%;
      }

      .content-wrapper {
        width: 100%;
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
      }

      .info-box {
        border: 1px solid black;
        padding: 10px;
        max-width: 1000px;
        width: 100%;
        background-color: #EAFEDA;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        text-align: center;
        margin-bottom: 20px;
      }

      .info-box p {
        margin: 2px 0;
        line-height: 1.5;
        font-size: 14px;
      }

      .workshop-program {
        width: 100%;
        max-width: 800px;
      }

      .workshop-program h1 {
        text-align: center;
        width: 100%;
        margin-bottom: 20px;
        font-family: Quicksand;
      }

      .event {
        display: flex;
        align-items: center;
        border: 1px solid black;
        padding: 8px;
        width: 100%;
        text-align: left;
        margin-bottom: 15px;
        border-radius: 10px;
        gap: 20px;
        font-family: Quicksand;
      }

      .date {
        background-color: #4CAF50;
        color: white;
        padding: 10px 15px;
        border-radius: 8px;
        text-align: center;
        min-width: 25px;
        flex-shrink: 0;
      }

      .date p {
        margin: 0;
        line-height: 1;
      }

      .date p:first-child {
        font-size: 1rem;
        font-weight: bold;
      }

      .event h3 {
        margin: 0;
        flex-grow: 1;
      }
    `}</style>
    </div>
  );
}