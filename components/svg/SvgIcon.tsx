import type { SvgIconProps } from "@/types";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";
import EmailIcon from "./EmailIcon";
import ExternalSiteIcon from "./ExternalSiteIcon";
import CvIcon from "./CvIcon";

// Renders the icon component according to theme
export default function SvgIcon({ size, icon }: SvgIconProps) {
  const setIcon = () => {
    switch (icon) {
      case "email":
        return <EmailIcon size={size} />;
      case "externalSite":
        return <ExternalSiteIcon size={size} />;
      case "github":
        return <GithubIcon size={size} />;
      case "linkedIn":
        return <LinkedinIcon size={size} />;
      case "cv":
        return <CvIcon size={size} />;
    }
  };
  return <>{setIcon()}</>;
}
