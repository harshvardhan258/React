import React from "react";

export default function Link({ className, href, children }) {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) return;

    event.preventDefault();
    window.history.pushState({}, "", href);

    const nav = new PopStateEvent("popstate");
    window.dispatchEvent(nav);
  };

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
