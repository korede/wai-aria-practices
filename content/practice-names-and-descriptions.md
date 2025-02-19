---
# This is a generated file
title: "Providing Accessible Names and Descriptions"
ref: /ARIA/apg/practices/names-and-descriptions/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/practices/names-and-descriptions/

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

          <h2 id="introduction">Introduction</h2>
          <section id="names_and_descriptions"><div class="header-wrapper"></div>
    
    <p>
      Providing elements with accessible names, and where appropriate, accessible descriptions is one of the most important responsibilities authors have when developing accessible web experiences.
      While doing so is straightforward for most elements, technical mistakes that can completely block users of assistive technologies are easy to make and unfortunately common.
      To help authors effectively provide accessible names and descriptions, this section explains their purpose, when authors need to provide them, how browsers assemble them, and rules for coding and composing them.
      It also guides authors in the use of the following naming and describing techniques and <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> properties:
    </p>
    <ul>
      <li>Naming:
        <ul>
          <li>Naming with child content.</li>
          <li>Naming with a string attribute via <code>aria-label</code>.</li>
          <li>Naming by referencing content with <code>aria-labelledby</code>.</li>
          <li>Naming form controls with the label element.</li>
          <li>Naming fieldsets with the legend element.</li>
          <li>Naming tables and figures with captions.</li>
          <li>Fallback names derived from titles and placeholders.</li>
        </ul>
      </li>
      <li>Describing:
        <ul>
          <li>Describing by referencing content with <code>aria-describedby</code>.</li>
          <li>Describing tables and figures with captions.</li>
          <li>Descriptions derived from titles.</li>
        </ul>
      </li>
    </ul>

    <section id="names_and_descriptions_definition"><div class="header-wrapper"><h2 id="x5-1-what-are-accessible-names-and-descriptions">What ARE Accessible Names and Descriptions?</h2></div>
      
      <p>
        An accessible name is a short string, typically 1 to 3 words,  that authors associate with an element to provide users of assistive technologies with a label for the element.
        For example, an input field might have an accessible name of "User ID" or a button might be named "Submit".
      </p>
      <p>An accessible name serves two primary purposes for users of assistive technologies, such as screen readers:</p>
      <ol>
        <li>Convey the purpose or intent of the element.</li>
        <li>Distinguish the element from other elements on the page.</li>
      </ol>
      <p>
        Both the <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> specification and WCAG require all focusable, interactive elements to have an accessible name.
        In addition dialogs and some structural containers, such as <a href="https://w3c.github.io/aria/#table" class="role-reference">tables</a> and <a href="https://w3c.github.io/aria/#region" class="role-reference">regions</a>, are required to have a name.
        Many other elements can be named, but whether a name will enhance the accessible experience is determined by various characteristics of the surrounding context.
        Finally, there are some elements where providing an accessible name is technically possible but not advisable.
        The <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#naming_role_guidance' | relative_url }}">Accessible Name Guidance by Role</a> section lists naming requirements and guidelines for every ARIA role.
      </p>
      <p>
        An accessible description is also an author-provided string that is rendered by assistive technologies.
        Authors supply a description when there is a need to associate additional information with an element, such as instructions or format requirements for an input field.
      </p>
      <p>
        Assistive technologies present names differently from descriptions.
        For instance, screen readers typically announce the name and role of an element first, e.g., a button named <q>Mute Conversation</q>could be spoken as <q>Mute Conversation button</q>.
        If an element has a state, it could be announced either before or after the name and role; after name and role is the typical default.
         For example, a switch button named <q>Mute Conversation</q> in the <q>off</q> state could be announced as <q>Mute Conversation switch button off</q>.
        Because descriptions are optional strings that are usually significantly longer than names, they are presented last, sometimes after a slight delay.
        For example, <q>Mute Conversation Switch button off, Silences alerts and notifications about activity in this conversation.</q>
        To reduce verbosity, some screen readers do not announce descriptions by default but instead inform users of their presence so that users can press a key that will announce the description.
      </p>
    </section>

    <section id="names_and_descriptions_derivation"><div class="header-wrapper"><h2 id="x5-2-how-are-name-and-description-strings-derived">How Are Name and Description Strings Derived?</h2></div>
      
      <p>
        Because there are several elements and attributes for specifying text to include in an accessible name or description string, and because authors can combine them in a practically endless number of ways, browsers implement fairly complex algorithms for assembling the strings.
