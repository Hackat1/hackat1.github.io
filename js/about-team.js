import { team } from "./team.js";

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === null || v === undefined) continue;
    if (k === "class") node.className = v;
    else if (k.startsWith("aria-") || k === "role") node.setAttribute(k, v);
    else if (k === "dataset") Object.assign(node.dataset, v);
    else node.setAttribute(k, v);
  }
  for (const c of children) {
    if (typeof c === "string") node.appendChild(document.createTextNode(c));
    else if (c) node.appendChild(c);
  }
  return node;
}

function renderMember(m) {
  const img = el("img", {
    src: m.photo?.src || "",
    alt: m.photo?.alt || m.name,
    loading: "lazy",
    width: "320",
    height: "320",
    decoding: "async",
    fetchpriority: "low"
  });

  const fig = el(
    "figure",
    { class: "team-figure" },
    img,
    el("figcaption", { class: "sr-only" }, m.name)
  );

  const name = el("h2", { class: "team-name" }, m.name);
  const title = el("p", { class: "team-title" }, m.title);

  const certs =
    (m.certifications && m.certifications.length) ?
      el(
        "ul",
        { class: "team-certs", "aria-label": "Certifications" },
        ...m.certifications.map((c) => el("li", {}, c))
      )
      : null;

  const bio = el(
    "p",
    { class: "team-bio" },
    m.bioShort || ""
  );

  const more =
    m.bioLong && m.bioLong.trim().length
      ? el(
          "details",
          { class: "team-more" },
          el("summary", {}, "Read more"),
          el("p", {}, m.bioLong)
        )
      : null;

  const contact =
    m.email
      ? el(
          "p",
          { class: "team-contact" },
          el("a", { href: `mailto:${m.email}` }, "Contact")
        )
      : null;

  return el(
    "article",
    { class: "team-card", role: "article", "aria-labelledby": `${m.id}-name` },
    fig,
    el("div", { class: "team-content" },
      el("header", {},
        el("span", { id: `${m.id}-name`, class: "sr-only" }, m.name),
        name,
        title
      ),
      certs,
      bio,
      more,
      contact
    )
  );
}

function renderTeam() {
  const mount = document.getElementById("team-root");
  if (!mount) return;

  const list = el(
    "section",
    { class: "team-grid", "aria-label": "Team members" },
    ...team.map(renderMember)
  );

  // Replace any existing content (idempotent on re-run)
  mount.replaceChildren(list);
}

document.addEventListener("DOMContentLoaded", renderTeam);