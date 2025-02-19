---
# This is a generated file
title: "Read Me First"
ref: /ARIA/apg/practices/read-me-first/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/practices/read-me-first/

sidebar: true



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

<script>
const addBodyClass = "practice-page";
const enableSidebar = true;
if (addBodyClass) document.body.classList.add(addBodyClass);
if (enableSidebar) document.body.classList.add('has-sidebar');
</script>
    
<div>
<section id="read_me_first"><div class="header-wrapper"></div>
    
    <section id="no_aria_better_bad_aria"><div class="header-wrapper"><h2 id="x2-1-no-aria-is-better-than-bad-aria">No ARIA is better than Bad ARIA</h2></div>
      
      <p>
        Functionally, ARIA roles, states, and properties are analogous to a CSS for assistive technologies.
        For screen reader users, ARIA controls the rendering of their non-visual experience.
        Incorrect ARIA misrepresents visual experiences, with potentially devastating effects on their corresponding non-visual experiences.
      </p>
      <p>Before using ARIA or any of the guidance in this document, please take time to understand the following two essential principles.</p>
      <section id="principle-1-a-role-is-a-promise"><div class="header-wrapper"><h3 id="x2-1-1-principle-1-a-role-is-a-promise">Principle 1: A role is a promise</h3></div>
      <p>This code:</p>
      <pre><code aria-busy="false" class="hljs xml">
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"button"</span>&gt;</span>Place Order<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          </code></pre>
      <p>
        Is a promise that the author of that <code>&lt;div&gt;</code> has also incorporated JavaScript that provides the keyboard interactions expected for a button.
        Unlike HTML input elements, ARIA roles do not cause browsers to provide keyboard behaviors or styling.
      </p>
      <p>Using a role without fulfilling the promise of that role is similar to making a "Place Order" button that abandons an order and empties the shopping cart.</p>
      <p>One of the objectives of this guide is to define expected behaviors for each ARIA role.</p>
      </section><section id="principle-2-aria-can-both-cloak-and-enhance-creating-both-power-and-danger"><div class="header-wrapper"><h3 id="x2-1-2-principle-2-aria-can-both-cloak-and-enhance-creating-both-power-and-danger">Principle 2: ARIA Can Both Cloak and Enhance, Creating Both Power and Danger</h3></div>
      <p>
        The information assistive technologies need about the meaning and purpose of user interface elements is called accessibility semantics.
        From the perspective of assistive technologies, ARIA gives authors the ability to dress up HTML and SVG elements with critical accessibility semantics that the assistive technologies would not otherwise be able to reliably derive.
      </p>
      <p>Some of ARIA is like a cloak; it covers up, or overrides, the original semantics or content.</p>
      <pre><code aria-busy="false" class="hljs javascript">
        &lt;a role=<span class="hljs-string">"menuitem"</span>&gt;Assistive tech users perceive <span class="hljs-built_in">this</span> element <span class="hljs-keyword">as</span> an item <span class="hljs-keyword">in</span> a menu, not a link.&lt;/a&gt;
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Assistive tech users can only perceive the contents of this aria-label, not the link text"</span>&gt;</span>Link Text<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></span>
</code></pre>
      <p>On the other hand, some uses of ARIA are more like suspenders or belts; they add meaning that provides essential support to the original content.</p>
      <pre><code aria-busy="false" class="hljs xml">
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">aria-pressed</span>=<span class="hljs-string">"false"</span>&gt;</span>Mute<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      </code></pre>
      <p>
        This is the power of ARIA.
        It enables authors to describe nearly any user interface component in ways that assistive technologies can reliably interpret, thus making components accessible to assistive technology users.
      </p>
      <p>
        This is also the danger of ARIA.
        Authors can inadvertently override accessibility semantics.
      </p>
      <pre><code aria-busy="false" class="hljs xml">
  <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"log"</span>&gt;</span>
    <span class="hljs-comment">&lt;!--
      Table that assistive technology users will not perceive as a table.
      The log role tells browser this is a log, not a table.
    --&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"navigation"</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- This is a navigation region, not a list. --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"uri1"</span>&gt;</span>nav link 1<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"uri2"</span>&gt;</span>nav link 2<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- ERROR! Previous list items are not in a list! --&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
</code></pre>
    </section></section>
    <section id="browser_and_AT_support"><div class="header-wrapper"><h2 id="x2-2-browser-and-assistive-technology-support">Browser and Assistive Technology Support</h2></div>
      
      <p>
        <strong>Testing assistive technology interoperability is essential before using code from this guide in production.</strong>
        Because the purpose of this guide is to illustrate appropriate use of ARIA 1.2 as defined in the ARIA specification, the design patterns, reference examples, and sample code intentionally <strong>do not</strong> describe and implement coding techniques for working around problems caused by gaps in support for ARIA 1.2 in browsers and assistive technologies.
        It is thus advisable to test implementations thoroughly with each browser and assistive technology combination that is relevant within a target audience.
      </p>
      <p>
        Similarly, JavaScript and CSS in this guide is written to be compatible with the most recent version of Chrome, Firefox, and Safari at the time of writing.
Some JavaScript and CSS may not function correctly in Internet Explorer.
      </p>
      <p>
        Except in cases where the ARIA Working Group and other contributors have overlooked an error,
        examples in this guide that do not function well in a particular browser or with a specific assistive technology are demonstrating browser or assistive technology bugs.
        Browser and assistive technology developers can thus utilize code in this guide to help assess the quality of their support for ARIA 1.2.
      </p>
    </section>
    <section id="mobile_and_touch_support"><div class="header-wrapper"><h2 id="x2-3-mobile-and-touch-support">Mobile and Touch Support</h2></div>
      
      <p>
        Currently, this guide does not indicate which examples are compatible with mobile browsers or touch interfaces.
        While some of the examples include specific features that enhance mobile and touch support, some ARIA features are not supported in any mobile browser.
        In addition, there is not yet a standardized approach for providing touch interactions that work across mobile browsers.
      </p>
      <p>More guidance about touch and mobile support is planned for future releases of the guide.</p>
    </section>
  </section>
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
