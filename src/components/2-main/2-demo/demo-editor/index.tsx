import { Code } from "@/components/ui/editor";
import { Example } from "./example";

type AnyType = string | number | boolean | null | undefined;

const CODE_ORG = `
import {
  ImperativePanelHandle,
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "react-resizable-panels";

const ref = useRef<ImperativePanelHandle>(null); // imperative API

type AnyType = string | number | boolean | null | undefined;

const collapsePanel = () => {
  const panel = ref.current;
  if (panel) {
    panel.collapse();
  }
};

<PanelGroup direction="horizontal">
  <Panel collapsible ref={ref}>
    left
  </Panel>
  <PanelResizeHandle />
  <Panel>
    right
  </Panel>
</PanelGroup>
`;

const CODE = `
import {                    // tok-keyword; tok-punctuation
    ImperativePanelHandle,  // tok-variableName tok-definition
} from "react-resizable-panels"; // tok-string

const ref =                 // tok-variableName tok-definition
    useRef<ImperativePanelHandle> // tok-variableName; tok-typeName
        (null);             // tok-punctuation; tok-variableName; tok-typeName
const num = 0;              // tok-operator; tok-number; tok-punctuation
const str = \`ss\`;           // tok-string2

type AnyType = string | number | boolean | null | undefined; // tok-keyword; tok-typeName

const collapsePanel = () => {
  const panel = ref.current;
  if (panel) { 
    panel.collapse(); // tok-variableName; tok-operator; tok-propertyName
  }
};

<PanelGroup direction="horizontal">
  <Panel collapsible ref={ref}> {/* tok-typeName; tok-propertyName */}
    left
  </Panel>
</PanelGroup>
`;

export function EditorDemo() {
    return (
        <div>
            <Example
                title="Imperative Panel API"
                headerNode={<>
                    <p>
                        Sometimes panels need to resize or collapse/expand in response to
                        user actions. For example, double-clicking on a resize bar in VS
                        Code resizes the panel to a size that fits all file names. This type
                        of interaction can be implemented using the imperative API.
                    </p>
                    <p>
                        <code>Panel</code> provides the following imperative API methods:
                    </p>
                    <ul>
                        <li>
                            <Code className="mr-4" language="typescript" code="collapse(): void" />
                            Collapse the panel to its minimum size
                        </li>
                        <li>
                            <Code className="mr-4" language="typescript" code="expand(): void" />
                            Expand the panel to its previous size
                        </li>
                        <li>
                            <Code className="mr-4" language="typescript" code={`getId(): string`} />
                            Panel id
                        </li>
                        <li>
                            <Code className="mr-4" language="typescript" code={`getSize(): number`} />
                            Panel's current size in (in both percentage and pixel units)
                        </li>
                        <li>
                            <Code className="mr-4" language="typescript" code="isCollapsed(): boolean" />
                            Panel is currently collapsed
                        </li>
                        <li>
                            <Code className="mr-4" language="typescript" code="isExpanded(): boolean" />
                            Panel is currently expanded
                        </li>
                        <li>
                            <Code className="mr-4" language="typescript" code={`resize(size: number): void`} />
                            Resize the panel to the specified size (either percentage or pixel units)
                        </li>
                    </ul>
                </>}
                exampleNode={
                    // <Content
                    //     leftPanelRef={leftPanelRef}
                    //     middlePanelRef={middlePanelRef}
                    //     rightPanelRef={rightPanelRef}
                    //     onResize={onResize}
                    //     sizes={sizes}
                    // />
                    <div className="">Example</div>
                }
                code={CODE}
                language="tsx"
            />
        </div>
    );
}