The sections on <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#name_calculation' | relative_url }}">accessible name calculation</a> and <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#description_calculation' | relative_url }}">accessible description calculation</a> explain the algorithms and how they implement precedence.
However, most authors do not need such detailed understanding of the algorithms since nearly all circumstances where a name or description is useful are supported by the coding patterns described in the <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#naming_techniques' | relative_url }}">naming techniques</a> and <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#describing_techniques' | relative_url }}">describing techniques</a> sections.
      </p>
    </section>

      <section id="naming_cardinal_rules"><div class="header-wrapper"><h2 id="x5-3-cardinal-rules-of-naming">Cardinal Rules of Naming</h2></div>
        

        <section id="naming_rule_heed_warnings"><div class="header-wrapper"><h3 id="x5-3-1-rule-1-heed-warnings-and-test-thoroughly">Rule 1: Heed Warnings and Test Thoroughly</h3></div>
          
          <p>
            Several of the <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#naming_techniques' | relative_url }}">naming techniques</a> below include notes that warn against specific coding patterns that are either prohibited by the ARIA specification or fall into gray space that is not yet fully specified.
            Some of these prohibited or ambiguous patterns may appear logical and even yield desired names in some browsers.
            However, it is unlikely they will provide consistent results across browsers, especially over time as work to improve the consistency of name calculation across browsers progresses.
          </p>
          <p>
            In addition to heeding the warnings provided in the naming techniques, it is difficult to over emphasize the importance of testing to ensure that names browsers calculate match expectations.
          </p>
        </section>

        <section id="naming_rule_visible_text"><div class="header-wrapper"><h3 id="x5-3-2-rule-2-prefer-visible-text">Rule 2: Prefer Visible Text</h3></div>
          
          <p>
            When a user interface includes visible text that could be used to provide an appropriate accessible name, using the visible text for the accessible name simplifies maintenance, prevents bugs, and reduces language translation requirements.
            When names are generated from text that exists only in markup and is never displayed visually, there is a greater likelihood that accessible names will not be updated when the user interface design or content are changed.
          </p>
          <p>
            If an interactive element, such as an input field or button, does not have a visually persistent text label, consider adjusting the design to include one.
            In addition to serving as a more robust source for an accessible name, visible text labels enhance accessibility for many people with disabilities who do not use assistive technologies that present invisible accessible names.
            In most circumstances, visible text labels also make the user interface easier to understand for all users.
          </p>
        </section>

        <section id="naming_rule_native_techniques"><div class="header-wrapper"><h3 id="x5-3-3-rule-3-prefer-native-techniques">Rule 3: Prefer Native Techniques</h3></div>
          
          <p>
            In HTML documents, whenever possible, rely on HTML naming techniques, such as the HTML <code>label</code> element for form elements  and <code>caption</code> element for tables.
            While less flexible, their simplicity and reliance on visible text help ensure robust accessible experiences.
            Several of the <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#naming_techniques' | relative_url }}">naming techniques</a> highlight specific accessibility advantages of using HTML features instead of ARIA attributes.
          </p>
        </section>

        <section id="naming_rule_avoid_fallback"><div class="header-wrapper"><h3 id="x5-3-4-rule-4-avoid-browser-fallback">Rule 4: Avoid Browser Fallback</h3></div>
          
          <p>
            When authors do not specify an accessible name using an element or attribute that is intended for naming, browsers attempt to help assistive technology users by resorting to fallback methods for generating a name.
            For example, the HTML <code>title</code> and <code>placeholder</code> attributes are used as last resort sources of content for accessible names.
            Because the purpose of these attributes is not naming, their content typically yields low quality accessible names that are not effective.
          </p>
        </section>

        <section id="naming_rule_brief_names"><div class="header-wrapper"><h3 id="x5-3-5-rule-5-compose-brief-useful-names">Rule 5: Compose Brief, Useful Names</h3></div>
        
          <p>
            Similar to how visually crowded screens and ambiguous icons reduce usability, excessively long, insufficiently distinct, or unclear  accessible names can make a user interface very difficult, or even impossible, to use for someone who relies on a non-visual form of the user interface.
            In other words, for a web experience to be accessible, its accessible names must be effective.
            The section on <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#naming_effectively' | relative_url }}">Composing Effective and User-friendly Accessible Names</a> provides guidance for balancing brevity and clarity.
          </p>
        </section>
      </section>

      <section id="naming_techniques"><div class="header-wrapper"><h2 id="x5-4-naming-techniques">Naming Techniques</h2></div>
        

        <section id="naming_with_child_content"><div class="header-wrapper"><h3 id="x5-4-1-naming-with-child-content">Naming with Child Content</h3></div>
          
          <p>
            Certain elements get their name from the content they contain.
            For example, the following link is named "Home".
          </p>

          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"/"</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></code></pre>

          <p>
            When assistive technologies render an element that gets its accessible name from its content, such as a link or button, the accessible name is the only content the user can perceive for that element.
            This is in contrast to other elements, such as text fields or tables,  where the accessible name is a label that is presented in addition to the value or content of the element.
            For instance, the accessible name of a table can be derived from a caption element, and assistive technologies render both the caption and all other content contained inside the table.
          </p>
          <p>Elements having one of the following roles are, by default, named by a string calculated from their descendant content:</p>
          <ul>
            <li>button</li>
            <li>cell</li>
            <li>checkbox</li>
            <li>columnheader</li>
            <li>gridcell</li>
            <li>heading</li>
            <li>link</li>
            <li>menuitem (content contained in a child <code>menu</code> element is excluded.)</li>
            <li>menuitemcheckbox</li>
            <li>menuitemradio</li>
            <li>option</li>
            <li>radio</li>
            <li>row</li>
            <li>rowheader</li>
            <li>switch</li>
            <li>tab</li>
            <li>tooltip</li>
            <li>treeitem (content included in a child <code>group</code> element is excluded.)</li>
          </ul>
          <p>
            When calculating a name from content for an element, user agents recursively walk through each of its descendant elements, calculate a name string for each descendant, and concatenate the resulting strings.
            In two special cases, certain descendants are ignored: <code>group</code> descendants of <code>treeitem</code> elements and <code>menu</code> descendants of <code>menuitem</code> elements are omitted from the calculation.
            For example, in the following <code>tree</code>, the name of the first tree item is <q>Fruits</q>; <q>Apples</q>, <q>Bananas</q>, and <q>Oranges</q> are omitted.
          </p>
        <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"tree"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"treeitem"</span>&gt;</span>Fruits
    <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"group"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"treeitem"</span>&gt;</span>Apples<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"treeitem"</span>&gt;</span>Bananas<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"treeitem"</span>&gt;</span>Oranges<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span></code></pre>
          <div class="warning" id="issue-container-generatedID-37"><div role="heading" class="warning-title marker" id="h-warning-1" aria-level="5"><span>Warning</span></div><p class="">
            If an element with one of the above roles that supports naming from child content is named by using <code>aria-label</code> or <code>aria-labelledby</code>, content contained in the element and its descendants is hidden from assistive technology users unless the descendant content is referenced by <code>aria-labelledby</code>.
            It is strongly recommended to avoid using either of these attributes to override content of one of the above elements except in rare circumstances where hiding content from assistive technology users is beneficial.
            In addition, in situations where visible content is hidden from assistive technology users by use of one of these attributes, thorough testing with assistive technologies is particularly important.
          </p></div>
        </section>

        <section id="naming_with_aria-label"><div class="header-wrapper"><h3 id="x5-4-2-naming-with-a-string-attribute-via-aria-label">Naming with a String Attribute Via <code>aria-label</code></h3></div>
          
          <p>
            The <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a> property enables authors to name an element with a string that is not visually rendered.
            For example, the name of the following button is "Close".
          </p>
          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Close"</span>&gt;</span>X<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
          <p>
            The <code>aria-label</code> property is useful when there is no visible text content that will serve as an appropriate accessible name.
          </p>
          <p>
            The <code>aria-label</code> property affects assistive technology users in one of two different ways, depending on the role of the element to which it is applied.
            When applied to an element with one of the roles that supports <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#naming_with_child_content' | relative_url }}">naming from child content</a>, <code>aria-label</code> hides descendant content from assistive technology users and replaces it with the value of <code>aria-label</code>.
            However, when applied to nearly any other type of element, assistive technologies will render both the value of <code>aria-label</code> and the content of the element.
            For example, the name of the following navigation region is "Product".
          </p>
          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">nav</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Product"</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- list of navigation links to product pages --&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nav</span>&gt;</span></code></pre>
          <p>
            When encountering this navigation region, a screen reader user will hear the name and role of the element, e.g., "Product navigation region", and then be able to read through the links contained in the region.
          </p>
          <div class="warning" id="issue-container-generatedID-38"><div role="heading" class="warning-title marker" id="h-warning-2" aria-level="5"><span>Warning</span></div><ol class="">
            <li>
          If <code>aria-label</code> is applied to an element with one of the roles that supports <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#naming_with_child_content' | relative_url }}">naming from child content</a>, content contained in the element and its descendants is hidden from assistive technology users.
          It is strongly recommended to avoid using <code>aria-label</code> to override content of one of these elements except in rare circumstances where hiding content from assistive technology users is beneficial.
        </li>
        <li>There are certain types of elements, such as paragraphs and list items, that should not be named with <code>aria-label</code>. They are identified in the table in the <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#naming_role_guidance' | relative_url }}">Accessible Name Guidance by Role</a> section.</li>
            <li>Because the value of <code>aria-label</code> is not rendered visually, testing with assistive technologies to ensure the expected name is presented to users is particularly important.</li>
            <li>When a user interface is translated into multiple languages, ensure that <code>aria-label</code> values are translated.</li>
          </ol></div>
        </section>

        <section id="naming_with_aria-labelledby"><div class="header-wrapper"><h3 id="x5-4-3-naming-with-referenced-content-via-aria-labelledby">Naming with Referenced Content Via <code>aria-labelledby</code></h3></div>
          
          <p>
            The <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby property</a> enables authors to reference other elements on the page to define an accessible name.
            For example, the following switch is named by the text content of a previous sibling element.
          </p>
          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"night-mode-label"</span>&gt;</span>Night mode<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"switch"</span> <span class="hljs-attr">aria-checked</span>=<span class="hljs-string">"false"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"0"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"night-mode-label"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></code></pre>
          <p>
            Note that while using <code>aria-labelledby</code> is similar in this situation to using an HTML <code>label</code> element with the <code>for</code> attribute, one significant difference is that browsers do not automatically make clicking on the labeling element activate the labeled element; that is an author responsibility.
            However, HTML <code>label</code> cannot be used to label a <code>span</code> element.
            Fortunately, an HTML <code>input</code> with <code>type="checkbox"</code> allows the ARIA <code>switch</code> role, so when feasible, using the following approach creates a more robust solution.
          </p>
          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"night-mode"</span>&gt;</span>Night mode<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"switch"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"night-mode"</span>&gt;</span></code></pre>
  <p>The <code>aria-labelledby</code> property is useful in a wide variety of situations because:</p>
  <ul>
    <li><p>It has the highest precedence when browsers calculate accessible names, i.e., it overrides names from child content and all other naming attributes, including <code>aria-label</code>.</p></li>
    <li><p>It can concatenate content from multiple elements into a single name string.</p></li>
    <li>
      <p>It incorporates content from elements regardless of their visibility, i.e., it even includes content from elements with the HTML <code>hidden</code> attribute, CSS <code>display: none</code>, or CSS <code>visibility: hidden</code> in the calculated name string.</p>
    </li>
    <li><p>It incorporates the value of input elements, i.e., if it references a textbox, the value of the textbox is included in the calculated name string.</p></li>
  </ul>
  <p>An example of referencing a hidden element with <code>aria-labelledby</code> could be a label for a night switch control:</p>
      <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"night-mode-label"</span> <span class="hljs-attr">hidden</span>&gt;</span>Night mode<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"switch"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"night-mode-label"</span>&gt;</span></code></pre>

          <p>
            In some cases, the most effective name for an element is its own content combined with the content of another element.
            Because <code>aria-labelledby</code> has highest precedence in name calculation, in those situations, it is possible to use <code>aria-labelledby</code> to reference both the element itself and the other element.
            In the following example, the "Read more..." link is named by the element itself and the article’s heading, resulting in a name for the link of "Read more... 7 ways you can help save the bees".
          </p>
          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"bees-heading"</span>&gt;</span>7 ways you can help save the bees<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Bees are disappearing rapidly. Here are seven things you can do to help.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"bees-read-more"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"bees-read-more bees-heading"</span>&gt;</span>Read more...<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></code></pre>
          <p>
            When multiple elements are referenced by <code>aria-labelledby</code>, text content from each referenced element is concatenated in the order specified in the <code>aria-labelledby</code> value.
            If an element is referenced more than one time, only the first reference is processed.
            When concatenating content from multiple elements, browsers trim leading and trailing white space and separate content from each element with a single space.
          </p>
          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"download-button"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"download-button download-details"</span>&gt;</span>Download<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"download-details"</span>&gt;</span>PDF, 2.4 MB<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></code></pre>
          <p>In the above example, the accessible name of the button will be "Download PDF, 2.4 MB", with a space between "Download" and "PDF", and not "DownloadPDF, 2.4 MB".</p>
          <div class="warning" id="issue-container-generatedID-39"><div role="heading" class="warning-title marker" id="h-warning-3" aria-level="5"><span>Warning</span></div><ol class="">
            <li>The <code>aria-labelledby</code> property cannot be chained, i.e., if an element with <code>aria-labelledby</code> references another element that also has <code>aria-labelledby</code>, the <code>aria-labelledby</code> attribute on the referenced element will be ignored.</li>
            <li>If an element is referenced by <code>aria-labelledby</code> more than one time during a name calculation, the second and any subsequent references will be ignored.</li>
            <li>There are certain types of elements, such as paragraphs and list items,  that should not be named with <code>aria-labelledby</code>. They are identified in the table in the <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#naming_role_guidance' | relative_url }}">Accessible Name Guidance by Role</a> section.</li>
            <li>
          If <code>aria-labelledby</code> is applied to an element with one of the roles that supports <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#naming_with_child_content' | relative_url }}">naming from child content</a>, content contained in the element and its descendants is hidden from assistive technology users unless it is also referenced by <code>aria-labelledby</code>.
          It is strongly recommended to avoid using this attribute to override content of one of these elements except in rare circumstances where hiding content from assistive technology users is beneficial.
        </li>
            <li>Because calculating the name of an element with <code>aria-labelledby</code> can be complex and reference hidden content, testing with assistive technologies to ensure the expected name is presented to users is particularly important.</li>
          </ol></div>
        </section>

        <section id="naming_with_labels"><div class="header-wrapper"><h3 id="x5-4-4-naming-form-controls-with-the-label-element">Naming Form Controls with the Label Element</h3></div>
          
          <p>
            The HTML <code>label</code> element enables authors to identify content that serves as a label and associate it with a form control.
            When a <code>label</code> element is associated with a form control, browsers calculate an accessible name for the form control from the <code>label</code> content.
          </p>
          <p>
            For example, text displayed adjacent to a checkbox may be visually associated with the checkbox, so it is understood as the checkbox label by users who can perceive that visual association.
            However, unless the text is programmatically associated with the checkbox, assistive technology users will experience a checkbox without a label.
            Wrapping the checkbox and the labeling text in a <code>label</code> element as follows gives the checkbox an accessible name.
          </p>
          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"subscribe"</span>&gt;</span>
  subscribe to our newsletter
