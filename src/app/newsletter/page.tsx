import NewsletterClient from "./NewsletterClient";
import { RecentNewsletters } from "./NewsletterClient";
import { fetchNewsletters } from "@/lib/fetchNewsletters";


/* The newsletter*/

export default async function Newsletter() {
  const newsletters = await fetchNewsletters();
  return <NewsletterClient newsletters={newsletters} />;
}

// /* Recent newsletters for homepage */
// export async function RecentNewsletter() {
//   const newsletters = await fetchNewsletters();
//   return <RecentNewsletters newsletters={newsletters} />;
// }
