import Image from "next/image";
import SvgIcon from "./svg/SvgIcon";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  repoUrl: string;
  siteUrl?: string;
  techStack?: string[];
  inDevelopment?: boolean;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  repoUrl,
  siteUrl,
  techStack,
  inDevelopment,
}: ProjectCardProps) {
  return (
    <div className="flex w-4/5 flex-col gap-4">
      <div>
        <a href={siteUrl || repoUrl}>
          <Image
            src={imageSrc}
            alt="Project"
            width={400}
            height={200}
            priority
            className="rounded-xl shadow-lg"
          />
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-l font-semibold">{title}</h2>
            {inDevelopment && (
              <span className="text-md inline text-zinc-400">Under development</span>
            )}
          </div>
          <div className="flex gap-4 pr-1">
            <a href={repoUrl} target="_blank">
              <SvgIcon size="sm" icon="github" />
            </a>
            {siteUrl ? (
              <a href={siteUrl}>
                <SvgIcon size="sm" icon="externalSite" />
              </a>
            ) : null}
          </div>
        </div>

        <p>{description}</p>

        {/* Tags */}
        <div className="flex gap-4">
          <div className="flex flex-wrap gap-2">
            {techStack?.map((tag, index) => {
              return (
                <div
                  key={index}
                  className="inline-flex cursor-pointer items-center rounded-full bg-blue-200 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-indigo-200 dark:bg-blue-500/20 dark:text-slate-300 dark:hover:bg-indigo-500/20"
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