<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span></code></pre>
          <p>
            A form control can also be associated with a label by using the <code>for</code> attribute on the <code>label</code> element.
            This allows the label and the form control to be siblings or have different parents in the DOM, but requires adding an <code>id</code> attribute to the form control, which can be error-prone.
            When possible, use the above encapsulation technique for association instead of the following <code>for</code> attribute technique.
          </p>
          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"subscribe"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"subscribe_checkbox"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"subscribe_checkbox"</span>&gt;</span>subscribe to our newsletter<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span></code></pre>
          <p>
            Using the <code>label</code> element is an effective technique for satisfying <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#naming_rule_visible_text' | relative_url }}">Rule 2: Prefer Visible Text</a>.
            It also satisfies <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#naming_rule_native_techniques' | relative_url }}">Rule 3: Prefer Native Techniques</a>.
            Native HTML labels offer an important usability and accessibility advantage over ARIA labeling techniques: browsers automatically make clicking the label equivalent to clicking the form control.
            This increases the hit area of the form control.
          </p>
        </section>

        <section id="naming_with_legends"><div class="header-wrapper"><h3 id="x5-4-5-naming-fieldsets-with-the-legend-element">Naming Fieldsets with the Legend Element</h3></div>
          
          <p>
            The HTML <code>fieldset</code> element can be used to group form controls, and the <code>legend</code> element can be used to give the group a name.
            For example, a group of radio buttons can be grouped together in a <code>fieldset</code>, where the <code>legend</code> element labels the group for the radio buttons.
          </p>
          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">fieldset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">legend</span>&gt;</span>Select your starter class<span class="hljs-tag">&lt;/<span class="hljs-name">legend</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"radio"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"starter-class"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"green"</span>&gt;</span>Green<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"radio"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"starter-class"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"red"</span>&gt;</span>Red<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"radio"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"starter-class"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"blue"</span>&gt;</span>Blue<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">fieldset</span>&gt;</span></code></pre>
          <p>
            This grouping technique is particularly useful for presenting multiple choice questions.
            It enables authors to associate a question with a group of answers.
            If a question is not programmatically associated with its answer options, assistive technology users may access the answers without being aware of the question.
          </p>
          <p>
            Similar benefits can be gained from grouping and naming other types of related form fields using <code>fieldset</code> and <code>legend</code>.
          </p>
          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">fieldset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">legend</span>&gt;</span>Shipping address<span class="hljs-tag">&lt;/<span class="hljs-name">legend</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Full name <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"name"</span> <span class="hljs-attr">required</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Address line 1 <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"address-1"</span> <span class="hljs-attr">required</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Address line 2 <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"address-2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  ...
<span class="hljs-tag">&lt;/<span class="hljs-name">fieldset</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">fieldset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">legend</span>&gt;</span>Billing address<span class="hljs-tag">&lt;/<span class="hljs-name">legend</span>&gt;</span>
  ...
<span class="hljs-tag">&lt;/<span class="hljs-name">fieldset</span>&gt;</span></code></pre>
          <p>Using the <code>legend</code> element to name a <code>fieldset</code> element satisfies <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#naming_rule_visible_text' | relative_url }}">Rule 2: Prefer Visible Text</a> and <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#naming_rule_native_techniques' | relative_url }}">Rule 3: Prefer Native Techniques</a>.</p>
        </section>

        <section id="naming_with_captions"><div class="header-wrapper"><h3 id="x5-4-6-naming-tables-and-figures-with-captions">Naming Tables and Figures with Captions</h3></div>
          
          <p>
            The accessible name for HTML <code>table</code> and <code>figure</code> elements can be derived from a child <code>caption</code> or <code>figcaption</code> element, respectively.
            Tables and figures often have a caption to explain what they are about, how to read them, and sometimes giving them numbers used to refer to them in surrounding prose.
            Captions can help all users better understand content, but are especially helpful to users of assistive technologies.
          </p>
          <p>
            In HTML, the <code>table</code> element marks up a data table, and can be provided with a caption using the <code>caption</code> element.
            If the <code>table</code> element does not have <code>aria-label</code> or <code>aria-labelledby</code>, then the <code>caption</code> will be used as the accessible name.
            For example, the accessible name of the following table is <q>Special opening hours</q>.
          </p>
          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">table</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">caption</span>&gt;</span>Special opening hours<span class="hljs-tag">&lt;/<span class="hljs-name">caption</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>30 May<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Closed<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>6 June<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>11:00-16:00<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span></code></pre>
          <p>The following example gives the table a number (<q>Table 1</q>) so it can be referenced. </p>
          <pre><code aria-busy="false" class="hljs css">&lt;<span class="hljs-selector-tag">table</span>&gt;
 &lt;<span class="hljs-selector-tag">caption</span>&gt;<span class="hljs-selector-tag">Table</span> <span class="hljs-number">1</span>. Traditional dietary intake of Okinawans and other Japanese circa <span class="hljs-number">1950</span>&lt;/<span class="hljs-selector-tag">caption</span>&gt;
 &lt;<span class="hljs-selector-tag">thead</span>&gt;
  &lt;<span class="hljs-selector-tag">tr</span>&gt;
   &lt;<span class="hljs-selector-tag">th</span>&gt;&lt;/<span class="hljs-selector-tag">th</span>&gt;
   &lt;<span class="hljs-selector-tag">th</span>&gt;Okinawa, <span class="hljs-number">1949</span>&lt;/<span class="hljs-selector-tag">th</span>&gt;
   &lt;<span class="hljs-selector-tag">th</span>&gt;Japan, <span class="hljs-number">1950</span>&lt;/<span class="hljs-selector-tag">th</span>&gt;
  &lt;/<span class="hljs-selector-tag">tr</span>&gt;
 &lt;<span class="hljs-selector-tag">tbody</span>&gt;
  &lt;<span class="hljs-selector-tag">tr</span>&gt;
   &lt;<span class="hljs-selector-tag">th</span>&gt;Total calories&lt;/<span class="hljs-selector-tag">th</span>&gt;
   &lt;<span class="hljs-selector-tag">td</span>&gt;<span class="hljs-number">1785</span>&lt;/<span class="hljs-selector-tag">td</span>&gt;
   &lt;<span class="hljs-selector-tag">td</span>&gt;<span class="hljs-number">2068</span>&lt;/<span class="hljs-selector-tag">td</span>&gt;

  <span class="hljs-selector-attr">[...]</span>

&lt;/<span class="hljs-selector-tag">table</span>&gt;</code></pre>
          <p>Note: Above table content is from <a href="https://www.ncbi.nlm.nih.gov/pubmed/17986602">Caloric restriction, the traditional Okinawan diet, and healthy aging: the diet of the world's longest-lived people and its potential impact on morbidity and life span</a>.</p>
          <p>
            If a <code>table</code> is named using <code>aria-label</code> or <code>aria-labelledby</code>, then a <code>caption</code> element, if present, will become an accessible description.
            For an example, see <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#describing_with_captions' | relative_url }}">Describing Tables and Figures with Captions</a>.
          </p>
          <p>
            Similarly, an HTML <code>figure</code> element can be given a caption using the <code>figcaption</code> element.
            The caption can appear before or after the figure, but it is more common for figures to have the caption after.
          </p>
          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">figure</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Painting of a person walking in a desert."</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"Hole_JesusalDesierto.jpg"</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">figcaption</span>&gt;</span>Jesus entering the desert as imagined by William Hole, 1908<span class="hljs-tag">&lt;/<span class="hljs-name">figcaption</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">figure</span>&gt;</span></code></pre>
          <p>
            Like with <code>table</code> elements, if a <code>figure</code> is not named using <code>aria-label</code> or <code>aria-labelledby</code>, the content of the <code>figcaption</code> element will be used as the accessible name.
            However unlike <code>table</code> elements, if the <code>figcaption</code> element is not used for the name, it does not become an accessible description unless it is referenced by <code>aria-describedby</code>.
            Nevertheless, assistive technologies will render the content of a <code>figcaption</code> regardless of whether it is used as a name, description, or neither.
          </p>
          <p>Using the <code>caption</code> element to name a <code>table</code> element, or a <code>figcaption</code> element to name a <code>figure</code> element, satisfies <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#naming_rule_visible_text' | relative_url }}">Rule 2: Prefer Visible Text</a> and <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#naming_rule_native_techniques' | relative_url }}">Rule 3: Prefer Native Techniques</a>.</p>
        </section>

        <section id="naming_with_fallback"><div class="header-wrapper"><h3 id="x5-4-7-fallback-names-derived-from-titles-and-placeholders">Fallback Names Derived from Titles and Placeholders</h3></div>
          
          <p>
            When an accessible name is not provided using one of the primary techniques (e.g., the <code>aria-label</code> or <code>aria-labelledby</code> attributes), or native markup techniques (e.g., the HTML <code>label</code> element, or the <code>alt</code> attribute of the HTML <code>img</code> element), browsers calculate an accessible name from other attributes as a fallback mechanism.
            Because the attributes used in fallback name calculation are not intended for naming, they typically yield low quality accessible names that are not effective.
So, As advised by <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#naming_rule_avoid_fallback' | relative_url }}">Rule 4: Avoid Browser Fallback</a>, prefer the explicit labeling techniques described above over fallback techniques described in this section.
          </p>

          <p>
            Any HTML element can have a <code>title</code> attribute specified.
            The <code>title</code> attribute may be used as the element's fallback accessible name.
            The <code>title</code> attribute is commonly presented visually as a tooltip when the user hovers over the element with a pointing device, which is not particularly discoverable, and is also not accessible to visual users without a pointing device.
          </p>

          <p>For example, a <code>fieldset</code> element without a <code>legend</code> element child, but with a <code>title</code> attribute, gets its accessible name from the <code>title</code> attribute.</p>

          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">fieldset</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Select your starter class"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"radio"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"starter-class"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"green"</span>&gt;</span>Green<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"radio"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"starter-class"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"red"</span>&gt;</span>Red<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"radio"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"starter-class"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"blue"</span>&gt;</span>Blue<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">fieldset</span>&gt;</span></code></pre>

          <p>
            For the HTML <code>input</code> and <code>textarea</code> elements, the <code>placeholder</code> attribute is used as a fallback labeling mechanism if nothing else (including the <code>title</code> attribute) results in a label.
            It is better to use a <code>label</code> element, since it does not disappear visually when the user focuses the form control.
          </p>

          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-comment">&lt;!-- Using a &lt;label&gt; is recommended --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Search <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">search</span> <span class="hljs-attr">name</span>=<span class="hljs-string">q</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>

