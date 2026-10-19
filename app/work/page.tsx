import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "../components/site-header";
import { WorkFilters } from "./work-filters";
import { ArrowUpRightIcon } from "../components/icons";

const youtubeThumbnail = (videoId: string) => `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

export const metadata: Metadata = {
  title: "Work | Video Editing, Color Grading & Thumbnail Design",
  description:
    "Browse By Aaditya, the video editing portfolio of Aaditya Dhital from Nepal, featuring editing, motion graphics, color grading, and thumbnail design projects.",
  alternates: {
    canonical: "/work",
  },
};

const projects = [
  {
    title: "Editing Skool Assignment · Long Form",
    category: "Editing Skool · Long Form",
    description: "A long-form editing assignment with a landscape video presentation.",
    image: youtubeThumbnail("yrIh10PiusM"),
    href: "https://youtu.be/yrIh10PiusM",
    videoId: "yrIh10PiusM",
    group: "Editing Skool Assignments" as const,
  },
  {
    title: "Editing Skool Assignment · Short Form",
    category: "Editing Skool · Short Form",
    description: "A vertical short-form editing assignment built for quick viewing.",
    image: youtubeThumbnail("CeoCKHxMIIg"),
    href: "https://www.youtube.com/shorts/CeoCKHxMIIg",
    videoId: "CeoCKHxMIIg",
    group: "Editing Skool Assignments" as const,
  },
  {
    title: "Why Your Brain Gets Bored",
    category: "Personal practice · Long Form",
    description: "A personal video exploring why the brain gets bored.",
    image: youtubeThumbnail("BNxrlVX93dE"),
    href: "https://www.youtube.com/watch?v=BNxrlVX93dE",
    videoId: "BNxrlVX93dE",
    group: "Personal Projects" as const,
  },
  {
    title: "Coca-Cola Style Animation",
    category: "Motion Graphics · Recreated work",
    description: "A motion graphics practice piece made in a Coca-Cola-inspired style.",
    image: youtubeThumbnail("jebYdFeSxSQ"),
    href: "https://youtu.be/jebYdFeSxSQ",
    videoId: "jebYdFeSxSQ",
    group: "Motion Graphics" as const,
  },
  {
    title: "Documentary Editing Study",
    category: "Motion Graphics · Recreated work",
    description: "A documentary editing study inspired by the visual language of Johnny Harris.",
    image: youtubeThumbnail("4RorN-CI4AE"),
    href: "https://youtu.be/4RorN-CI4AE",
    videoId: "4RorN-CI4AE",
    group: "Motion Graphics" as const,
  },
  {
    title: "Kalakar Video",
    category: "Kalakar · Before and after",
    description: "A before-and-after edit made for Kalakar, a Nepali creative platform.",
    image: youtubeThumbnail("mc7XWnuQk1E"),
    href: "https://youtube.com/shorts/mc7XWnuQk1E",
    videoId: "mc7XWnuQk1E",
    group: "Kalakar" as const,
  },
  {
    title: "Color Grading Challenge · Day 1",
    category: "Color Grading · 30 Days / 30 Grades",
    description: "Day 1 of an ongoing 30-day color grading challenge.",
    image: youtubeThumbnail("Eo97zaraGUM"),
    href: "https://youtu.be/Eo97zaraGUM",
    videoId: "Eo97zaraGUM",
    group: "Color Grading" as const,
  },
  {
    title: "Color Grading Challenge · Day 2",
    category: "Color Grading · 30 Days / 30 Grades",
    description: "Day 2 of an ongoing 30-day color grading challenge.",
    image: youtubeThumbnail("vHaNXfT4fsM"),
    href: "https://youtu.be/vHaNXfT4fsM",
    videoId: "vHaNXfT4fsM",
    group: "Color Grading" as const,
  },
  {
    title: "Why You Are Always Bored",
    category: "Thumbnail design · Personal project",
    description: "A thumbnail design piece for a personal video concept.",
    image: "/portfolio-assets/images/thumbnails/brain-bored.png",
    group: "Thumbnail Design" as const,
  },
  {
    title: "How I Fixed My Sleep Schedule",
    category: "Thumbnail design · Personal project",
    description: "A thumbnail design piece for a personal seven-day experiment.",
    image: "/portfolio-assets/images/thumbnails/sleep-schedule.jpg",
    group: "Thumbnail Design" as const,
  },
  {
    title: "The Morning Output Rule",
    category: "Thumbnail design · Client-style practice",
    description: "A thumbnail design piece for a morning productivity video.",
    image: "/portfolio-assets/images/thumbnails/morning-output.jpg",
    group: "Thumbnail Design" as const,
  },
  {
    title: "It’s Going to Be Better",
    category: "Thumbnail design · Client-style practice",
    description: "A thumbnail design piece for a personal-story video.",
    image: "/portfolio-assets/images/thumbnails/better.jpg",
    group: "Thumbnail Design" as const,
  },
  {
    title: "Pagal Mahakavi",
    category: "Thumbnail design · Nepali content",
    description: "A thumbnail design piece for Nepali creative content.",
    image: "/portfolio-assets/images/thumbnails/pagal-mahakavi.png",
    group: "Thumbnail Design" as const,
  },
  {
    title: "Who Killed Mahendra",
    category: "Thumbnail design · Documentary study",
    description: "A thumbnail design piece for a documentary-style video.",
    image: "/portfolio-assets/images/thumbnails/mahendra.png",
    group: "Thumbnail Design" as const,
  },
  {
    title: "A Feeling Inside",
    category: "Thumbnail design · Visual story",
    description: "A thumbnail design piece for a mood-led visual story.",
    image: "/portfolio-assets/images/thumbnails/feeling-inside.jpg",
    group: "Thumbnail Design" as const,
  },
];

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main className="work-page site-container">
        <section className="work-intro">
          <p className="eyebrow">The archive</p>
          <h1 className="heading-1">The work<br /><em>so far.</em></h1>
          <p className="body-large">
            Video projects, color practice, and thumbnail design, kept separate so every piece is clear.
          </p>
        </section>

        <WorkFilters projects={projects} />

        <div className="work-actions">
          <Link className="button-secondary" href="/">Back to Home</Link>
          <a className="button-primary" href="mailto:byaaditya12@gmail.com">Discuss an edit <ArrowUpRightIcon /></a>
        </div>
      </main>
    </>
  );
}
