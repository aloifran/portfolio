import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopied = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="flex flex-col gap-2" id="contact">
            <h2 className="text-3xl font-semibold">Get in touch</h2>

            <p>
                My email is{" "}
                <CopyToClipboard
                    text="franad89@gmail.com"
                    onCopy={handleCopied}
                >
                    <span className="link font-semibold">
                        franad89@gmail.com
                    </span>
                </CopyToClipboard>
                <span
                    className={`${
                        copied ? "opacity-100" : "opacity-0"
                    }  transform text-blue-500 transition-all duration-500 ease-in-out`}
                >
                    {" "}
                    copied!
                </span>
            </p>

            <div className="flex gap-8 pt-8">
                <a href="https://github.com/aloifran" target="_blank">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                    >
                        <path d="M22.4 6c-1.1-1.8-2.5-3.3-4.4-4.4C16.2.5 14.2 0 12 0S7.8.5 6 1.6C4.1 2.7 2.7 4.1 1.6 6 .5 7.8 0 9.8 0 12c0 2.6.8 5 2.3 7.1 1.5 2.1 3.5 3.5 5.9 4.3.3.1.5 0 .6-.1.2-.1.2-.3.2-.5V22v-1.4l-.4.1c-.2 0-.5.1-.9.1-.3 0-.7 0-1.1-.1-.4-.1-.7-.2-1-.5-.3-.2-.6-.6-.7-1l-.2-.4c-.1-.2-.3-.5-.5-.8-.2-.3-.5-.5-.7-.6l-.1-.1-.2-.2c-.1-.1-.1-.1-.1-.2s0-.1.1-.2c.1 0 .2-.1.5-.1H4c.2 0 .5.2.8.4.3.2.6.5.8.8.2.4.5.8.9 1 .3.2.7.3 1 .3.3 0 .6 0 .9-.1.2.1.4 0 .6-.1.1-.7.3-1.2.8-1.6-.6-.1-1.1-.2-1.6-.3-.5-.1-1-.3-1.5-.6s-.9-.6-1.3-1c-.3-.4-.6-1-.8-1.6-.2-.7-.3-1.5-.3-2.3 0-1.3.4-2.3 1.2-3.2-.3-1.1-.3-2.2.2-3.3.3-.1.7-.1 1.3.2.6.2 1 .4 1.3.6.3.1.5.3.7.4 1-.3 2-.4 3-.4s2 .1 3 .4l.6-.4c.4-.2.9-.5 1.4-.7.6-.2 1-.3 1.3-.2.5 1.2.5 2.2.1 3.2.8.9 1.2 2 1.2 3.2 0 .9-.1 1.7-.3 2.4-.2.7-.5 1.2-.8 1.6-.3.4-.8.8-1.3 1-.5.3-1 .5-1.5.6-.5.1-1 .2-1.6.3.5.5.8 1.2.8 2.2v3.3c0 .2.1.3.2.5.1.1.3.2.6.1 2.4-.8 4.4-2.2 5.9-4.3 1.6-2 2.4-4.4 2.4-7 0-2.2-.5-4.2-1.6-6z"></path>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/fjaloi" target="_blank">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                    >
                        <path d="M22.2 0H1.8C.8 0 0 .8 0 1.8v20.5c0 1 .8 1.8 1.8 1.8h20.5c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0zm-15 20.4H3.5V9h3.6v11.4zm-1.9-13c-1.1 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1 2.1.9 2.1 2.1-.9 2.1-2.1 2.1zm15.2 13.1h-3.6v-6.3c0-1.8-.8-2.4-1.8-2.4-1.1 0-2.1.8-2.1 2.5v6.2H9.3V9h3.5v1.6c.3-.7 1.6-1.9 3.4-1.9 2 0 4.2 1.2 4.2 4.7v7.1z"></path>
                    </svg>
                </a>
                <a href="mailto:franad89@gmail.com">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fillRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="2"
                        clipRule="evenodd"
                        viewBox="0 0 32 32"
                    >
                        <path d="M31 10a5.004 5.004 0 00-1.464-3.536A5.004 5.004 0 0026 5H6a5.004 5.004 0 00-3.536 1.464A5.004 5.004 0 001 10v12c0 1.326.527 2.598 1.464 3.536A5.004 5.004 0 006 27h20a5.004 5.004 0 003.536-1.464A5.004 5.004 0 0031 22V10zM4.444 9.779l8.372 6.894a5 5 0 006.365-.007l8.413-6.959a1 1 0 00-1.275-1.541l-8.412 6.959a3.001 3.001 0 01-3.82.004L5.715 8.235a1 1 0 10-1.271 1.544z"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
}
