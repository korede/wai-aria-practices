const fuzzysearchSensitive = require("fuzzysearch");
const removeSectionNumbers = require("./removeSectionNumbers");
const getIntroductionFormatter = require("./getIntroduction");
const removeLinks = require("../../utilities/removeLinks");
const renumberHeadings = require("../../utilities/renumberHeadings");

// Why is fuzzysearch case sensitive? Seems a bit strange!
const fuzzysearch = (needle, haystack) =>
  fuzzysearchSensitive(needle, haystack.toLowerCase());

const sections = {
  title: {
    identify: (element) => element.tagName === "TITLE",
    getContent: (element) => element.innerHTML,
  },
  readMeFirst: {
    permalink: "/ARIA/apg/practices/read-me-first/",
    permalinkReplacesFormerAnchorId: "read_me_first",
    slug: "read-me-first",
    identify: (element) => {
      const headlineElement = element.querySelector("h1,h2,h3,h4");
      return (
        headlineElement &&
        fuzzysearch("read me first", headlineElement.textContent)
      );
    },
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    getIntroduction: getIntroductionFormatter("read-me-first"),
    getContent: removeSectionNumbers(
      renumberHeadings(-1, (element) => {
        element.querySelector("h2").remove();
        return element.outerHTML;
      })
    ),
  },

  landmarkRegions: {
    permalink: "/ARIA/apg/practices/landmark-regions/",
    permalinkReplacesFormerAnchorId: "aria_landmark",
    slug: "landmark-regions",
    identify: (element) => element.getAttribute("id") === "aria_landmark",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    getIntroduction: getIntroductionFormatter("landmark-regions"),
    getContent: removeSectionNumbers(
      renumberHeadings(-1, (element) => {
        element.querySelector("h2").remove();
        return `
          <h3 id="introduction">Introduction</h3>
          ${element.outerHTML}
        `;
      })
    ),
  },
  namesAndDescriptions: {
    permalink: "/ARIA/apg/practices/names-and-descriptions/",
    permalinkReplacesFormerAnchorId: "names_and_descriptions",
    slug: "names-and-descriptions",
    identify: (element) =>
      element.getAttribute("id") === "names_and_descriptions",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    getIntroduction: getIntroductionFormatter("names-and-descriptions"),
    getContent: removeSectionNumbers(
      renumberHeadings(-1, (element) => {
        element.querySelector("h2").remove();
        return `
          <h3 id="introduction">Introduction</h3>
          ${element.outerHTML}
        `;
      })
    ),
  },
  keyboardInterface: {
    permalink: "/ARIA/apg/practices/keyboard-interface/",
    permalinkReplacesFormerAnchorId: "keyboard",
    slug: "keyboard-interface",
    identify: (element) => element.getAttribute("id") === "keyboard",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    getIntroduction: getIntroductionFormatter("keyboard-interface"),
    getContent: removeSectionNumbers(
      renumberHeadings(-1, (element) => {
        element.querySelector("h2").remove();
        return `
          <h3 id="introduction">Introduction</h3>
          ${element.outerHTML}
        `;
      })
    ),
  },
  gridAndTableProperties: {
    permalink: "/ARIA/apg/practices/grid-and-table-properties/",
    permalinkReplacesFormerAnchorId: "gridAndTableProperties",
    slug: "grid-and-table-properties",
    identify: (element) =>
      element.getAttribute("id") === "gridAndTableProperties",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    getIntroduction: getIntroductionFormatter("grid-and-table-properties"),
    getContent: removeSectionNumbers(
      renumberHeadings(-1, (element) => {
        element.querySelector("h2").remove();
        return `
          <h3 id="introduction">Introduction</h3>
          ${element.outerHTML}
        `;
      })
    ),
  },
  rangeRelatedProperties: {
    permalink: "/ARIA/apg/practices/range-related-properties/",
    permalinkReplacesFormerAnchorId: "range_related_properties",
    slug: "range-related-properties",
    identify: (element) =>
      element.getAttribute("id") === "range_related_properties",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    getIntroduction: getIntroductionFormatter("range-related-properties"),
    getContent: removeSectionNumbers(
      renumberHeadings(-1, (element) => {
        element.querySelector("h2").remove();
        return `
          <h3 id="introduction">Introduction</h3>
          ${element.outerHTML}
        `;
      })
    ),
  },
  presentationRole: {
    permalink: "/ARIA/apg/practices/hiding-semantics/",
    slug: "presentation-role",
    identify: (element) => element.getAttribute("id") === "presentation_role",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    getIntroduction: getIntroductionFormatter("presentation-role"),
    getContent: removeSectionNumbers((element) => {
      element.setAttribute("id", "presentation-role");
      return element.outerHTML;
    }),
  },
  structuralRoles: {
    permalink: "/ARIA/apg/practices/structural-roles/",
    slug: "structural-roles",
    identify: (element) => element.getAttribute("id") === "structural_roles",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    getIntroduction: getIntroductionFormatter("structural-roles"),
    getContent: removeSectionNumbers(
      renumberHeadings(-1, (element) => {
        element.querySelector("h2").remove();
        element
          .querySelector(".widget-features")
          .insertAdjacentHTML(
            "beforebegin",
            `<h3 id="all-structural-roles">All Structural Roles</h3>`
          );
        return `
          <h3 id="introduction">Introduction</h3>
          ${element.outerHTML}
        `;
      })
    ),
  },
  childrenPresentational: {
    permalink: "/ARIA/apg/practices/hiding-semantics/",
    slug: "children-presentational",
    identify: (element) =>
      element.getAttribute("id") === "children_presentational",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    getIntroduction: getIntroductionFormatter("children-presentational"),
    getContent: removeSectionNumbers((element) => {
      element.setAttribute("id", "children-presentational");
      return element.outerHTML;
    }),
  },

  introduction: {
    permalink: "/ARIA/apg/about/",
    identify: (element) => element.getAttribute("id") === "intro",
    getContent: removeSectionNumbers((element) => {
      const firstP = element.querySelector("p");
      if (fuzzysearch("this section is informative", firstP.textContent)) {
        firstP.remove();
      }
      return element.outerHTML;
    }),
  },

  changelog: {
    permalink: "/ARIA/apg/about/",
    identify: (element) => element.getAttribute("id") === "change_log",
    getContent: removeSectionNumbers((element) => {
      return element.outerHTML;
    }),
  },

  editors: {
    permalink: "/ARIA/apg/about/",
    identify: (element) => element.classList.contains("head"),
    getContent: (element) => {
      const dl = element.querySelector("dl");
      const children = dl.querySelectorAll("dt,dd");

      let editors = "";
      let formerEditors = "";
      let mostRecentDt;
      children.forEach((child) => {
        if (child.tagName === "DT") {
          mostRecentDt = child.textContent.trim();
        }
        if (mostRecentDt === "Editors:") {
          if (child.tagName === "DT") {
            child.textContent = "Current editors:";
          }
          editors += child.outerHTML;
        }
        if (mostRecentDt === "Former editors:") {
          formerEditors += child.outerHTML;
        }
      });

      if (!editors.length || !formerEditors.length) {
        throw new Error("Failed to find list of editors");
      }

      return `<h3>Editors</h3><dl>${editors}${formerEditors}</dl>`;
    },
  },

  acknowledgements: {
    permalink: "/ARIA/apg/about/",
    identify: (element) => element.getAttribute("id") === "acknowledgements",
    getContent: removeSectionNumbers((element) => {
      element
        .querySelector(".header-wrapper")
        .insertAdjacentHTML("afterend", `<div id="insert-editors-here"></div>`);
      return element.outerHTML;
    }),
  },

  references: {
    permalink: "/ARIA/apg/about/",
    identify: (element) => element.getAttribute("id") === "references",
    getContent: removeSectionNumbers((element) => {
      return element.outerHTML;
    }),
  },
};

module.exports = sections;