<span class="hljs-comment">&lt;!-- A placeholder is used as fallback --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">search</span> <span class="hljs-attr">name</span>=<span class="hljs-string">q</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Search"</span>&gt;</span></code></pre>
        </section>
      </section>

      <section id="naming_effectively"><div class="header-wrapper"><h2 id="x5-5-composing-effective-and-user-friendly-accessible-names">Composing Effective and User-friendly Accessible Names</h2></div>
        
        <p>
          For assistive technology users, especially screen reader users, the quality of accessible names is one of the most  significant contributors to usability.
          Names that do not provide enough information reduce users' effectiveness while names that are too long reduce efficiency.
          And, names that are difficult to understand reduce effectiveness, efficiency, and enjoyment.
        </p>
        <p>The following guidelines provide a starting point for crafting user friendly names.</p>
        <ul>
          <li>
            Convey function or purpose, not form.
            For example, if an icon that looks like the letter <q>X</q> closes a dialog, name it <q>Close</q>, not <q>X</q>.
            Similarly, if a set of navigation links in the left side bar navigate among the product pages in a shopping site, name the navigation region <q>Product</q>, not <q>Left</q>.
          </li>
          <li>
            Put the most distinguishing and important words first.
            Often, for interactive elements that perform an action, this means a verb is the first word.
            For instance, if a list of contacts displays <q>Edit</q>, <q>Delete</q>, and <q>Actions</q> buttons for each contact,
            then <q>Edit John Doe</q>, <q>Delete John Doe</q>, and <q>Actions for John Doe</q> would be better accessible names than <q>John Doe edit</q>, <q>John Doe delete</q>, and <q>John Doe actions</q>.
            By placing the verb first in the name, screen reader users can more easily and quickly distinguish the buttons from one another as well as from the element that opens the contact card for John Doe.
          </li>
          <li>
            Be concise. For many elements, one to three words is sufficient.
            Only add more words when necessary.
          </li>
          <li>
            Do NOT include a <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> role name in the accessible name.
            For example, do not include the word <q>button</q> in the name of a button, the word <q>image</q> in the name of an image, or the word <q>navigation</q> in the name of a navigation region.
            Doing so would create duplicate screen reader output since screen readers convey the role of an element in addition to its name.
          </li>
          <li>
            Create unique names for elements with the same role unless the elements are actually identical.
            For example, ensure every link on a page has a different name except in cases where multiple links reference the same location.
            Similarly, give every navigation region on a page a different name unless there are regions with identical content that performs identical navigation functions.
          </li>
          <li>
            Start names with a capital letter; it helps some screen readers speak them with appropriate inflection.
            Do not end names with a period; they are not sentences.
          </li>
        </ul>
      </section>

      <section id="naming_role_guidance"><div class="header-wrapper"><h2 id="x5-6-accessible-name-guidance-by-role"><span id="naming_role_guidance_heading">Accessible Name Guidance by Role</span></h2></div>
        
        <p>
          Certain elements always require a name, others may usually or sometimes require a name, and still others should never be named.
          The table below lists all ARIA roles and provides the following information for each :
        </p>
        <dl>
          <dt>Necessity of Naming</dt>
          <dd>
            Indicates how necessary it is for authors to add a naming attribute or element to supplement or override the content of an element with the specified role.
            This column may include one of the following values:
            <ul>
              <li>
                Required <strong>Only If</strong> Content Insufficient: An element with this role is named by its descendant content.
                If <code>aria-label</code> or <code>aria-labelledby</code> is applied, content contained in the element and its descendants is hidden from assistive technology users unless it is also referenced by <code>aria-labelledby</code>.
                Avoid hiding descendant content except in the rare circumstances where doing so benefits assistive technology users.
              </li>
              <li>Required: The ARIA specification requires authors to provide a name; a missing name causes accessibility validators to report an error.</li>
              <li>Recommended: Providing a name is strongly recommended.</li>
              <li>Discretionary: Naming is either optional or, in the circumstances described in the guidance column, is discouraged.</li>
              <li>Do Not Name: Naming is strongly discouraged even if it is technically permitted; often assistive technologies do not render a name even if provided.</li>
              <li>Prohibited: The ARIA specification does not permit the element to be named; If a name is specified, accessibility validators will report an error.</li>
            </ul>
          </dd>
          <dt>Guidance:</dt>
          <dd>
            Provides information to help determine if providing a name is beneficial, and if so, describes any recommended techniques.
          </dd>
        </dl>
        <div class="table-wrap"><table aria-labelledby="naming_role_guidance_heading">
          <thead>
            <tr>
              <th>role</th>
              <th>Necessity of Naming</th>
              <th>Guidance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="https://w3c.github.io/aria/#alert" class="role-reference"><code>alert</code></a></td>
              <td>Discretionary</td>
              <td>
                Some screen readers announce the name of an alert before announcing the content of the alert.
                Thus, <code>aria-label</code> provides a method for prefacing the visible content of an alert with text that is not displayed as part of the alert.
                Using <code>aria-label</code> is functionally equivalent to providing off-screen text in the contents of the alert, except off-screen text would be announced by screen readers that do not support <code>aria-label</code> on <code>alert</code> elements.
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#alertdialog" class="role-reference"><code>alertdialog</code></a></td>
              <td>Required</td>
              <td>Use <code>aria-labelledby</code> if a visible label is present, otherwise use <code>aria-label</code>.</td>
          </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#application" class="role-reference"><code>application</code></a></td>
              <td>Required</td>
              <td>Use <code>aria-labelledby</code> if a visible label is present, otherwise use <code>aria-label</code>.</td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#article" class="role-reference"><code>article</code></a></td>
              <td>Recommended</td>
              <td>
                <ul>
                  <li>Recommended to distinguish articles from one another; helps users when navigating among articles.</li>
                  <li>Use <code>aria-labelledby</code> if a visible label is present, otherwise use <code>aria-label</code>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#banner" class="role-reference"><code>banner</code></a></td>
              <td>Discretionary</td>
              <td>
                <ul>
                  <li>Necessary in the uncommon circumstance where two banner landmark regions are present on the same page. It is otherwise optional.</li>
                  <li>Named using <code>aria-labelledby</code> if a visible label is present, otherwise with <code>aria-label</code>.</li>
                  <li>See the <a href="{{ '/ARIA/apg/practices/landmark-regions/#aria_lh_banner' | relative_url }}">Banner Landmark</a> section.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#blockquote" class="role-reference"><code>blockquote</code></a></td>
              <td>Discretionary</td>
              <td>
                If a visible label is present, associating it with the blockquote by using <code>aria-labelledby</code> could benefit some assistive technology users.
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#button" class="role-reference"><code>button</code></a></td>
              <td>Required <strong>Only If</strong> Content Insufficient</td>
              <td>
                <ul>
                  <li>Warning! Using <code>aria-label</code> or <code>aria-labelledby</code> will hide descendant content from assistive technologies.</li>
                  <li>Ideally named by visible, descendant content.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#caption" class="role-reference"><code>caption</code></a></td>
              <td>Prohibited</td>
              <td></td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#cell" class="role-reference"><code>cell</code></a></td>
              <td>Required <strong>Only If</strong> Content Insufficient</td>
              <td>
                <ul>
                  <li>Warning! Using <code>aria-label</code> or <code>aria-labelledby</code> will hide descendant content from assistive technologies.</li>
                  <li>Ideally named by visible, descendant content.</li>
                  <li>Note that a name is not required; assistive technologies expect an empty cell in a table to be represented by an empty name.</li>
                  <li>Note that associated row or column headers do not name a <code>cell</code>; the name of a cell in a table is its content. Headers are complementary information.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#checkbox" class="role-reference"><code>checkbox</code></a></td>
              <td>Required <strong>Only If</strong> Content Insufficient</td>
              <td>
                <ul>
                  <li>Warning! Using <code>aria-label</code> or <code>aria-labelledby</code> will hide any descendant content from assistive technologies.</li>
                  <li>If based on HTML <code>type="checkbox"</code>, use a <code>label</code> element.</li>
                  <li>Otherwise, reference visible content via <code>aria-labelledby</code>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#code" class="role-reference"><code>code</code></a></td>
              <td>Prohibited</td>
              <td></td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#columnheader" class="role-reference"><code>columnheader</code></a></td>
              <td>Required <strong>Only If</strong> Content Insufficient</td>
              <td>
                <ul>
                  <li>Warning! Using <code>aria-label</code> or <code>aria-labelledby</code> will hide descendant content from assistive technologies.</li>
                  <li>Ideally named by visible, descendant content.</li>
                  <li>If the <code>columnheader</code> role is implied from an HTML <code>th</code>, the HTML <code>abbr</code> attribute can be used to specify an abbreviated version of the name that is only announced when screen readers are reading an associated <code>cell</code> within the <code>table</code>, <code>grid</code>, or <code>treegrid</code>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#combobox" class="role-reference"><code>combobox</code></a></td>
              <td>Required</td>
              <td>
                <ul>
                  <li>If the <code>combobox</code> role is applied to an HTML <code>select</code> or <code>input</code> element, can be named with an HTML <code>label</code> element.</li>
                  <li>Otherwise use <code>aria-labelledby</code> if a visible label is present.</li>
                  <li>Use <code>aria-label</code> if a visible label is not present.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#complementary" class="role-reference"><code>complementary</code></a></td>
              <td>Recommended</td>
              <td>
                <ul>
                  <li>Naming is necessary when two complementary landmark regions are present on the same page.</li>
                  <li>Naming is recommended even when one complementary region is present to help users understand the purpose of the region's content when navigating among landmark regions.</li>
                  <li>Use <code>aria-labelledby</code> if a visible label is present, otherwise use <code>aria-label</code>.</li>
                  <li>See the <a href="{{ '/ARIA/apg/practices/landmark-regions/#aria_lh_complementary' | relative_url }}">Complementary Landmark</a> section.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#contentinfo" class="role-reference"><code>contentinfo</code></a></td>
              <td>Discretionary</td>
              <td>
                <ul>
                  <li>Necessary in the uncommon circumstance where two contentinfo landmark regions are present on the same page. It is otherwise optional.</li>
                  <li>Named using <code>aria-labelledby</code> if a visible label is present, otherwise with <code>aria-label</code>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#definition" class="role-reference"><code>definition</code></a></td>
              <td>Recommended</td>
              <td>Reference the term being defined with <code>role="term"</code>, using <code>aria-labelledby</code>.</td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#deletion" class="role-reference"><code>deletion</code></a></td>
              <td>Prohibited</td>
              <td></td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#dialog" class="role-reference"><code>dialog</code></a></td>
              <td>Required</td>
              <td>Use <code>aria-labelledby</code> if a visible label is present, otherwise use <code>aria-label</code>.</td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#directory" class="role-reference"><code>directory</code></a></td>
              <td>Discretionary</td>
              <td>
                <ul>
                  <li>Naming can help users understand the purpose of the directory.</li>
                  <li>Use <code>aria-labelledby</code> if a visible label is present, otherwise use <code>aria-label</code>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#document" class="role-reference"><code>document</code></a></td>
              <td>Discretionary</td>
              <td>
                Elements with the <code>document</code> role are contained within an element with the <code>application</code> role, which is required to have a name.
                Typically, the name of the <code>application</code> element will provide sufficient context and identity for the <code>document</code> element.
                Because the <code>application</code> element is used only to create unusual, custom widgets, careful assessment is necessary to determine whether or not adding an accessible name is beneficial.
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#emphasis" class="role-reference"><code>emphasis</code></a></td>
              <td>Prohibited</td>
              <td></td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#feed" class="role-reference"><code>feed</code></a></td>
              <td>Recommended</td>
              <td>
                <ul>
                  <li>Helps screen reader users understand the context and purpose of the feed.</li>
                  <li>Use <code>aria-labelledby</code> if a visible label is present, otherwise use <code>aria-label</code>.</li>
                  <li>See the <a href="{{ '/ARIA/apg/patterns/feed/' | relative_url }}">Feed Design Pattern</a>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#figure" class="role-reference"><code>figure</code></a></td>
              <td>Recommended</td>
              <td>
                <ul>
                  <li>For HTML, use the <code>figure</code> and <code>figcaption</code> elements. The <code>figcaption</code> will serve as the accessible name for the <code>figure</code>. See the <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#naming_with_captions' | relative_url }}">Naming Tables and Figures with Captions</a> section.</li>
                  <li>When not using HTML, or when retrofitting legacy HTML, use the <code>aria-labelledby</code> on the figure, pointing to the figure's caption.</li>
                  <li>If there is no visible caption, <code>aria-label</code> can be used.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#form" class="role-reference"><code>form</code></a></td>
              <td>Recommended</td>
              <td>
                <ul>
                  <li>Helps screen reader users understand the context and purpose of the form landmark.</li>
                  <li>Use <code>aria-labelledby</code> if a visible label is present, otherwise use <code>aria-label</code>.</li>
                  <li>See the <a href="{{ '/ARIA/apg/practices/landmark-regions/#aria_lh_form' | relative_url }}">Form Landmark</a> section.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#generic" class="role-reference"><code>generic</code></a></td>
              <td>Prohibited</td>
              <td></td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#grid" class="role-reference"><code>grid</code></a></td>
              <td>Required</td>
              <td>
                <ul>
                  <li>If the <code>grid</code> is applied to an HTML <code>table</code> element, then the accessible name can be derived from the table's <code>caption</code> element.</li>
                  <li>Otherwise, use <code>aria-labelledby</code> if a visible label is present, otherwise use <code>aria-label</code>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#gridcell" class="role-reference"><code>gridcell</code></a></td>
              <td>Required <strong>Only If</strong> Content Insufficient</td>
              <td>
                <ul>
                  <li>Warning! Using <code>aria-label</code> or <code>aria-labelledby</code> will hide descendant content from assistive technologies.</li>
                  <li>Ideally named by visible, descendant content.</li>
                  <li>Note that a name is not required; assistive technologies expect an empty cell in a grid to be represented by an empty name.</li>
                  <li>Note that associated row or column headers do not name a <code>gridcell</code>; the name of a cell in a grid is its content. Headers are complementary information.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#group" class="role-reference"><code>group</code></a></td>
              <td>Discretionary</td>
              <td>
                <ul>
                  <li>When using the HTML <code>fieldset</code> element, the accessible name can be derived from the <code>legend</code> element.</li>
                  <li>When using the HTML <code>details</code> element, do not provide an accessible name for this element. The user interacts with the <code>summary</code> element, and that can derive its accessible name from its contents.</li>
                  <li>When using the HTML <code>optgroup</code> element, use the <code>label</code> attribute.</li>
                  <li>Otherwise, use <code>aria-labelledby</code> if a visible label is present, otherwise use <code>aria-label</code>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#heading" class="role-reference"><code>heading</code></a></td>
              <td>Required <strong>Only If</strong> Content Insufficient</td>
              <td>
                <ul>
                  <li>Warning! Using <code>aria-label</code> or <code>aria-labelledby</code> will hide descendant content from assistive technologies.</li>
                  <li>Ideally named by visible, descendant content.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#insertion" class="role-reference"><code>insertion</code></a></td>
              <td>Prohibited</td>
              <td></td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#img" class="role-reference"><code>img</code></a></td>
              <td>Required</td>
              <td>For the HTML <code>img</code> element, use the <code>alt</code> attribute. For other elements with the <code>img</code> role, use <code>aria-labelledby</code> or <code>aria-label</code>.</td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#link" class="role-reference"><code>link</code></a></td>
              <td>Required <strong>Only If</strong> Content Insufficient</td>
              <td>
                <ul>
                  <li>Warning! Using <code>aria-label</code> or <code>aria-labelledby</code> will hide descendant content from assistive technologies.</li>
                  <li>Ideally named by visible, descendant content.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#list" class="role-reference"><code>list</code></a></td>
              <td>Discretionary</td>
              <td>
                <ul>
                  <li>Potentially beneficial for users of screen readers that support both list names and navigation among lists on a page.</li>
                  <li>Potentially a source of distracting or undesirable screen reader verbosity, especially if nested within a named container, such as a navigation region.</li>
                  <li>Can be named using <code>aria-labelledby</code> if a visible label is present, otherwise with <code>aria-label</code>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#listbox" class="role-reference"><code>listbox</code></a></td>
              <td>Required</td>
              <td>
                <ul>
                  <li>If the <code>listbox</code> role is applied to an HTML <code>select</code> element (with the <code>multiple</code> attribute or a <code>size</code> attribute having a value greater than 1), can be named with an HTML <code>label</code> element.</li>
                  <li>Otherwise use <code>aria-labelledby</code> if a visible label is present.</li>
                  <li>Use <code>aria-label</code> if a visible label is not present.</li>
                  <li>See the <a href="{{ '/ARIA/apg/patterns/listbox/' | relative_url }}">Listbox Design Pattern</a>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#listitem" class="role-reference"><code>listitem</code></a></td>
              <td>Do Not Name</td>
              <td>Naming is not supported by assistive technologies; it is necessary to include relevant content within the list item.</td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#log" class="role-reference"><code>log</code></a></td>
              <td>Discretionary</td>
              <td>
                Some screen readers announce the name of a log element before announcing the content of the log element.
                Thus, <code>aria-label</code> provides a method for prefacing the visible content of a log element with text that is not displayed as part of the log element.
                Using <code>aria-label</code> is functionally equivalent to providing off-screen text in the contents of the log element, except off-screen text would be announced by screen readers that do not support <code>aria-label</code> on <code>log</code> elements.
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#main" class="role-reference"><code>main</code></a></td>
              <td>Discretionary</td>
              <td>
                <ul>
                  <li>Potentially helpful for orienting assistive technology users, especially in single-page applications where main content changes happen without generating a page load event.</li>
                  <li>Can be named using <code>aria-labelledby</code> if a visible label is present, otherwise with <code>aria-label</code>.</li>
                  <li>See the <a href="{{ '/ARIA/apg/practices/landmark-regions/#aria_lh_main' | relative_url }}">Main Landmark</a> section.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#marquee" class="role-reference"><code>marquee</code></a></td>
              <td>Discretionary</td>
              <td>Use <code>aria-labelledby</code> if a visible label is present, otherwise use <code>aria-label</code>.</td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#math" class="role-reference"><code>math</code></a></td>
              <td>Recommended</td>
              <td>
                <ul>
                  <li>If the <code>math</code> element has only presentational children and the accessible name is intended to convey the mathematical expression, use <code>aria-label</code> to provide a string that represents the expression.</li>
                  <li>If the <code>math</code> element contains navigable content that conveys the mathematical expression and a visible label for the expression is present, use <code>aria-labelledby</code>.</li>
                  <li>Otherwise, use a<code>aria-label</code> to name the expression, e.g., <code>aria-label="Pythagorean Theorem"</code>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#menu" class="role-reference"><code>menu</code></a></td>
              <td>Recommended</td>
              <td>
                <ul>
                  <li>Use <code>aria-labelledby</code> to refer to the menuitem or button that controls this element's display.</li>
                  <li>Otherwise, use <code>aria-label</code>.</li>
                  <li>See the <a href="{{ '/ARIA/apg/patterns/menu/' | relative_url }}">Menu or Menu bar Design Pattern</a>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#menubar" class="role-reference"><code>menubar</code></a></td>
              <td>Recommended</td>
              <td>
                <ul>
                  <li>
                    Helps screen reader users understand the context and purpose of <code>menuitem</code> elements in a <code>menubar</code>.
                    Naming a <code>menubar</code> is comparable to naming a menu button.
                    The name of a <code>button</code> that opens a <code>menu</code> conveys the purpose of the menu it opens.
                    Since a <code>menubar</code> element is displayed persistently, a name on the <code>menubar</code> can serve that same purpose.
                  </li>
                  <li>Use <code>aria-labelledby</code> if a visible label is present, otherwise use <code>aria-label</code>.</li>
                  <li>See the <a href="{{ '/ARIA/apg/patterns/menu/' | relative_url }}">Menu or Menu bar Design Pattern</a>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#menuitem" class="role-reference"><code>menuitem</code></a></td>
              <td>Required <strong>Only If</strong> Content Insufficient</td>
              <td>
                <ul>
                  <li>Warning! Using <code>aria-label</code> or <code>aria-labelledby</code> will hide any descendant content from assistive technologies.</li>
                  <li>Ideally named by visible, descendant content.</li>
                  <li>Note: content contained within a child <code>menu</code> is automatically excluded from the accessible name calculation.</li>
                  <li>See the <a href="{{ '/ARIA/apg/patterns/menu/' | relative_url }}">Menu or Menu bar Design Pattern</a>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#menuitemcheckbox" class="role-reference"><code>menuitemcheckbox</code></a></td>
              <td>Required <strong>Only If</strong> Content Insufficient</td>
              <td>
                <ul>
                  <li>Warning! Using <code>aria-label</code> or <code>aria-labelledby</code> will hide any descendant content from assistive technologies.</li>
                  <li>Ideally named by visible, descendant content.</li>
                  <li>See the <a href="{{ '/ARIA/apg/patterns/menu/' | relative_url }}">Menu or Menu bar Design Pattern</a>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#menuitemradio" class="role-reference"><code>menuitemradio</code></a></td>
              <td>Required <strong>Only If</strong> Content Insufficient</td>
              <td>
                <ul>
                  <li>Warning! Using <code>aria-label</code> or <code>aria-labelledby</code> will hide any descendant content from assistive technologies.</li>
                  <li>Ideally named by visible, descendant content.</li>
                  <li>See the <a href="{{ '/ARIA/apg/patterns/menu/' | relative_url }}">Menu or Menu bar Design Pattern</a>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#meter" class="role-reference"><code>meter</code></a></td>
              <td>Required</td>
              <td>
                <ul>
                  <li>If based on an HTML <code>meter</code> element, can be named with an HTML <code>label</code> element.</li>
                  <li>Otherwise use <code>aria-labelledby</code> if a visible label is present.</li>
                  <li>Use <code>aria-label</code> if a visible label is not present.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#navigation" class="role-reference"><code>navigation</code></a></td>
              <td>Recommended</td>
              <td>
                <ul>
                  <li>Helps screen reader users understand the context and purpose of the navigation landmark.</li>
                  <li>Use <code>aria-labelledby</code> if a visible label is present, otherwise use <code>aria-label</code>.</li>
                  <li>See the <a href="{{ '/ARIA/apg/practices/landmark-regions/#aria_lh_navigation' | relative_url }}">Navigation Landmark</a> section.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#none" class="role-reference"><code>none</code></a></td>
              <td>Prohibited</td>
              <td>An element with <code>role="none"</code> is not part of the accessibility tree (except in error cases). Do not use <code>aria-labelledby</code> or <code>aria-label</code>.</td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#note" class="role-reference"><code>note</code></a></td>
              <td>Discretionary</td>
              <td>
                <ul>
                  <li>Naming is optional, but can help screen reader users understand the context and purpose of the note.</li>
                  <li>Named using <code>aria-labelledby</code> if a visible label is present, otherwise with <code>aria-label</code>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#option" class="role-reference"><code>option</code></a></td>
              <td>Required <strong>Only If</strong> Content Insufficient</td>
              <td>
                <ul>
                  <li>Warning! Using <code>aria-label</code> or <code>aria-labelledby</code> will hide any descendant content from assistive technologies.</li>
                  <li>Ideally named by visible, descendant content.</li>
                  <li>See the <a href="{{ '/ARIA/apg/patterns/combobox/' | relative_url }}">Combobox Design Pattern</a>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#paragraph" class="role-reference"><code>paragraph</code></a></td>
              <td>Prohibited</td>
              <td></td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#presentation" class="role-reference"><code>presentation</code></a></td>
              <td>Prohibited</td>
              <td>An element with <code>role="presentation"</code> is not part of the accessibility tree (except in error cases). Do not use <code>aria-labelledby</code> or <code>aria-label</code>.</td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#progressbar" class="role-reference"><code>progressbar</code></a></td>
              <td>Required</td>
              <td>
                <ul>
                  <li>If the <code>progressbar</code> role is applied to an HTML <code>progress</code> element, can be named with an HTML <code>label</code> element.</li>
                  <li>Otherwise use <code>aria-labelledby</code> if a visible label is present.</li>
                  <li>Use <code>aria-label</code> if a visible label is not present.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#radio" class="role-reference"><code>radio</code></a></td>
              <td>Required <strong>Only If</strong> Content Insufficient</td>
              <td>
                <ul>
                  <li>Warning! Using <code>aria-label</code> or <code>aria-labelledby</code> will hide any descendant content from assistive technologies.</li>
                  <li>If based on HTML <code>type="checkbox"</code>, use a <code>label</code> element.</li>
                  <li>Otherwise, reference visible content via <code>aria-labelledby</code>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#radiogroup" class="role-reference"><code>radiogroup</code></a></td>
              <td>Required</td>
              <td>
                <ul>
                  <li>Recommended to help assistive technology users understand the purpose of the group of <code>radio</code> buttons.</li>
                  <li>Use <code>aria-labelledby</code> if a visible label is present, otherwise use <code>aria-label</code>.</li>
                  <li>See the <a href="{{ '/ARIA/apg/patterns/radiobutton/' | relative_url }}">Radio Group Design Pattern</a>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#region" class="role-reference"><code>region</code></a></td>
              <td>Required</td>
              <td>
                <ul>
                  <li>Helps screen reader users understand the context and purpose of the landmark.</li>
                  <li>Use <code>aria-labelledby</code> if a visible label is present, otherwise use <code>aria-label</code>.</li>
                  <li>See the <a href="{{ '/ARIA/apg/practices/landmark-regions/#aria_lh_region' | relative_url }}">Region Landmark</a> section.</li>
                </ul>
            </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#row" class="role-reference"><code>row</code></a></td>
              <td>
                Required <strong>Only If</strong> Content Insufficient
                <strong>AND</strong> descendant of a <code>treegrid</code>
                <strong>AND</strong> the row is focusable
              </td>
              <td>
                When <code>row</code> elements are focusable in a <a href="{{ '/ARIA/apg/patterns/treegrid/' | relative_url }}">treegrid</a>, screen readers announce the entire contents of a row when navigating by row.
                This is typically the most appropriate behavior.
                However, in some circumstances, it could be beneficial to change the order in which cells are announced or exclude announcement of certain cells by using <code>aria-labelledby</code> to specify which cells to announce.
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#rowgroup" class="role-reference"><code>rowgroup</code></a></td>
              <td>Do Not Name</td>
              <td>Naming is not supported by assistive technologies.</td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#rowheader" class="role-reference"><code>rowheader</code></a></td>
              <td>Required <strong>Only If</strong> Content Insufficient</td>
              <td>
                <ul>
                  <li>Warning! Using <code>aria-label</code> or <code>aria-labelledby</code> will hide descendant content from assistive technologies.</li>
                  <li>Ideally named by visible, descendant content.</li>
                  <li>If the <code>rowheader</code> role is implied from an HTML <code>th</code>, the HTML <code>abbr</code> attribute can be used to specify an abbreviated version of the name that is only announced when screen readers are reading an associated <code>cell</code> within the <code>table</code>, <code>grid</code>, or <code>treegrid</code>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#scrollbar" class="role-reference"><code>scrollbar</code></a></td>
              <td>Discretionary</td>
              <td>
                <ul>
                  <li>Naming is optional, but can potentially help screen reader users understand the purpose of the scrollbar. The purpose is also conveyed using the <code>aria-controls</code> attribute, which is required for <code>scrollbar</code>.</li>
                  <li>Named using <code>aria-labelledby</code> if a visible label is present, otherwise with <code>aria-label</code>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#search" class="role-reference"><code>search</code></a></td>
              <td>Recommended</td>
              <td>
                <ul>
                  <li>Helps screen reader users understand the context and purpose of the search landmark.</li>
                  <li>Named using <code>aria-labelledby</code> if a visible label is present, otherwise with <code>aria-label</code>.</li>
                  <li>See the <a href="{{ '/ARIA/apg/practices/landmark-regions/#aria_lh_search' | relative_url }}">Search Landmark</a> section.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#searchbox" class="role-reference"><code>searchbox</code></a></td>
              <td>Required</td>
              <td>
                <ul>
                  <li>If the <code>searchbox</code> role is applied to an HTML <code>input</code> element, can be named with an HTML <code>label</code> element.</li>
                  <li>Otherwise use <code>aria-labelledby</code> if a visible label is present.</li>
                  <li>Use <code>aria-label</code> if a visible label is not present.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#separator" class="role-reference"><code>separator</code></a></td>
              <td>Discretionary</td>
              <td>
                <ul>
                  <li>Recommended if there is more than one focusable <code>separator</code> element on the page.</li>
                  <li>Can help assistive technology users understand the purpose of the separator.</li>
                  <li>Named using <code>aria-labelledby</code> if a visible label is present, otherwise with <code>aria-label</code>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#slider" class="role-reference"><code>slider</code></a></td>
              <td>Required</td>
              <td>
                <ul>
                  <li>If the <code>slider</code> role is applied to an HTML <code>input</code> element, can be named with an HTML <code>label</code> element.</li>
                  <li>Otherwise use <code>aria-labelledby</code> if a visible label is present.</li>
                  <li>Use <code>aria-label</code> if a visible label is not present.</li>
                  <li>See the <a href="{{ '/ARIA/apg/patterns/slider/' | relative_url }}">Slider Design Pattern</a> and the <a href="{{ '/ARIA/apg/patterns/slidertwothumb/' | relative_url }}">Slider (Multi-Thumb) Design Pattern</a>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#spinbutton" class="role-reference"><code>spinbutton</code></a></td>
              <td>Required</td>
              <td>
                <ul>
                  <li>If the <code>textbox</code> role is applied to an HTML <code>input</code> element, can be named with an HTML <code>label</code> element.</li>
                  <li>Otherwise use <code>aria-labelledby</code> if a visible label is present.</li>
                  <li>Use <code>aria-label</code> if a visible label is not present.</li>
                  <li>See the <a href="{{ '/ARIA/apg/patterns/spinbutton/' | relative_url }}">Spinbutton Design Pattern</a>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#status" class="role-reference"><code>status</code></a></td>
              <td>Discretionary</td>
              <td>
                Some screen readers announce the name of a status element before announcing the content of the status element.
                Thus, <code>aria-label</code> provides a method for prefacing the visible content of a status element with text that is not displayed as part of the status element.
                Using <code>aria-label</code> is functionally equivalent to providing off-screen text in the contents of the status element, except off-screen text would be announced by screen readers that do not support <code>aria-label</code> on <code>status</code> elements.
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#strong" class="role-reference"><code>strong</code></a></td>
              <td>Prohibited</td>
              <td></td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#subscript" class="role-reference"><code>subscript</code></a></td>
              <td>Prohibited</td>
              <td></td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#superscript" class="role-reference"><code>superscript</code></a></td>
              <td>Prohibited</td>
              <td></td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#switch" class="role-reference"><code>switch</code></a></td>
              <td>Required <strong>Only If</strong> Content Insufficient</td>
              <td>
                <ul>
                  <li>Warning! Using <code>aria-label</code> or <code>aria-labelledby</code> will hide any descendant content from assistive technologies.</li>
                  <li>If based on HTML <code>type="checkbox"</code>, use a <code>label</code> element.</li>
                  <li>Otherwise, reference visible content via <code>aria-labelledby</code>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#tab" class="role-reference"><code>tab</code></a></td>
              <td>Required <strong>Only If</strong> Content Insufficient</td>
              <td>
                <ul>
                  <li>Warning! Using <code>aria-label</code> or <code>aria-labelledby</code> will hide descendant content from assistive technologies.</li>
                  <li>Ideally named by visible, descendant content.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#table" class="role-reference"><code>table</code></a></td>
              <td>Required</td>
              <td>
                <ul>
                  <li>If using HTML <code>table</code> element, use the <code>caption</code> element.</li>
                  <li>Otherwise use <code>aria-labelledby</code> if a visible label is present.</li>
                  <li>Use <code>aria-label</code> if a visible label is not present.</li>
                  <li>See the <a href="{{ '/ARIA/apg/patterns/table/' | relative_url }}">Table Design Pattern</a>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#tablist" class="role-reference"><code>tablist</code></a></td>
              <td>Recommended</td>
              <td>
                <ul>
                  <li>Helps screen reader users understand the context and purpose of the tablist.</li>
                  <li>Use <code>aria-labelledby</code> if a visible label is present, otherwise use <code>aria-label</code>.</li>
                  <li>See the <a href="{{ '/ARIA/apg/patterns/carousel/' | relative_url }}">Carousel Design Pattern</a> and <a href="{{ '/ARIA/apg/patterns/tabpanel/' | relative_url }}">Tabs Design Pattern</a>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#tabpanel" class="role-reference"><code>tabpanel</code></a></td>
              <td>Required</td>
              <td>
                <ul>
                  <li>Use <code>aria-labelledby</code> pointing to the <code>tab</code> element that controls the <code>tabpanel</code>.</li>
                  <li>See the <a href="{{ '/ARIA/apg/patterns/carousel/' | relative_url }}">Carousel Design Pattern</a> and <a href="{{ '/ARIA/apg/patterns/tabpanel/' | relative_url }}">Tabs Design Pattern</a>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#term" class="role-reference"><code>term</code></a></td>
              <td>Do Not Name</td>
              <td>Since a term is usually the name for the <code>role="definition"</code> element, it could be confusing if the term itself also has a name.</td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#textbox" class="role-reference"><code>textbox</code></a></td>
              <td>Required</td>
              <td>
                <ul>
                  <li>If the <code>textbox</code> role is applied to an HTML <code>input</code> or <code>textarea</code> element, can be named with an HTML <code>label</code> element.</li>
                  <li>Otherwise use <code>aria-labelledby</code> if a visible label is present.</li>
                  <li>Use <code>aria-label</code> if a visible label is not present.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#time" class="role-reference"><code>time</code></a></td>
              <td>Do Not Name</td>
              <td>Naming is not supported by assistive technologies.</td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#timer" class="role-reference"><code>timer</code></a></td>
              <td>Discretionary</td>
              <td>
                Some screen readers announce the name of a timer element before announcing the content of the timer element.
                Thus, <code>aria-label</code> provides a method for prefacing the visible content of a timer element with text that is not displayed as part of the timer element.
                Using <code>aria-label</code> is functionally equivalent to providing off-screen text in the contents of the timer element, except off-screen text would be announced by screen readers that do not support <code>aria-label</code> on <code>timer</code> elements.
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#toolbar" class="role-reference"><code>toolbar</code></a></td>
              <td>Recommended</td>
              <td>
                <ul>
                  <li>If there is more than one <code>toolbar</code> element on the page, naming is required.</li>
                  <li>Helps assistive technology users to understand the purpose of the toolbar, even when there is only one toolbar on the page.</li>
                  <li>Use <code>aria-labelledby</code> if a visible label is present, otherwise use <code>aria-label</code>.</li>
                  <li>See the <a href="{{ '/ARIA/apg/patterns/toolbar/' | relative_url }}">Toolbar Pattern</a>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#tooltip" class="role-reference"><code>tooltip</code></a></td>
              <td>Required <strong>Only If</strong> Content Insufficient</td>
              <td>
                <ul>
                  <li>Warning! Using <code>aria-label</code> or <code>aria-labelledby</code> will hide descendant content from assistive technologies.</li>
                  <li>Ideally named by visible, descendant content.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#tree" class="role-reference"><code>tree</code></a></td>
              <td>Required</td>
              <td>
                <ul>
                  <li>Use <code>aria-labelledby</code> if a visible label is present, otherwise use <code>aria-label</code>.</li>
                  <li>See the <a href="{{ '/ARIA/apg/patterns/treeview/' | relative_url }}">Tree View Design Pattern</a>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#treegrid" class="role-reference"><code>treegrid</code></a></td>
              <td>Required</td>
              <td>
                <ul>
                  <li>If the <code>treegrid</code> is applied to an HTML <code>table</code> element, then the accessible name can be derived from the table's <code>caption</code> element.</li>
                  <li>Otherwise, use <code>aria-labelledby</code> if a visible label is present, otherwise use <code>aria-label</code>.</li>
                  <li>See the <a href="{{ '/ARIA/apg/patterns/treegrid/' | relative_url }}">Treegrid Design Pattern</a>.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><a href="https://w3c.github.io/aria/#treeitem" class="role-reference"><code>treeitem</code></a></td>
              <td>Required <strong>Only If</strong> Content Insufficient</td>
              <td>
                <ul>
                  <li>Warning! Using <code>aria-label</code> or <code>aria-labelledby</code> will hide any descendant content from assistive technologies.</li>
                  <li>Ideally named by visible, descendant content.</li>
                  <li>Note: content contained within a child <code>group</code> is automatically excluded from the accessible name calculation.</li>
                  <li>See the <a href="{{ '/ARIA/apg/patterns/treeview/' | relative_url }}">Tree View Design Pattern</a>.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table></div>
      </section>

      <section id="name_calculation"><div class="header-wrapper"><h2 id="x5-7-accessible-name-calculation">Accessible name calculation</h2></div>
        
        <p>
          User agents construct an accessible name string for an element by walking through a list of potential naming methods and using the first that generates a name.
          The algorithm they follow is defined in the <a href="https://w3c.github.io/accname/" class="accname">accessible name specification</a>.
          It is roughly like the following:
        </p>
        <ol>
          <li><p>The <code>aria-labelledby</code> property is used if present.</p></li>
          <li><p>If the name is still empty, the <code>aria-label</code> property is used if present.</p></li>
          <li>
            <p>If the name is still empty, then host-language-specific attributes or elements are used if present. For HTML, these are, depending on the element:</p>
            <dl class="switch">
              <dt><code>input</code> whose <code>type</code> attribute is in the Button, Submit Button, or Reset Button state</dt>
              <dd>The <code>value</code> attribute.</dd>

              <dt><code>input</code> whose <code>type</code> attribute is in the Image Button state</dt>
              <dt><code>img</code></dt>
              <dt><code>area</code></dt>
              <dd>The <code>alt</code> attribute. </dd>

              <dt><code>fieldset</code></dt>
              <dd>The first child <code>legend</code> element.</dd>

              <dt>Other form elements</dt>
              <dd>The associated <code>label</code> element(s).</dd>

              <dt><code>figure</code></dt>
              <dd>The first child <code>figcaption</code> element.</dd>

              <dt><code>table</code></dt>
              <dd>The first child <code>caption</code> element.</dd>
            </dl>
          </li>
          <li><p>If the name is still empty, then for elements with a role that supports naming from child content, the content of the element is used.</p></li>
          <li>
            <p>Finally, if the name is still empty, then other fallback host-language-specific attributes or elements are used if present. For HTML, these are, depending on the element:</p>
            <dl class="switch">
              <dt><code>input</code> whose <code>type</code> attribute is in the Text, Password, Search, Telephone, or URL states</dt>
              <dt><code>textarea</code></dt>
              <dd>The <code>title</code> attribute. Otherwise, the <code>placeholder</code> attribute.</dd>

              <dt><code>input</code> whose <code>type</code> attribute is in the Submit Button state</dt>
              <dd>A localized string of the word "submit".</dd>

              <dt><code>input</code> whose <code>type</code> attribute is in the Reset Button state</dt>
              <dd>A localized string of the word "reset".</dd>

              <dt><code>input</code> whose <code>type</code> attribute is in the Image Button state</dt>
              <dd>The <code>title</code> attribute. Otherwise, a localized string of the phrase "Submit Query".</dd>

              <dt><code>summary</code></dt>
              <dd>The word "Details".</dd>

              <dt>Other elements</dt>
              <dd>The <code>title</code> attribute.</dd>
            </dl>
          </li>
        </ol>
        <p>
          The final step is a fallback mechanism. Generally when labeling an element, use one of the non-fallback mechanisms.
        </p>
        <p>
          When calculating a name from content, the user agent walks through all descendant nodes except in the cases of <code>treeitem</code> and <code>menuitem</code> as described below.
          And, when following references in an <code>aria-labelledby</code> attribute, it similarly walks the tree of each referenced element.
          Thus, the naming algorithm is recursive.
          The following two sections explain non-recursive and recursive examples of how the algorithm works.
        </p>
        <p>
          When calculating a name from content for the <code>treeitem</code> role, descendant content of child <code>group</code> elements are not included.
          For example, in the following <code>tree</code>, the name of the first tree item is <q>Fruits</q>; <q>Apples</q>, <q>Bananas</q>, and <q>Oranges</q> are automatically omitted.
        </p>
        <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"tree"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"treeitem"</span>&gt;</span>Fruits
    <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"group"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"treeitem"</span>&gt;</span>Apples<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"treeitem"</span>&gt;</span>Bananas<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"treeitem"</span>&gt;</span>Oranges<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span></code></pre>
        <p>
          Similarly, when calculating a name from content for the <code>menuitem</code> role, descendant content of child <code>menu</code> elements are not included.
          So, the name of the first parent <code>menuitem</code> in the following <code>menu</code> is <q>Fruits</q>.
        </p>
        <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"menu"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"menuitem"</span>&gt;</span>Fruits
    <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"menu"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"menuitem"</span>&gt;</span>Apples<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"menuitem"</span>&gt;</span>Bananas<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"menuitem"</span>&gt;</span>Oranges<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span></code></pre>

        <section id="name_calculation_non-recursive_ex"><div class="header-wrapper"><h3 id="x5-7-1-examples-of-non-recursive-accessible-name-calculation">Examples of non-recursive accessible name calculation</h3></div>
          
          <p>Consider an <code>input</code> element that has no associated <code>label</code> element and only a <code>name</code> attribute and so does not have an accessible name (do not do this):</p>
          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"code"</span>&gt;</span></code></pre>
          <p>If there is a <code>placeholder</code> attribute, then it serves as a naming fallback mechanism (avoid doing this):</p>

          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"code"</span>
       <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"One-time code"</span>&gt;</span></code></pre>

          <p>If there is also a <code>title</code> attribute, then it is used as the accessible name instead of <code>placeholder</code>, but it is still a fallback (avoid doing this):</p>

          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"code"</span>
       <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"123456"</span>
       <span class="hljs-attr">title</span>=<span class="hljs-string">"One-time code"</span>&gt;</span></code></pre>

          <p>If there is also a <code>label</code> element (recommended), then that is used as the accessible name, and the <code>title</code> attribute is instead used as the accessible description:</p>

          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>One-time code
 <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"code"</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"123456"</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">"Get your code from the app."</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span></code></pre>

          <p>If there is also an <code>aria-label</code> attribute (not recommended unless it adds clarity for assistive technology users), then that becomes the accessible name, overriding the <code>label</code> element:</p>

          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Code
 <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"code"</span>
        <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"One-time code"</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"123456"</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">"Get your code from the app."</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span></code></pre>

          <p>If there is also an <code>aria-labelledby</code> attribute, that wins over the other elements and attributes (the <code>aria-label</code> attribute ought to be removed if it is not used):</p>

          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Please fill in your <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"code-label"</span>&gt;</span>one-time code<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> to log in.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Code
  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"code"</span>
         <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"code-label"</span>
         <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"This is ignored"</span>
         <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"123456"</span>
         <span class="hljs-attr">title</span>=<span class="hljs-string">"Get your code from the app."</span>&gt;</span>
 <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></code></pre>
          </section>

          <section id="name_calculation_recursive_ex"><div class="header-wrapper"><h3 id="x5-7-2-examples-of-recursive-accessible-name-calculation">Examples of recursive accessible name calculation</h3></div>
            
            <p>The accessible name calculation algorithm will be invoked recursively when necessary. An <code>aria-labelledby</code> reference causes the algorithm to be invoked recursively, and when computing an accessible name from content the algorithm is invoked recursively for each child node.</p>

            <p>In this example, the label for the button is computed by recursing into each child node, resulting in <q>Move to trash</q>.</p>

            <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span>&gt;</span>Move to <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"bin.svg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"trash"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>

            <p>When following an <code>aria-labelledby</code> reference, the algorithm avoids following the same reference twice to avoid infinite loops.</p>

            <p>In this example, the label for the button is computed by first following the <code>aria-labelledby</code> reference to the parent element, and then computing the label for that element from the child nodes, first visiting the <code>button</code> element again but ignoring the <code>aria-labelledby</code> reference and instead using the <code>aria-label</code>, and then visiting the next child (the text node). The resulting label is <q>Remove meeting: Daily status report</q>.</p>

            <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"meeting-1"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"meeting-1"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Remove meeting:"</span>&gt;</span>X<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  Daily status report
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
        </section>
      </section>

      <section id="describing_techniques"><div class="header-wrapper"><h2 id="x5-8-describing-techniques">Describing Techniques</h2></div>
        
        <section id="describing_with_aria-describedby"><div class="header-wrapper"><h3 id="x5-8-1-describing-by-referencing-content-with-aria-describedby">Describing by referencing content with <code>aria-describedby</code></h3></div>
          
          <p>
            The <code>aria-describedby</code> property works similarly to the <code>aria-labelledby</code> property.
            For example, a button could be described by a sibling paragraph.
          </p>

          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">aria-describedby</span>=<span class="hljs-string">"trash-desc"</span>&gt;</span>Move to trash<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
