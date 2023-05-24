function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        // React doesn’t wrap primitive values or create empty arrays when there aren’t children, but we do it because it will simplify our code, and for our library we prefer simple code than performant code.
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

const ReReact = {
  createElement,
};

/** @jsx ReReact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);
