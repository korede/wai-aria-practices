---
# This is a generated file
title: "Tabs"
ref: /ARIA/apg/patterns/tabpanel/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/patterns/tabpanel/

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
<section class="widget" id="tabpanel"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
      <p>
        Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time.
        Each tab panel has an associated tab element, that when activated, displays the panel.
        The list of tab elements is arranged along one edge of the currently displayed panel, most commonly the top edge.
      </p>
      <p>Terms used to describe this design pattern include:</p>
      <dl>
        <dt>Tabs or Tabbed Interface</dt>
        <dd>A set of tab elements and their associated tab panels.</dd>
        <dt>Tab List</dt>
        <dd>A set of tab elements contained in a <a href="https://w3c.github.io/aria/#tablist" class="role-reference">tablist</a> element.</dd>
        <dt><a href="https://w3c.github.io/aria/#tab" class="role-reference">tab</a></dt>
        <dd>An element in the tab list that serves as a label for one of the tab panels and can be activated to display that panel. </dd>
        <dt><a href="https://w3c.github.io/aria/#tabpanel" class="role-reference">tabpanel</a></dt>
        <dd>The element that contains the content associated with a tab.</dd>
      </dl>
      <p>
        When a tabbed interface is initialized, one tab panel is displayed and its associated tab is styled to indicate that it is active.
        When the user activates one of the other tab elements, the previously displayed tab panel is hidden, the tab panel associated with the activated tab becomes visible, and the tab is considered "active".
      </p>

      <section class="notoc examples-section"><img alt="" 
            src="{{ '/content-images/wai-aria-practices/img/tabpanel.svg' | relative_url }}"
          ><div class="header-wrapper"><h2 id="examples-14" tabindex="-1">Examples</h2></div>
        
        <ul>
          <li><a href="../../example-index/tabs/tabs-automatic.html">Tabs With Automatic Activation</a>: A tabs widget where tabs are automatically activated and their panel is displayed when they receive focus.</li>
          <li><a href="../../example-index/tabs/tabs-manual.html">Tabs With Manual Activation</a>: A tabs widget where users activate a tab and display its panel by pressing <kbd>Space</kbd> or <kbd>Enter</kbd>.</li>
        </ul>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction-21" tabindex="-1">Keyboard Interaction</h2></div>
        
        <p>For the tab list:</p>
        <ul>
          <li>
            <kbd>Tab</kbd>:
            <ul>
              <li>When focus moves into the tab list, places focus on the active <code>tab</code> element.</li>
              <li>When the tab list contains the focus, moves focus to the next element in the page tab sequence outside the tablist, which is the tabpanel unless the first element containing meaningful content inside the tabpanel is focusable.</li>
            </ul>
          </li>
          <li>When focus is on a tab element in a horizontal tab list:
            <ul>
              <li>
                <kbd>Left Arrow</kbd>: moves focus to the previous tab.
                If focus is on the first tab, moves focus to the last tab.
                Optionally, activates the newly focused tab (See note below).
              </li>
              <li>
                <kbd>Right Arrow</kbd>: Moves focus to the next tab.
                If focus is on the last tab element, moves focus to the first tab.
                Optionally, activates the newly focused tab (See note below).
              </li>
            </ul>
          </li>
          <li>When focus is on a tab in a tablist with either horizontal or vertical orientation:
            <ul>
              <li><kbd>Space or Enter</kbd>: Activates the tab if it was not activated automatically on focus.</li>
              <li><kbd>Home</kbd> (Optional): Moves focus to the first tab. Optionally, activates the newly focused tab (See note below).</li>
              <li><kbd>End</kbd> (Optional): Moves focus to the last tab. Optionally, activates the newly focused tab (See note below).</li>
              <li><kbd>Shift + F10</kbd>: If the tab has an associated popup menu, opens the menu. </li>
              <li>
                <kbd>Delete</kbd> (Optional): If deletion is allowed, deletes (closes) the current tab element and its associated tab panel,
                sets focus on the tab following the tab that was closed, and optionally activates the newly focused tab. If there is not a tab that followed the tab that was deleted,
                e.g., the deleted tab was the right-most tab in a left-to-right horizontal tab list,
                sets focus on and optionally activates the tab that preceded the deleted tab.
                 If the application allows all tabs to be deleted, and the user deletes the last remaining tab in the tab list,
                the application moves focus to another element that provides a logical work flow.
                As an alternative to <kbd>Delete</kbd>, or in addition to supporting <kbd>Delete</kbd>, the delete function is available in a context menu.
              </li>
            </ul>
          </li>
        </ul>
        <div class="note" role="note" id="issue-container-generatedID-28"><div role="heading" class="note-title marker" id="h-note-26" aria-level="5"><span>Note</span></div><ol class="">
          <li>
            It is recommended that tabs activate automatically when they receive focus as long as their associated tab panels are displayed without noticeable latency.
            This typically requires tab panel content to be preloaded.
            Otherwise, automatic activation slows focus movement, which significantly hampers users' ability to navigate efficiently across the tab list.
            For additional guidance, see <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_selection_follows_focus' | relative_url }}" class="sec-ref">Deciding When to Make Selection Automatically Follow Focus</a>.
          </li>
          <li>
            When a tab list has its <a href="https://w3c.github.io/aria/#aria-orientation" class="property-reference">aria-orientation</a> set to <code>vertical</code>:
            <ol>
              <li><kbd>Down Arrow</kbd> performs as <kbd>Right Arrow</kbd> is described above.</li>
              <li><kbd>Up Arrow</kbd> performs as <kbd>Left Arrow</kbd> is described above.</li>
            </ol>
          </li>
          <li>If the tab list is horizontal, it does not listen for <kbd>Down Arrow</kbd> or <kbd>Up Arrow</kbd> so those keys can provide their normal browser scrolling functions even when focus is inside the tab list.</li>
          <li>When the tabpanel does not contain any focusable elements or the first element with content is not focusable, the tabpanel should set <code>tabindex="0"</code> to include it in the tab sequence of the page.</li>
        </ol></div>
      </section>
      <section class="notoc"><div class="header-wrapper"><h2 id="wai-aria-roles-states-and-properties-22" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2></div>
        
        <ul>
        <li>The element that serves as the container for the set of tabs has role  <a class="role-reference" href="https://w3c.github.io/aria/#tablist">tablist</a>. </li>
        <li>Each element that serves as a tab has role <a class="role-reference" href="https://w3c.github.io/aria/#tab">tab</a> and is contained within the element with role <code>tablist</code>.</li>
          <li>Each element that contains the content panel for a <code>tab</code> has role <a class="role-reference" href="https://w3c.github.io/aria/#tabpanel">tabpanel</a>.</li>
          <li>
            If the tab list has a visible label, the element with role <code>tablist</code> has <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> set to a value that refers to the labelling element.
            Otherwise, the <code>tablist</code> element has a label provided by <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.
          </li>
          <li>Each element with role <code>tab</code> has the property <a href="https://w3c.github.io/aria/#aria-controls" class="property-reference">aria-controls</a> referring to its associated <code>tabpanel</code> element.</li>
          <li>The active <code>tab</code> element has the state <a href="https://w3c.github.io/aria/#aria-selected" class="state-reference">aria-selected</a> set to <code>true</code> and all other <code>tab</code> elements have it set to <code>false</code>.</li>
          <li>Each element with role <code>tabpanel</code> has the property <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> referring to its associated <code>tab</code> element.</li>
          <li>If a <code>tab</code> element has a popup menu, it has the property <a href="https://w3c.github.io/aria/#aria-haspopup" class="property-reference">aria-haspopup</a> set to either <code>menu</code> or <code>true</code>. </li>
          <li>
            If the <code>tablist</code> element is vertically oriented, it has the property <a href="https://w3c.github.io/aria/#aria-orientation" class="property-reference">aria-orientation</a> set to <code>vertical</code>.
            The default value of <code>aria-orientation</code> for a <code>tablist</code> element is <code>horizontal</code>.
        </li>
        </ul>
      </section>
    </section>
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