...
<span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"trash-desc"</span>&gt;</span>Items in the trash will be permanently removed after 30 days.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></code></pre>

          <p>Descriptions are reduced to text strings. For example, if the description contains an HTML <code>img</code> element, a text equivalent of the image is computed.</p>

          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">aria-describedby</span>=<span class="hljs-string">"trash-desc"</span>&gt;</span>Move to <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"bin.svg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"trash"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
...
<span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"trash-desc"</span>&gt;</span>Items in <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"bin.svg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"the trash"</span>&gt;</span> will be permanently removed after 30 days.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></code></pre>

          <p>
            As with <code>aria-labelledby</code>, it is possible to reference an element using <code>aria-describedby</code> even if that element is hidden.
            For example, a text field in a form could have a description that is hidden by default, but can be revealed on request using a disclosure widget.
            The description could also be referenced from the text field directly with <code>aria-describedby</code>.
            In the following example, the accessible description for the <code>input</code> element is <q>Your username is the name that you use to log in to this service.</q>
          </p>

          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"username"</span>&gt;</span>Username<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"username"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"username"</span> <span class="hljs-attr">aria-describedby</span>=<span class="hljs-string">"username-desc"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">aria-expanded</span>=<span class="hljs-string">"false"</span> <span class="hljs-attr">aria-controls</span>=<span class="hljs-string">"username-desc"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Help about username"</span>&gt;</span>?<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"username-desc"</span> <span class="hljs-attr">hidden</span>&gt;</span>
  Your username is the name that you use to log in to this service.
