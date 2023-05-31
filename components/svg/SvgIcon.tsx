import type { SvgIconProps } from "@/types";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";
import EmailIcon from "./EmailIcon";
import ExternalSiteIcon from "./ExternalSiteIcon";

// Takes an icon name and renders the icon component
export default function SvgIcon({ size, icon }: SvgIconProps) {
    const setIcon = () => {
        switch (icon) {
            case "github":
                return <GithubIcon size={size} />;
            case "linkedIn":
                return <LinkedinIcon size={size} />;
            case "email":
                return <EmailIcon size={size} />;
            case "externalSite":
                return <ExternalSiteIcon size={size} />;
        }
    };
    return <>{setIcon()}</>;
}
