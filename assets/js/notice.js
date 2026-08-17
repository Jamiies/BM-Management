/* ================================================================
   TEMPORARY WORK-IN-PROGRESS NOTICE — not a gate, just a one-time
   heads-up that the site isn't finished yet. Nothing is blocked;
   visitors click through and are remembered on that device.

   TO DISABLE INSTANTLY (no visitor impact, one edit): set
   NOTICE_ENABLED to false below.

   TO REMOVE ENTIRELY: delete this file, delete wip.html, and
   remove the two <script> lines this file's comment block asks
   you to remove from the <head> of index.html, bio.html,
   resume.html, services.html, and questions.html.
   ================================================================ */

const NOTICE_ENABLED = true;

const NOTICE_STORAGE_KEY = "bmWipAcknowledged";
const NOTICE_KNOWN_PAGES = ["index.html", "bio.html", "resume.html", "services.html", "questions.html"];

function noticeIsAcknowledged() {
  return localStorage.getItem(NOTICE_STORAGE_KEY) === "1";
}

function noticeAcknowledge() {
  localStorage.setItem(NOTICE_STORAGE_KEY, "1");
}

// Call this at the very top of every gated page's <head>.
// Redirects to wip.html if the visitor hasn't clicked through yet.
function noticeEnforce() {
  if (!NOTICE_ENABLED || noticeIsAcknowledged()) return;
  const here = location.pathname.split("/").pop() || "index.html";
  location.replace("wip.html?redirect=" + encodeURIComponent(here));
}

// Resolves the ?redirect= param on wip.html back to a known page,
// falling back to index.html for anything unexpected.
function noticeRedirectTarget() {
  const requested = new URLSearchParams(location.search).get("redirect");
  return NOTICE_KNOWN_PAGES.includes(requested) ? requested : "index.html";
}
