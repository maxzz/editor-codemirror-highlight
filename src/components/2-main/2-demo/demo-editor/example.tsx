import { ReactNode, useLayoutEffect } from "react";
import { Code, LanguageName } from "@/components/ui/editor";
import styles from "./example.module.css";

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
        <div className={styles.Route}>
            <h1 className="p-3 text-xl lg:text-2xl text-foreground bg-muted rounded-md inline-flex items-center">
                <span className={styles.Title}>
                    {title}
                </span>
            </h1>

            {headerNode}

            <div className={styles.ExampleContainer}>
                {exampleNode}
            </div>

            <Code
                className={styles.Code}
                code={code.trim()}
                language={language}
                showLineNumbers
            />
        </div>
    );
}
