import SvgIcon from "./svg/SvgIcon";
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

            <div className="flex space-x-6 pt-2">
                <a href="https://www.linkedin.com/in/fjaloi" target="_blank">
                    <SvgIcon size="md" icon="linkedIn" />
                </a>
                <a href="https://github.com/aloifran" target="_blank">
                    <SvgIcon size="md" icon="github" />
                </a>
                <a href="mailto:franad89@gmail.com">
                    <SvgIcon size="md" icon="email" />
                </a>
            </div>
        </div>
    );
}
