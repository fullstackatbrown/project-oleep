import Image from 'next/image';
import TestImage from './image';

export default function TestCMS() {
    return (
      <div>
        <h1 className="text-2xl font-bold">Meet Our Mentors</h1>
        <p className="mt-2">Brown University students mentoring local high schoolers in environmental education.</p>

    {/* <Image
        src={imageUrl}
        alt="Cosmic CMS Image"
        width={400}  // Adjust width
        height={400} // Adjust height
        priority // Loads image faster
    /> */}
      <TestImage/>
      </div>
    );
  }