export default function Footer() {
    return (
        <footer className="mx-auto mt-10 w-4/5 border-t border-zinc-300 dark:border-zinc-700">
            <div className="py-10 text-center">
                Made with{" "}
                <a className="link" target="_blank" href="https://nextjs.org">
                    Next.js
                </a>
                ,{" "}
                <a
                    className="link"
                    target="_blank"
                    href="https://tailwindcss.com"
                >
                    Tailwind
                </a>
                , and{" "}
                <a
                    className="link"
                    target="_blank"
                    href="https://www.typescriptlang.org/"
                >
                    Typescript.
                </a>
            </div>
        </footer>
    );
}