<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></code></pre>
        </section>

        <section id="describing_with_captions"><div class="header-wrapper"><h3 id="x5-8-2-describing-tables-and-figures-with-captions">Describing Tables and Figures with Captions</h3></div>
          
          <p>
            In HTML, if the <code>table</code> is named using <code>aria-label</code> or <code>aria-labelledby</code>, a child <code>caption</code> element becomes an accessible description.
            For example, a preceding heading might serve as an appropriate accessible name, and the <code>caption</code> element might contain a longer description.
            In such a situation, <code>aria-labelledby</code> could be used on the <code>table</code> to set the accessible name to the heading content and the <code>caption</code> would become the accessible description.
          </p>
          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"events-heading"</span>&gt;</span>Upcoming events<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"events-heading"</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">caption</span>&gt;</span>
  Calendar of upcoming events, weeks 27 through 31, with each week starting with
  Monday. The first column is the week number.
 <span class="hljs-tag">&lt;/<span class="hljs-name">caption</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Week<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Monday<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Tuesday<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Wednesday<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Thursday<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Friday<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Saturday<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Sunday<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>27<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>28<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"/events/9856"</span>&gt;</span>Crown Princess's birthday<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>29<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>30<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>31<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span></code></pre>
          <p>The HTML <code>figure</code> element can get its accessible <em>name</em> from its <code>figcaption</code> element, but it will not be used as the accessible <em>description</em>, even if it was not used as the accessible name. If the <code>figcaption</code> element is appropriate as an accessible description, and the accessible name is set using <code>aria-labelledby</code> or <code>aria-label</code>, then the <code>figcaption</code> can be explicitly set as the accessible description using the <code>aria-describedby</code> attribute.</p>
          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"neutron"</span>&gt;</span>Neutron<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">figure</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"neutron"</span> <span class="hljs-attr">aria-describedby</span>=<span class="hljs-string">"neutron-caption"</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"neutron.svg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Within the neutron are three quarks (blue 'u',
 red 'd', green 'd') that are interconnected."</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">figcaption</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"neutron-caption"</span>&gt;</span>
  The quark content of the neutron. The color assignment of individual quarks is
  arbitrary, but all three colors must be present. Forces between quarks are
  mediated by gluons.
 <span class="hljs-tag">&lt;/<span class="hljs-name">figcaption</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">figure</span>&gt;</span></code></pre>
         </section>

        <section id="describing_with_title"><div class="header-wrapper"><h3 id="x5-8-3-descriptions-derived-from-titles">Descriptions Derived from Titles</h3></div>
          
          <p>If an accessible description was not provided using the <code>aria-describedby</code> attribute or one of the primary host-language-specific attributes or elements (e.g., the <code>caption</code> element for <code>table</code>), then, for HTML, if the element has a <code>title</code> attribute, that is used as the accessible description.</p>
          <p>A visible description together with <code>aria-describedby</code> is generally recommended. If a description that is not visible is desired, then the <code>title</code> attribute can be used, for any HTML element that can have an accessible description.</p>
          <p>Note that the <code>title</code> attribute might not be accessible to some users, in particular sighted users not using a screen reader and not using a pointing device that supports hover (e.g., a mouse).</p>
          <p>For example, an <code>input</code> element with input constrained using the <code>pattern</code> attribute can use the <code>title</code> attribute to describe what the expected input is.</p>
          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span> Part number:
 <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">pattern</span>=<span class="hljs-string">"[0-9][A-Z]{3}"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"part"</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">"A part number is a digit followed by three uppercase letters."</span>/&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span></code></pre>
          <p>The <code>title</code> attribute in this case can be shown to the user as a tooltip when the user hovers or focuses the control, but also as part of the error message when the user agent validates the form, if the <code>input</code> element's value doesn't match the <code>pattern</code>.</p>
          <p>As another example, a link can use the <code>title</code> attribute to describe the link in more detail.</p>
          <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"http://twitter.com/W3C"</span>
   <span class="hljs-attr">title</span>=<span class="hljs-string">"Follow W3C on Twitter"</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"/2008/site/images/Twitter_bird_logo_2012.svg"</span>
        <span class="hljs-attr">alt</span>=<span class="hljs-string">"Twitter"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"social-icon"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"40"</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></code></pre>
        </section>
      </section>

      <section id="description_calculation"><div class="header-wrapper"><h2 id="x5-9-accessible-description-calculation">Accessible description calculation</h2></div>
        
        <p>
          Like the <a href="{{ '/ARIA/apg/practices/names-and-descriptions/#name_calculation' | relative_url }}">accessible name calculation</a>, the accessible description calculation produces a text string.
        </p>
        <p>
          The accessible description calculation algorithm is the same as the accessible name calculation algorithm except for a few branch points that depend on whether a name or description is being calculated.
          In particular, when accumulating text for an accessible description, the algorithm uses <code>aria-describedby</code> instead of <code>aria-labelledby</code>.
        </p>
        <p>
          User agents construct an accessible description string for an element by walking through a list of potential description methods and using the first that generates a description.
          The algorithm they follow is defined in the <a href="https://w3c.github.io/accname/" class="accname">accessible name specification</a>.
          It is roughly like the following:
        </p>
        <ol>
          <li><p>The <code>aria-describedby</code> property is used if present.</p></li>
          <li>
            <p>If the description is still empty, then host-language-specific attributes or elements are used if present, if it wasn't already used as the accessible name. For HTML, these are, depending on the element:</p>
            <dl class="switch">
              <dt><code>input</code> whose <code>type</code> attribute is in the Button, Submit Button, or Reset Button state</dt>
              <dd>The <code>value</code> attribute.</dd>

              <dt><code>summary</code></dt>
              <dd>The element's subtree.</dd>

              <dt><code>table</code></dt>
              <dd>The first child <code>caption</code> element.</dd>
            </dl>
          </li>
          <li>
            <p>Finally, if the description is still empty, then other host-language-specific attributes or elements are used if present, if it wasn't already used for the accessible name. For HTML, this is the <code>title</code> attribute.</p>
          </li>
        </ol>
      </section>
  </section>
        
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
