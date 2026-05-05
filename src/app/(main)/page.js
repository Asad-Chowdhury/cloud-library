import Banner from "../components/home/Banner";
import HomeSections from "../components/home/HomeSections";
import Marquee from "../components/home/Marquee";

export const metadata = {
  title: "Home",
  description:
    "Find your next read from Cloud Library's curated digital catalog of story, tech, and science books.",
  openGraph: {
    title: "Cloud Library | Find Your Next Read",
    description:
      "Discover featured books, new arrivals, and a smooth digital borrowing journey.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <Banner />
      <Marquee />
      <HomeSections />
    </>
  );
}
