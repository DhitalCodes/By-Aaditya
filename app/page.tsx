import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "./components/project-card";
import { SiteHeader } from "./components/site-header";
import { ArrowUpRightIcon, InstagramIcon, MailIcon, PhoneIcon } from "./components/icons";
import { KathmanduTime } from "./components/kathmandu-time";

const youtubeThumbnail = (videoId: string) => `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

const selectedWork = [
  {
    title: "I Tried Fixing My Sleep Schedule in 7 Days",
    category: "Personal practice · Long Form",
    description: "A seven-day experiment about building a better sleep routine.",
    image: youtubeThumbnail("QNMxsbK3Vsw"),
    href: "https://youtu.be/QNMxsbK3Vsw",
    videoId: "QNMxsbK3Vsw",
    mediaClassName: "project-card__media--video",
  },
  {
    title: "Editing Skool Assignment 1",
    category: "Editing Skool · Long Form",
    description: "A long-form editing assignment with a landscape video presentation.",
    image: youtubeThumbnail("yrIh10PiusM"),
    href: "https://youtu.be/yrIh10PiusM",
    videoId: "yrIh10PiusM",
    mediaClassName: "project-card__media--video",
  },
  {
    title: "Color Grading Challenge · Day 02",
    category: "Color Grading · 30 Days / 30 Grades",
    description: "Day 02 of an ongoing 30-day color grading challenge.",
    image: youtubeThumbnail("vHaNXfT4fsM"),
    href: "https://youtu.be/vHaNXfT4fsM",
    videoId: "vHaNXfT4fsM",
    mediaClassName: "project-card__media--video",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader homepage />
      <main>
        <section className="home-hero home-hero--reference site-container">
          <div className="home-hero__copy" data-reveal>
            <p className="eyebrow">Editor &amp; aspiring colorist · Nepal</p>
            <h1 className="heading-1">
              <span className="hero-heading-line">I make the cut</span>
              <em className="hero-handwritten">feel right.</em>
            </h1>
            <p className="body-large reading-width">
              I&apos;m Aaditya Dhital, a video editor shaping honest stories with rhythm,
              intention, and a growing eye for color.
            </p>
            <div className="home-hero__actions">
              <Link className="button-primary" href="/work">Explore my work <ArrowUpRightIcon /></Link>
              <span className="home-hero__credential">Brand ambassador<br /><strong>Kalakar</strong></span>
            </div>
          </div>
          <div className="home-hero__portrait" data-reveal="delay-1">
            <Image
              src="/portfolio-assets/images/profile/profile-pic.png"
              alt="Aaditya Dhital, editor and aspiring colorist"
              width={900}
              height={1100}
              priority
            />
            <span className="home-hero__location">Kathmandu, Nepal</span>
          </div>
        </section>

        <section className="home-work section-space site-container" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A small selection</p>
              <h2 className="heading-2">Selected work</h2>
            </div>
            <Link className="text-link" href="/work">
              <span>See all work</span>
              <span className="text-link__arrow" aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="home-work__grid">
            {selectedWork.map((project, index) => (
              <div key={project.title} className={index === 1 ? "project-card--offset" : ""} data-reveal={`delay-${index}`}>
                <ProjectCard {...project} showDescription={false} />
              </div>
            ))}
          </div>
        </section>

        <section className="credibility" id="about">
          <div className="site-container credibility__grid">
            <div className="credibility__intro">
              <p className="eyebrow">About the practice</p>
              <h2 className="heading-2">Still learning.<br /><em>Always making.</em></h2>
              <p className="body-large">
                I&apos;m a brand ambassador for Kalakar, building my practice across editing,
                motion, and color. Every project is a chance to make the story clearer and
                more memorable.
              </p>
              <div className="credibility__tags" aria-label="Areas of practice">
                <span>Editing</span>
                <span>Motion</span>
                <span>Color</span>
              </div>
            </div>
            <div className="certificate-card">
              <div className="certificate-card__header">
                <div>
                  <p className="eyebrow">Verified learning</p>
                  <h3>Video Editing Mastery</h3>
                </div>
                <span className="certificate-card__source">Editing Skool</span>
              </div>
              <div className="certificate-card__viewer">
                <iframe
                  src="/portfolio-assets/certificates/editing-skool-certificate.pdf#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0"
                  title="Aaditya Dhital's Video Editing Mastery certificate from Editing Skool"
                  loading="lazy"
                  scrolling="no"
                />
              </div>
              <a className="certificate-link" href="/portfolio-assets/certificates/editing-skool-certificate.pdf" target="_blank" rel="noreferrer">
                <span>Open certificate in a new tab</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="home-contact site-container" id="contact">
          <div className="home-contact__intro">
            <h2 className="home-contact__title">Contact</h2>
            <p className="home-contact__copy">
              Got a project, question, or just want to connect? Reach out. I&apos;d love to hear from you.
            </p>
            <p className="home-contact__location">Kathmandu, Nepal</p>
            <a className="home-contact__email" href="mailto:byaaditya12@gmail.com">
              <MailIcon />
              <span>byaaditya12@gmail.com</span>
              <ArrowUpRightIcon />
            </a>
          </div>
          <div className="home-contact__content">
            <h2 className="home-contact__headline">Let&apos;s grab a coffee and jump on a <em>conversation.</em></h2>
            <p className="home-contact__prompt">Have an edit in mind? <a href="mailto:byaaditya12@gmail.com">Let&apos;s talk.</a></p>
            <div className="home-contact__details">
              <a href="tel:+9779860901451"><PhoneIcon /><span>+977 986-090-1451</span></a>
              <a href="https://www.instagram.com/byaaditya.mov/" target="_blank" rel="noreferrer"><InstagramIcon /><span>Instagram</span><ArrowUpRightIcon /></a>
              <KathmanduTime />
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="site-container">
          <span>© 2026 by Aaditya</span>
          <span>Aaditya Dhital · Nepal</span>
        </div>
      </footer>
    </>
  );
}
