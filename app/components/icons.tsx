import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faEnvelope,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

type IconProps = {
  className?: string;
};

export function MailIcon({ className }: IconProps) {
  return <FontAwesomeIcon className={className} icon={faEnvelope} aria-hidden="true" />;
}

export function PhoneIcon({ className }: IconProps) {
  return <FontAwesomeIcon className={className} icon={faPhone} aria-hidden="true" />;
}

export function InstagramIcon({ className }: IconProps) {
  return <FontAwesomeIcon className={className} icon={faInstagram} aria-hidden="true" />;
}

export function LinkedinIcon({ className }: IconProps) {
  return <FontAwesomeIcon className={className} icon={faLinkedinIn} aria-hidden="true" />;
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return <FontAwesomeIcon className={className} icon={faArrowUpRightFromSquare} aria-hidden="true" />;
}

export function CloseIcon({ className }: IconProps) {
  return <FontAwesomeIcon className={className} icon={faXmark} aria-hidden="true" />;
}
