"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRightIcon, CloseIcon } from "./icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  image?: string;
  href?: string;
  videoId?: string;
  priority?: boolean;
  mediaClassName?: string;
  showDescription?: boolean;
  showCategory?: boolean;
};

function VideoThumbnail({ src, alt, priority }: { src: string; alt: string; priority: boolean }) {
  const [thumbnail, setThumbnail] = useState(src);

  return (
    <Image
      src={thumbnail}
      alt={alt}
      width={1200}
      height={750}
      priority={priority}
      onError={() => {
        if (thumbnail.includes("maxresdefault")) {
          setThumbnail(thumbnail.replace("maxresdefault", "hqdefault"));
        }
      }}
    />
  );
}

export function ProjectCard({
  title,
  category,
  description,
  image,
  href,
  videoId,
  priority = false,
  mediaClassName = "",
  showDescription = true,
  showCategory = true,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const isVideo = Boolean(videoId);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const trigger = triggerRef.current;
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
      trigger?.focus();
    };
  }, [isOpen]);

  const media = (
    <div className={`project-card__media ${mediaClassName}`}>
      {image ? (
        image.includes("maxresdefault") ? (
          <VideoThumbnail src={image} alt={`${title} project preview`} priority={priority} />
        ) : (
          <Image src={image} alt={`${title} project preview`} width={1200} height={750} priority={priority} />
        )
      ) : (
        <div className="project-card__placeholder">
          <span>Video preview<br />coming soon</span>
        </div>
      )}
      {isVideo ? (
        <span className="project-card__play" aria-hidden="true"><FontAwesomeIcon icon={faPlay} /></span>
      ) : href ? (
        <span className="project-card__arrow" aria-hidden="true"><ArrowUpRightIcon /></span>
      ) : null}
    </div>
  );

  const content = (
    <>
      {media}
      <div className="project-card__info">
        <div>
          {showCategory ? <p className="metadata">{category}</p> : null}
          <h3>{title}</h3>
        </div>
        {showDescription ? <p className="project-card__description">{description}</p> : null}
      </div>
    </>
  );

  return (
    <>
      {isVideo ? (
        <button ref={triggerRef} className="project-card project-card--button" type="button" onClick={() => setIsOpen(true)} aria-label={`Play ${title}`}>
          {content}
        </button>
      ) : href ? (
        <a className="project-card" href={href} target="_blank" rel="noreferrer">{content}</a>
      ) : (
        <article className="project-card">{content}</article>
      )}
      {isOpen && videoId ? (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label={`${title} video`}>
          <button className="video-modal__backdrop" type="button" aria-label="Close video" onClick={() => setIsOpen(false)} />
          <div className="video-modal__content">
            <button ref={closeRef} className="video-modal__close" type="button" aria-label="Close video" onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </button>
            <div className="video-modal__frame">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                title={title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
