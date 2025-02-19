---
# This is a generated file
title: "About"
ref: /ARIA/apg/about/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/about/

sidebar: false



# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---


<link 
  rel="stylesheet"
  href="{{ '/content-assets/wai-aria-practices/styles.css' | relative_url }}"
>
<!-- Code highlighting styles -->
<link 
  rel="stylesheet"
  href="{{ '/ARIA/apg/example-index/css/github.css' | relative_url }}"
>

<div>

        <section id="intro"><div class="header-wrapper"><h2 id="x1-introduction">Introduction</h2></div>
    
    <p>
      The ARIA Authoring Practices Guide (APG) explains how to create accessible web experiences for users of assistive technologies and keyboard interfaces by developing web sites that properly convey accessibility semantics and implement common keyboard conventions.
      It also provides guidance on some closely related topics, such as supporting operating system settings for high contrast and reduced motion.
    </p>
    <p>
      Accessibility semantics refer to the meaning of user interface elements that need to be conveyed to assistive technology users in order for those users to understand and use the elements.
      For example, people who can visually perceive a search icon button understand the element can be activated to perform a search by the way it is styled and positioned.
      To make that icon accessible to a screen reader user, one of the semantics that needs to be communicated is that the element represents an interactive button.
      In addition, keyboard accessibility requires the button to be focusable, and keyboard conventions call for pressing <kbd>Enter</kbd> or <kbd>Space</kbd> to activate the button when it is focused.
      The APG describes how to convey accessibility semantics and implement keyboard accessibility for many common design patterns, ranging from typical buttons and popup menus to complex tree grids.
      It also explains essential practices related to these patterns, such as how to convey web page structure with ARIA landmark regions and effectively utilize the many ways of encoding accessible names.
    </p>
    <p>
      The APG is organized into two major sections: patterns and practices.
      Each pattern explains how to make a common user interface element, such as a button, menu, or dialog, accessible, and provides functional example implementations of the pattern.
      The practices section gives in-depth explanation of how to satisfy a variety of accessibility needs that surface when making rich internet application experiences accessible.
      For instance, the practices section on providing accessible names and descriptions gives detailed descriptions of seven different naming techniques as well as a table providing guidance for naming more than 80 types of elements.
    </p>
    <p>
      The APG assumes basic understanding of web development, especially of HTML and CSS.
      It may be particularly useful to designers and engineers who are working on site design systems and component libraries.
      However, it is important to understand that the APG only covers a portion of what is needed to create accessible experiences.
      To understand accessibility more broadly, it is advisable to start with the <a href="https://www.w3.org/WAI/fundamentals/">WAI Accessibility Fundamentals</a> and <a href="https://www.w3.org/WAI/design-develop/">WAI Overview of Design and Development</a>.
    </p>
    <p>
      The accessibility semantics used in the APG patterns and described in APG practices are defined in the
      <cite><a href="https://www.w3.org/TR/wai-aria-1.2/"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> 1.2 Specification</a></cite>.
      That is, the ARIA specification standardizes the meaning of the attributes that describe elements and their states to assistive technologies, such as the meaning of <code>role="button"</code>.
      These attributes and other features required to make sites usable by people who rely on assistive technologies or keyboard navigation are not natively included in the languages used to create web sites, such as HTML, JavaScript, CSS, and SVG.
      The <abbr title="World Wide Web Consortium">W3C</abbr> Web Accessibility Initiative's (WAI) Accessible Rich Internet Applications working group (ARIA WG) is addressing these deficiencies through several <abbr title="World Wide Web Consortium">W3C</abbr> standards efforts.
      The <a href="https://www.w3.org/WAI/intro/aria.php"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Overview</a>
      provides additional background on <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr>, summarizes those efforts, and lists the other documents included in the <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> suite.
    </p>
  </section>
        <section id="change_log" class="appendix"><div class="header-wrapper"><h2 id="b-change-history">Change History</h2></div>
    
    
    <p>
      APG 1.1 supported ARIA 1.1, and this version, APG 1.2, includes changes to support version 1.2 of the ARIA specification.
      It also includes nearly 200 significant updates to improve the quality and breadth of content.
      A <a href="https://github.com/w3c/aria-practices/wiki/Change-Log-for-November-2021-APG-1.2-Note-Release-1">detailed log of all changes</a> is available on the wiki of the w3c/aria-practices GitHub repository.
      Highlights of major changes to support ARIA 1.2 as well as some of the improvements include the following.
    </p>
    <ul>
      <li>Added section to provide guidance related to 38 document structure roles, 18 of which are new in ARIA 1.2.</li>
      <li>Revised guidance for roles where naming requirements changed in ARIA 1.2. ARIA 1.2 prohibits names on some roles. ARIA 1.2 removed naming requirements from some other roles.</li>
      <li>Added naming guidance for 18 roles that are new in ARIA 1.2.</li>
      <li>Revised the combobox pattern and 4 combobox examples to reflect the ARIA 1.2 revisions to combobox.</li>
      <li>Added example illustrating changes in ARIA 1.2 that enable creation of custom select-only comboboxes, which are similar to HTML select elements. This replaces the Collapsible Listbox example, which is now deprecated.</li>
      <li>Revised the listbox pattern to specify how to utilize the new ARIA 1.2 support for named groups of options and Added a new listbox example to demonstrate the named option group feature.</li>
      <li>Revised the editor menubar example to illustrate new ARIA 1.2 support for named groups of items in a menu.</li>
      <li>Updated the listbox and tree patterns to reflect current browser processing of aria-selected and provided guidance regarding the use of aria-checked to communicate selection.</li>
      <li>Added section providing guidance about properties used with range widgets, such as aria-valuemin and aria-valuemax.</li>
      <li>Added a design pattern and example implementation of the meter role, which is new in ARIA 1.2</li>
      <li>Added two examples that demonstrate how to create rating inputs, one based on slider and one based on radio group.</li>
      <li>Added two other slider examples: a vertical temperature slider and a media seek slider.</li>
      <li>Added a switch design pattern and three example implementations: one made from a div element, one based on HTML button, and one that uses HTML checkbox input.</li>
      <li>Added a button example that illustrates use of the new ARIA 1.2 IDL interface.</li>
      <li>Added a date picker example that illustrates choosing a date with a combobox.</li>
      <li>Added another example of a disclosure navigation menu that demonstrates how to include top-level links.</li>
      <li>Added example of a sortable table.</li>
      <li>Changed all example pages to include a <q>Jump to</q> menu, a button to  open the example in CodePen, and added a prominently placed warning with guidance about testing before re-using example code.</li>
      <li>Improved support for high contrast settings and added detailed documentation of high contrast support in many examples.</li>
      <li>Improved support for touch-based screen readers in several examples, most notably in sliders.</li>
      <li>Due to change in ARIA 1.2, removed Math role from list of roles that have presentational children.</li>
      <li>Developed a <a href="https://github.com/w3c/aria-practices/wiki/Code-Guide#apg-coding-standards">comprehensive set of coding standards for HTML, CSS, and Javascript</a> for the APG and updated a significant portion of content to conform with the standards.</li>
      <li>In response to feedback, fixed many documentation errors and functional bugs in examples.</li>
    </ul>
    <p>Comprehensive lists of closed issues included in APG 1.2 release 1 are tracked in the following GitHub milestones.</p>
    <ul>
      <li>
        <a href="https://github.com/w3c/aria-practices/milestone/2?closed=1">APG 1.2 Release 1 Milestone</a>:
        Github issues closed in the first publication of APG 1.2 as a <abbr title="World Wide Web Consortium">W3C</abbr> Note in November 2021.
      </li>
      <li>
        <a href="https://github.com/w3c/aria-practices/milestone/10">APG 1.2 Working Draft 3 Milestone</a>:
        Github issues closed in the third working draft of APG 1.2 published in November 2019.
      </li>
      <li>
        <a href="https://github.com/w3c/aria-practices/milestone/7">APG 1.2 Working Draft 1 milestone</a>:
        GitHub issues closed in the first working draft of APG 1.2 published on July 17, 2018.
      </li>
    </ul>
    
  </section>
        <section id="acknowledgements" class="appendix"><div class="header-wrapper"><h2 id="c-acknowledgements">Acknowledgements</h2></div><h3>Editors</h3><dl><dt>Current editors:</dt><dd class="editor p-author h-card vcard" data-editor-id="44582">
    <a class="ed_mailto u-email email p-name" href="mailto:mck@fb.com">Matt King</a> (<span class="p-org org h-org">Facebook</span>)
  </dd><dd class="editor p-author h-card vcard" data-editor-id="74097">
    <a class="ed_mailto u-email email p-name" href="mailto:jku@uic.edu">JaEun Jemma Ku</a> (<span class="p-org org h-org">University of Illinois</span>)
  </dd><dd class="editor p-author h-card vcard" data-editor-id="37155">
    <a class="ed_mailto u-email email p-name" href="mailto:nurthen@adobe.com">James Nurthen</a> (<span class="p-org org h-org">Adobe</span>)
  </dd><dd class="editor p-author h-card vcard" data-editor-id="74040">
    <span class="p-name fn">Zoë Bijl</span> (<span class="p-org org h-org">Invited Expert</span>)
  </dd><dd class="editor p-author h-card vcard" data-editor-id="34017">
    <a class="u-url url p-name fn" href="https://www.w3.org/People/cooper/">Michael Cooper</a> (<span class="p-org org h-org">W3C</span>)
  </dd><dt>
                Former editors:
              </dt><dd class="editor p-author h-card vcard" data-editor-id="42279">
    <span class="p-name fn">Joseph Scheuhammer</span> (<span class="p-org org h-org">Inclusive Design Research Centre, OCAD University</span>) -  Until <time datetime="2014-10-01">01 October 2014</time>
  </dd><dd class="editor p-author h-card vcard" data-editor-id="41725">
    <span class="p-name fn">Lisa Pappas</span> (<span class="p-org org h-org">SAS</span>) -  Until <time datetime="2009-10-01">01 October 2009</time>
  </dd><dd class="editor p-author h-card vcard" data-editor-id="2460">
    <span class="p-name fn">Rich Schwerdtfeger</span> (<span class="p-org org h-org">IBM Corporation</span>) -  Until <time datetime="2014-10-01">01 October 2014</time>
  </dd></dl>
    
    <section id="major-contributors-to-version-1-1"><div class="header-wrapper"><h3 id="c-1-major-contributors-to-version-1-1">Major Contributors to Version 1.1</h3></div>
      
      <p>
        While <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Authoring Practices 1.1 is the work of the entire Authoring Practices Task Force and also benefits from many people throughout the open source community who both contribute significant work and provide valuable feedback,
        special thanks goes to the following people who provided distinctly large portions of the content and code in version 1.1.
      </p>
      <ul>
        <li>Jon Gunderson and Nicholas Hoyt  of the Division of Disability Resources and Education Services at the University of Illinois Urbana/Champaign and the students Max Foltz,  Sulaiman Sanaullah, Mark McCarthy, and Jinyuan Zhou for their contributions to the development of many of the design pattern examples.</li>
        <li>Valerie Young of Bocoup and her sponsor, Facebook, for development of the example test framework and regressions tests for more than 50 examples.</li>
        <li>Simon Pieters of Bocoup and his sponsor, Facebook, for authoring of significant guidance sections, including comprehensive treatment of the topic of accessible names and descriptions.</li>
      </ul>
    </section>
    <section id="participants-active-in-the-aria-authoring-practices-task-force"><div class="header-wrapper"><h3 id="c-2-participants-active-in-the-aria-authoring-practices-task-force">Participants active in the ARIA Authoring Practices Task Force</h3></div>
      
      <ul>
        <li>Ann Abbott (Invited Expert)</li>
        <li>Shirisha Balusani (Microsoft Corporation)</li>
        <li>Dorothy Bass (Wells Fargo Bank N.A.)</li>
        <li>Curt Bellew (Oracle)</li>
        <li>Zoë Bijl (Invited Expert)</li>
        <li>Michael Cooper (<abbr title="World Wide Web Consortium">W3C</abbr>)</li>
        <li>Bryan Garaventa (Level Access)</li>
        <li>Jon Gunderson (University of Illinois at Urbana-Champaign)</li>
        <li>Jesse Hausler(Salesforce)</li>
        <li>Sarah Higley (Microsoft Corporation)</li>
        <li>Hans Hillen (The Paciello Group, LLC)</li>
        <li>Matt King (Facebook)</li>
        <li>Jaeun Ku (University of Illinois at Urbana-Champaign)</li>
        <li>Aaron Leventhal (Google)</li>
        <li>Carolyn MacLeod (IBM Corporation)</li>
        <li>Mark McCarthy (University of Illinois at Urbana-Champaign)</li>
        <li>James Nurthen (Adobe)</li>
        <li>Scott O'Hara (The Paciello Group, LLC)</li>
        <li>Simon Pieters (Bocoup)</li>
        <li>Scott Vinkle (Shopify)</li>
        <li>Evan Yamanishi (W. W. Norton)</li>
        <li>Valerie Young (Bocoup)</li>
      </ul>
    </section>
    <section id="other-commenters-and-contributors-to-version-1-1"><div class="header-wrapper"><h3 id="c-3-other-commenters-and-contributors-to-version-1-1">Other commenters and contributors to Version 1.1</h3></div>
      
      <ul>
        <li>Vyacheslav Aristov</li>
        <li>J. Renée Beach</li>
        <li>Kasper Christensen</li>
        <li>Gerard K. Cohen</li>
        <li>Anne-Gaelle Colom</li>
        <li>Kevin Coughlin</li>
        <li>Cameron Cundiff</li>
        <li>Manish Dahamiwal</li>
        <li>Gilmore Davidson</li>
        <li>Boris Dušek</li>
        <li>Michael Fairchild</li>
        <li>Jeremy Felt</li>
        <li>Rob Fentress</li>
        <li>Geppy</li>
        <li>Tatiana Iskandar</li>
        <li>Patrick Lauke</li>
        <li>Marek Lewandowski</li>
        <li>Dan Matthew</li>
        <li>Shane McCarron</li>
        <li>Victor Meyer</li>
        <li>Jonathan Neal</li>
        <li>Philipp Rudloff</li>
        <li>Joseph Scheuhammer</li>
        <li>Nick Schonning</li>
        <li>thomascorthals</li>
        <li>Christopher Tryens</li>
      </ul>
    </section>

    <div data-include="common/acknowledgements/funders.html" data-include-replace="true" data-include-id="include-2568603190916745" class="respec-offending-element" title="`data-include` failed: `common/acknowledgements/funders.html` (Failed to fetch)." id="respec-offender-data-include-failed-common-acknowledgements-funders-html-failed-to-fetch"></div>

  </section>
        <section id="references" class="appendix"><div class="header-wrapper"><h2 id="d-references">References</h2></div><section id="informative-references"><div class="header-wrapper"><h3 id="d-1-informative-references">Informative references</h3></div>
    
    <dl class="bibliography"><dt id="bib-html">[HTML]</dt><dd>
      <a href="https://html.spec.whatwg.org/multipage/"><cite>HTML Standard</cite></a>. Anne van Kesteren; Domenic Denicola; Ian Hickson; Philip Jägenstedt; Simon Pieters.  WHATWG. Living Standard. URL: <a href="https://html.spec.whatwg.org/multipage/">https://html.spec.whatwg.org/multipage/</a>
    </dd><dt id="bib-html-aam">[HTML-AAM]</dt><dd>
      <a href="https://www.w3.org/TR/html-aam-1.0/"><cite>HTML Accessibility API Mappings 1.0</cite></a>. Steve Faulkner; Scott O'Hara.  W3C. 4 April 2022. W3C Working Draft. URL: <a href="https://www.w3.org/TR/html-aam-1.0/">https://www.w3.org/TR/html-aam-1.0/</a>
    </dd><dt id="bib-html-aria">[HTML-ARIA]</dt><dd>
      <a href="https://www.w3.org/TR/html-aria/"><cite>ARIA in HTML</cite></a>. Steve Faulkner; Scott O'Hara; Patrick Lauke.  W3C. 9 December 2021. W3C Recommendation. URL: <a href="https://www.w3.org/TR/html-aria/">https://www.w3.org/TR/html-aria/</a>
    </dd><dt id="bib-svg2">[SVG2]</dt><dd>
      <a href="https://www.w3.org/TR/SVG2/"><cite>Scalable Vector Graphics (SVG) 2</cite></a>. Amelia Bellamy-Royds; Bogdan Brinza; Chris Lilley; Dirk Schulze; David Storey; Eric Willigers.  W3C. 4 October 2018. W3C Candidate Recommendation. URL: <a href="https://www.w3.org/TR/SVG2/">https://www.w3.org/TR/SVG2/</a>
    </dd><dt id="bib-wai-aria">[WAI-ARIA]</dt><dd>
      <a href="https://www.w3.org/TR/wai-aria-1.1/"><cite>Accessible Rich Internet Applications (WAI-ARIA) 1.1</cite></a>. Joanmarie Diggs; Shane McCarron; Michael Cooper; Richard Schwerdtfeger; James Craig.  W3C. 14 December 2017. W3C Recommendation. URL: <a href="https://www.w3.org/TR/wai-aria-1.1/">https://www.w3.org/TR/wai-aria-1.1/</a>
    </dd><dt id="bib-wai-aria-1.2">[WAI-ARIA-1.2]</dt><dd>
      <a href="https://www.w3.org/TR/wai-aria-1.2/"><cite>Accessible Rich Internet Applications (WAI-ARIA) 1.2</cite></a>. Joanmarie Diggs; James Nurthen; Michael Cooper.  W3C. 8 December 2021. W3C Candidate Recommendation. URL: <a href="https://www.w3.org/TR/wai-aria-1.2/">https://www.w3.org/TR/wai-aria-1.2/</a>
    </dd></dl>
  </section></section>
      
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
