import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    imageSrc: string;
    repoUrl: string;
    siteUrl?: string;
    techStack?: string[];
}

export default function ProjectCard({
    title,
    description,
    imageSrc,
    repoUrl,
    siteUrl,
    techStack,
}: ProjectCardProps) {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <a href={repoUrl}>
                    <Image
                        src={imageSrc}
                        alt="Project"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-lg"
                    />
                </a>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <div className="flex gap-4 pr-1">
                        {/* Repo */}
                        <a href={repoUrl} target="_blank">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22.4 6c-1.1-1.8-2.5-3.3-4.4-4.4C16.2.5 14.2 0 12 0S7.8.5 6 1.6C4.1 2.7 2.7 4.1 1.6 6 .5 7.8 0 9.8 0 12c0 2.6.8 5 2.3 7.1 1.5 2.1 3.5 3.5 5.9 4.3.3.1.5 0 .6-.1.2-.1.2-.3.2-.5V22v-1.4l-.4.1c-.2 0-.5.1-.9.1-.3 0-.7 0-1.1-.1-.4-.1-.7-.2-1-.5-.3-.2-.6-.6-.7-1l-.2-.4c-.1-.2-.3-.5-.5-.8-.2-.3-.5-.5-.7-.6l-.1-.1-.2-.2c-.1-.1-.1-.1-.1-.2s0-.1.1-.2c.1 0 .2-.1.5-.1H4c.2 0 .5.2.8.4.3.2.6.5.8.8.2.4.5.8.9 1 .3.2.7.3 1 .3.3 0 .6 0 .9-.1.2.1.4 0 .6-.1.1-.7.3-1.2.8-1.6-.6-.1-1.1-.2-1.6-.3-.5-.1-1-.3-1.5-.6s-.9-.6-1.3-1c-.3-.4-.6-1-.8-1.6-.2-.7-.3-1.5-.3-2.3 0-1.3.4-2.3 1.2-3.2-.3-1.1-.3-2.2.2-3.3.3-.1.7-.1 1.3.2.6.2 1 .4 1.3.6.3.1.5.3.7.4 1-.3 2-.4 3-.4s2 .1 3 .4l.6-.4c.4-.2.9-.5 1.4-.7.6-.2 1-.3 1.3-.2.5 1.2.5 2.2.1 3.2.8.9 1.2 2 1.2 3.2 0 .9-.1 1.7-.3 2.4-.2.7-.5 1.2-.8 1.6-.3.4-.8.8-1.3 1-.5.3-1 .5-1.5.6-.5.1-1 .2-1.6.3.5.5.8 1.2.8 2.2v3.3c0 .2.1.3.2.5.1.1.3.2.6.1 2.4-.8 4.4-2.2 5.9-4.3 1.6-2 2.4-4.4 2.4-7 0-2.2-.5-4.2-1.6-6z"></path>
                            </svg>
                        </a>
                        {/* Live site */}
                        {siteUrl ? (
                            <a href={siteUrl}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 512 512"
                                >
                                    <g
                                        fill="none"
                                        fillRule="evenodd"
                                        stroke="none"
                                        strokeWidth="1"
                                    >
                                        <g
                                            fill="#000"
                                            transform="translate(85.333 64)"
                                        >
                                            <path d="M128 64v42.666H42.667V320H256v-85.334h42.666v128H0V64h128zM362.667 0v170.667H320V72.835L143.085 249.752l-30.17-30.17L289.83 42.666H192V0h170.667z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        ) : null}
                    </div>
                </div>

                <p>{description}</p>

                {/* Tech stack */}
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
