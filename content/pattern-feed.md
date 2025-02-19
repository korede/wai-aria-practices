---
# This is a generated file
title: "Feed"
ref: /ARIA/apg/patterns/feed/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/patterns/feed/

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
const addBodyClass = "pattern-page";
const enableSidebar = true;
if (addBodyClass) document.body.classList.add(addBodyClass);
if (enableSidebar) document.body.classList.add('has-sidebar');
</script>
    
<div>
<section class="widget" id="feed"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
      <p>
        A <a href="https://w3c.github.io/aria/#feed" class="role-reference">feed</a> is a section of a page that automatically loads new sections of content as the user scrolls.
        The sections of content in a feed are presented in <a href="https://w3c.github.io/aria/#article" class="role-reference">article</a> elements.
        So, a feed can be thought of as a dynamic list of articles that often appears to scroll infinitely.
      </p>
      <p>
        The feature that most distinguishes feed from other ARIA patterns that support loading data as users scroll, e.g., a <a href="{{ '/ARIA/apg/patterns/grid/' | relative_url }}">grid</a>, is that a feed is a structure, not a widget.
        Consequently, assistive technologies with a reading mode, such as screen readers, default to reading mode when interacting with feed content.
        However, unlike most other <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> structures, a feed establishes an interoperability contract between the web page and assistive technologies.
        The contract governs scroll interactions so that assistive technology users can read articles, jump forward and backward by article, and reliably trigger new articles to load while in reading mode.
      </p>
      <p>
        For example, a product page on a shopping site may have a related products section that displays five products at a time.
        As the user scrolls,  more products are requested  and loaded into the DOM.
         While a static design might include a next button for loading five more products, a dynamic implementation that automatically loads more data as the user scrolls simplifies the user experience and reduces the inertia associated with viewing more than the first five product suggestions.
         But, unfortunately when web pages load content dynamically based on scroll events, it can cause usability and interoperability difficulties for users of assistive technologies.
      </p>
      <p>
        The feed pattern enables reliable assistive technology reading mode interaction by establishing the following interoperability agreement between the web page and assistive technologies:
      </p>
      <ol>
        <li>In the context of a feed, the web page code is responsible for:
        <ul>
          <li>
            Appropriate visual scrolling of the content based on which article contains DOM focus.
          </li>
          <li>Loading or removing feed articles based on which article contains DOM focus.</li>
        </ul>
      </li>
        <li>In the context of a feed, assistive technologies with a reading mode are responsible for:
          <ul>
            <li>Indicating which article contains the reading cursor by ensuring the article element or one of its descendants has DOM focus.</li>
            <li>providing reading mode keys that move DOM focus to the next and previous articles.</li>
            <li>Providing reading mode keys for moving the reading cursor and DOM focus past the end and before the start of the feed.</li>
          </ul>
        </li>
      </ol>
      <p>
        Thus, implementing the feed pattern allows a screen reader to reliably read and trigger the loading of feed content while staying in its reading mode.
      </p>
      <p>
        Another feature of the feed pattern is its ability to facilitate skim reading for assistive technology users.
        Web page authors may provide both an accessible name and description for each article.
        By identifying the elements inside of an article that provide the title and the primary content, assistive technologies can provide functions that enable users to jump from article to article and efficiently discern which articles may be worthy of more attention.
      </p>

      <section class="notoc examples-section"><img alt="" 
            src="{{ '/content-images/wai-aria-practices/img/feed.svg' | relative_url }}"
          ><div class="header-wrapper"><h2 id="example-3" tabindex="-1">Example</h2></div>
        
        <p>
        <a href="../../example-index/feed/feed.html">Example Implementation of Feed Pattern</a>
        </p>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction-9" tabindex="-1">Keyboard Interaction</h2></div>
        
        <p>
          The feed pattern is not based on a desktop GUI widget so the <code>feed</code> role is not associated with any well-established keyboard conventions.
          Supporting the following, or a similar,  interface is recommended.
        </p>
        <p>When focus is inside the feed:</p>
        <ul>
          <li><kbd>Page Down</kbd>: Move focus to next article.</li>
          <li><kbd>Page Up</kbd>: Move focus to previous article.</li>
          <li><kbd>Control + End</kbd>: Move focus to the first focusable element after the feed.</li>
          <li><kbd>Control + Home</kbd>: Move focus to the first focusable element before the feed.</li>
        </ul>
        <div class="note" role="note" id="issue-container-generatedID-8"><div role="heading" class="note-title marker" id="h-note-8" aria-level="5"><span>Note</span></div><ol class="">
          <li>Due to the lack of convention, providing easily discoverable keyboard interface documentation is especially important.</li>
          <li>
            In some cases, a feed may contain a nested feed.
            For example, an article in a social media feed may contain a feed of comments on that article.
            To navigate the nested feed, users first move focus inside the nested feed.
            Options for supporting nested feed navigation include:
            <ul>
              <li>
                Users move focus into the nested feed from the content of the containing article with <kbd>Tab</kbd>.
                This may be slow if the article contains a significant number of links, buttons, or other widgets.
               </li>
              <li>Provide a key for moving focus from the elements in the containing article to the first item in the nested feed, e.g., <kbd>Alt + Page Down</kbd>.</li>
              <li>To continue reading the outer feed, <kbd>Control + End</kbd> moves focus to the next article in the outer feed.</li>
            </ul>
          </li>
          <li>In the rare circumstance that a feed article contains a widget that uses the above suggested keys, the feed navigation key will operate the contained widget, and the user needs to move focus to an element that does not utilize the feed navigation keys in order to navigate the feed.</li>
        </ol></div>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="wai-aria-roles-states-and-properties-9" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2></div>
        
        <ul>
          <li>The element that contains the set of feed articles has role <a href="https://w3c.github.io/aria/#feed" class="role-reference">feed</a>.</li>
          <li>
            If the feed has a visible label, the <code>feed</code> element has <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> referring to the element containing the title.
            Otherwise, the <code>feed</code> element has a label specified with <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.
          </li>
          <li>
            Each unit of content in a feed is contained in an element with role <a href="https://w3c.github.io/aria/#article" class="role-reference">article</a>.
            All content inside the feed is contained in an <code>article</code>  element.
          </li>
          <li>
            Each <code>article</code> element has
            <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a>
            referring to elements inside the article that can serve as a distinguishing label.
          </li>
          <li>
            It is optional but strongly recommended for each <code>article</code> element to have
            <a href="https://w3c.github.io/aria/#aria-describedby" class="property-reference">aria-describedby</a>
            referring to one or more elements inside the article that serve as the primary content of the article.
          </li>
          <li>
            Each <code>article</code> element has
            <a href="https://w3c.github.io/aria/#aria-posinset" class="property-reference">aria-posinset</a>
            set to a value that represents its position in the feed.
          </li>
          <li>
            Each <code>article</code> element has
            <a href="https://w3c.github.io/aria/#aria-setsize" class="property-reference">aria-setsize</a>
            set to a value that represents either the total number of articles that have been loaded or the total number in the feed,
            depending on which value is deemed more helpful to users.
            If the total number in the feed is undetermined, it can be represented by a <code>aria-setsize</code> value of <code>-1</code>.
          </li>
          <li>
            When <code>article</code> elements are being added to or removed from the <code>feed</code> container,
            and if the operation requires multiple DOM operations,
            the <code>feed</code> element has
            <a href="https://w3c.github.io/aria/#aria-busy" class="state-reference">aria-busy</a>
            set to <code>true</code> during the update operation.
            Note that it is extremely important that <code>aria-busy</code> is set to <code>false</code> when the operation is complete or the changes may not become visible to some assistive technology users.
          </li>
        </ul>
      </section>
    </section>
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
