// @ts-nocheck
import { createBucketClient } from "@cosmicjs/sdk";
import { format, formatDistanceToNow, parseISO } from 'date-fns';
import Image from "next/image";

export default async function Curriculum() {
  const cosmic = createBucketClient({
    bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG || "",
    readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY || "",
  });

  const { objects: curricula } = await cosmic.objects
    .find({ type: 'curricula' })
    .limit(10)
    .props('slug,title,metadata,type')
    .depth(1);

  console.log('Curricula objects:', JSON.stringify(curricula, null, 2));


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
          <div className="workshop-header">
            <Image height={32} width={32} src="/curriculum-title.svg" alt="Curriculum Icon" className="workshop-icon" />
            <h1>Workshop Program</h1>
          </div>
          {curricula.map((item) => {
            const dateObj = item.metadata?.date ? parseISO(item.metadata.date) : null;
            const day = dateObj ? format(dateObj, 'd') : '??';
            const weekday = dateObj ? format(dateObj, 'EEE') : '??';

            return (
              <div className="event" key={item.slug}>
                <div className="event-left">
                  <div className="date">
                    <p>{day}</p>
                    <p>{weekday}</p>
                  </div>
                  <h3>{item.title}</h3>
                </div>
                <div className="event-right">
                  <div className="duration">
                    <Image height={16} width={16} src="/duration.svg" alt="duration logo" className="icon" />
                    <p>{dateObj ? formatDistanceToNow(dateObj) : 'Unknown'}</p>
                  </div>
                  <a href={item.metadata?.document?.url} target="_blank" rel="noopener noreferrer">
                    <button className="download-button" aria-label="Download PDF">
                      <Image height={16} width={16} src="/download.svg" className="download-icon" alt="Download" />
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
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
      .workshop-header {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-bottom: 20px;
      }
      .workshop-icon {
        width: 32px; /* or however large you'd like it */
        height: 32px;
      }
      .workshop-program {
        width: 100%;
        max-width: 800px;
      }

      .workshop-program h1 {
        text-align: center;
        // width: 100%;
        // margin-bottom: 20px;
        font-family: Quicksand;
        font-weight: bold;
      }

      .event {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid black;
        padding: 8px;
        width: 100%;
        text-align: left;
        margin-bottom: 15px;
        border-radius: 10px;
        gap: 20px;
        font-family: Quicksand;
      }

      .event-left {
        display: flex;
        align-items: center;
        gap: 20px;
        flex-grow: 1;
      }

      .event-right {
      display: flex;
      align-items: center;
      gap: 20px;
      }

      .date {
        background-color: #4CAF50;
        color: white;
        padding: 10px;
        border-radius: 8px;
        text-align: center;
        width: 60px;         /* fixed width */
        height: 48px;        /* fixed height */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
      .icon {
        width: 16px;
        height: 16px;
        filter: brightness(0) saturate(100%) invert(59%) sepia(17%) saturate(1210%) hue-rotate(77deg) brightness(97%) contrast(90%);
        transition: transform 0.2s ease;
      }

      .download-icon {
        width: 28px;
        height: 28px;
        transition: transform 0.2s ease;
      }

      .duration {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        font-size: 14px;
        position: relative;
        padding: 0 10px;
      }

      .duration::before,
      .duration::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 1px;
        background-color: #ccc; /* Light gray or change to match your theme */
      }

      .duration::before {
        left: 0;
      }

      .duration::after {
        right: 0;
      }

      .download-button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 12px;
      }

      .download-button:hover .icon {
        transform: scale(1.1);
      }
    `}</style>
    </div>
  );
}