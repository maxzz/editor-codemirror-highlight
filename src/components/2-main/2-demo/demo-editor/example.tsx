import { ReactNode, useLayoutEffect } from "react";
import { Code, LanguageName } from "@/components/ui/editor";

type ExampleProps = {
    code: string;
    exampleNode: ReactNode;
    headerNode: ReactNode;
    language?: LanguageName;
    title: string;
};

export function Example({ code, exampleNode, headerNode, language = "jsx", title }: ExampleProps) {
    // useLayoutEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    return (
        <div className="mx-auto p-8 max-w-[1024px] text-sm">
            <h1 className="mb-4 p-3 w-full min-w-0 text-xl lg:text-2xl text-foreground bg-muted rounded-md inline-flex items-center">
                <span className="flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
                    {title}
                </span>
            </h1>

            {headerNode}

            <div className="mx-8 mt-4">
                {exampleNode}
            </div>

            <Code
                className="block p-4 whitespace-pre rounded-md overflow-x-auto"
                code={code.trim()}
                language={language}
                showLineNumbers
            />
        </div>
    );
}
