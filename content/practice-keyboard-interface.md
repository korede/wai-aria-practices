---
# This is a generated file
title: "Developing a Keyboard Interface"
ref: /ARIA/apg/practices/keyboard-interface/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/practices/keyboard-interface/

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
          <section id="keyboard"><div class="header-wrapper"></div>
    
    <p>
      Unlike native HTML form elements, browsers do not provide keyboard support for graphical user interface (GUI) components that are made accessible with ARIA; authors have to provide the keyboard support in their code.
      This section describes the principles and methods for making the functionality of a web page that includes ARIA widgets, such as menus and grids, as well as interactive components, such as toolbars and dialogs, operable with a keyboard.
      Along with the basics of focus management, this section offers guidance toward the objective of providing experiences to people who rely on a keyboard that are as efficient and enjoyable as the experiences available to others.
    </p>
      <p>This section covers: </p>
    <ol>
      <li>Understanding fundamental principles of focus movement conventions used in ARIA design patterns.</li>
      <li>Maintaining visible focus, predictable focus movement, and distinguishing between keyboard focus and the selected state.</li>
      <li>Managing movement of keyboard focus between components, e.g., how the focus moves when the <kbd>Tab</kbd> and <kbd>Shift+Tab</kbd> keys are pressed.</li>
      <li>Managing movement of keyboard focus inside components that contain multiple focusable elements, e.g., two different methods for programmatically exposing focus inside widgets like radio groups, menus, listboxes, trees, and grids.</li>
      <li>Determining when to make disabled interactive elements focusable.</li>
      <li>Assigning and revealing keyboard shortcuts, including guidance on how to avoid problematic conflicts with keyboard commands of assistive technologies, browsers, and operating systems.</li>
    </ol>
    <section id="kbd_generalnav"><div class="header-wrapper"><h2 id="x6-1-fundamental-keyboard-navigation-conventions">Fundamental Keyboard Navigation Conventions</h2></div>
      

      <p>
        ARIA roles, states, and properties model accessibility behaviors and features shared among GUI components of popular desktop GUIs, including Microsoft Windows, macOS, and GNOME.
        Similarly, ARIA design patterns borrow user expectations and keyboard conventions from those platforms, consistently incorporating common conventions with the aim of facilitating easy learning and efficient operation of keyboard interfaces across the web.
      </p>

      <p>
        For a web page to be accessible, all interactive elements must be operable via the keyboard.
        In addition, consistent application of the common GUI keyboard interface conventions described in the <a href="{{ '/ARIA/apg/patterns/' | relative_url }}">ARIA design patterns</a> is important, especially for assistive technology users.
        Consider, for example, a screen reader user operating a tree.
        Just as familiar visual styling helps users discover how to expand a tree branch with a mouse, ARIA attributes give the tree the sound and feel of a tree in a desktop application.
        So, screen reader users will commonly expect that pressing the right arrow key will expand a collapsed node.
        Because the screen reader knows the element is a tree, it also has the ability to instruct a novice user how to operate it.
        Similarly, voice recognition software can implement commands for expanding and collapsing branches because it recognizes the element as a tree and can execute appropriate keyboard commands.
        All this is only possible if the tree implements the GUI keyboard conventions as described in the <a href="{{ '/ARIA/apg/patterns/treeview/' | relative_url }}">ARIA tree pattern</a>.
      </p>

      <p>
        A primary keyboard navigation convention common across all platforms is that the <kbd>tab</kbd> and <kbd>shift+tab</kbd> keys move focus from one UI component to another while other keys, primarily the arrow keys, move focus inside of components that include multiple focusable elements.
        The path that the focus follows when pressing the <kbd>tab</kbd> key is known as the tab sequence or tab ring.
      </p>

      <p>
        Common examples of UI components that contain multiple focusable elements are radio groups, tablists, menus, and grids.
        A radio group, for example, contains multiple radio buttons, each of which is focusable.
        However, only one of the radio buttons is included in the tab sequence.
        After pressing the <kbd>Tab</kbd> key moves focus to a radio button in the group, pressing arrow keys moves focus among the radio buttons in the group, and pressing the <kbd>Tab</kbd> key moves focus out of the radio group to the next element in the tab sequence.
      </p>

      <p>
        The ARIA specification refers to a discrete UI component that contains multiple
        focusable elements as a <a href="https://w3c.github.io/aria/#composite" class="role-reference">composite</a>
        widget. The process of controlling focus movement inside a composite is called
        managing focus. Following are some ARIA design patterns with example implementations
        that demonstrate focus management:
      </p>

      <ul>
        <li><a href="{{ '/ARIA/apg/patterns/combobox/' | relative_url }}">Combobox</a></li>
        <li><a href="{{ '/ARIA/apg/patterns/grid/' | relative_url }}">Grid</a></li>
        <li><a href="{{ '/ARIA/apg/patterns/listbox/' | relative_url }}">Listbox</a></li>
        <li><a href="{{ '/ARIA/apg/patterns/menu/' | relative_url }}">Menu or menu bar</a></li>
        <li><a href="{{ '/ARIA/apg/patterns/radiobutton/' | relative_url }}">Radiogroup</a></li>
        <li><a href="{{ '/ARIA/apg/patterns/tabpanel/' | relative_url }}">Tabs</a></li>
        <li><a href="{{ '/ARIA/apg/patterns/toolbar/' | relative_url }}">Toolbar</a></li>
        <li>Tree Grid</li>
        <li><a href="{{ '/ARIA/apg/patterns/treeview/' | relative_url }}">Tree View</a></li>
      </ul>
    </section>

    <section id="kbd_focus_discernable_predictable"><div class="header-wrapper"><h2 id="x6-2-discernible-and-predictable-keyboard-focus">Discernible and Predictable Keyboard Focus</h2></div>
      
      <p>Work to complete this section is tracked by <a href="https://github.com/w3c/aria-practices/issues/217">issue 217.</a></p>
      <p>
        When operating with a keyboard, two essentials of a good experience are the abilities to easily discern the location of the keyboard focus and to discover where focus landed after a navigation key has been pressed.
        The following factors affect to what extent a web page affords users these capabilities.
      </p>

      <ol>
        <li>Visibility of the focus indicator: Users need to be able to easily distinguish the keyboard focus indicator from other features of the visual design. Just as a mouse user may move the mouse to help find the mouse pointer, a keyboard user may press a navigation key to watch for movement. If visual changes in response to focus movement are subtle, many users will lose track of focus and be unable to operate. Authors are advised to rely on the default focus indicators provided by browsers. If overriding the default, consider:
          <ul>
            <li>something about ... Colors and gradients can disappear in high contrast modes.</li>
            <li>Users need to be able to easily distinguish between focus and selection as described in <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_focus_vs_selection' | relative_url }}" class="sec-ref">Focus VS Selection and the Perception of Dual Focus</a>, especially when a component that contains selected elements does not contain the focus.</li>
            <li>... other considerations to be added ...</li>
          </ul>
        </li>

        <li> Persistence of focus: It is essential that there is always a component within the user interface that is active (document.activeElement is not null or is not the body element) and that the active element has a visual focus indicator. Authors need to manage events that effect the currently active element so focus remains visible and moves logically. For example, if the user closes a dialog or performs a destructive operation like deleting an item from a list, the active element may be hidden or removed from the DOM. If such events are not managed to set focus on the button that triggered the dialog or on the list item following the deleted item, browsers move focus to the body element, effectively causing a loss of focus within the user interface. </li>

        <li>
          Predictability of movement: Usability of a keyboard interface is heavily influenced by how readily users can guess where focus will land after a navigation key is pressed.
          Some possible approaches to optimizing predictability include:

          <ul>
            <li>
              Move focus in a pattern that matches the reading order of the page's language. In left to right languages, for example, create a tab sequence that moves focus left to right and then top to bottom.
            </li>

            <li>
              Incorporate all elements of a section of the page in the tab sequence before moving focus to another section. For instance, in a page
              with multiple columns that has content in a left side bar, center region, and right side bar, build a tab sequence that covers all elements in the left sidebar before focus moves to the first focusable element in the center column.
            </li>

            <li>
              When the distance between two consecutive elements in the tab sequence is significant, avoid movement that would be perceived as backward.
              For example, on a page with a left to right language, a jump from the last element in the bottom right of the main content to the top element in a left-hand sidebar is likely to be less predictable and more difficult to follow, especially for users with a narrow field of view.
            </li>

            <li>
              Follow consistent patterns across a site.
              The keyboard experience is more predictable when similar pages have similar focus movement patterns.
            </li>

            <li>Do not set initial focus when the page loads except in cases where:
              <ul>
                <li>The page offers a single, primary function that nearly all users employ immediately after page load.</li>
                <li>Any given user is likely to use the page often.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
    </section>

    <section id="kbd_focus_vs_selection"><div class="header-wrapper"><h2 id="x6-3-focus-vs-selection-and-the-perception-of-dual-focus">Focus VS Selection and the Perception of Dual Focus</h2></div>
      

      <p>
        Occasionally, it may appear as if two elements on the page have focus at the same time.
        For example, in a multi-select list box, when an option is selected it may be greyed.
        Yet, the focus indicator can still be moved to other options, which may also be selected.
        Similarly, when a user activates a tab in a tablist, the selected state is set on the tab and its visual appearance changes.
        However, the user can still navigate, moving the focus indicator elsewhere on the page while the tab retains its selected appearance and state.
      </p>

      <p>
        Focus and selection are quite different.
        From the keyboard user's perspective, focus is a pointer, like a mouse pointer; it tracks the path of navigation.
        There is only one point of focus at any time and all operations take place at the point of focus.
        On the other hand, selection is an operation that can be performed in some widgets, such as list boxes, trees, and tablists.
        If a widget supports only single selection, then only one item can be selected and very often the selected state will simply follow the focus when focus is moved inside of the widget.
        That is, in some widgets, moving focus may also perform the select operation.
        However, if the widget supports multiple selection, then more than one item can be in a selected state, and keys for moving focus do not perform selection.
        Some multi-select widgets do support key commands that both move focus and change selection, but those keys are different from the normal navigation keys.
        Finally, when focus leaves a widget that includes a selected element, the selected state persists.
      </p>

      <p>
        From the developer's perspective, the difference is simple -- the focused element is the active element (document.activeElement).
        Selected elements are elements that have <code>aria-selected="true"</code>.
      </p>

      <p>With respect to focus and the selected state, the most important considerations for designers and developers are:</p>

      <ul>
        <li>The visual focus indicator must always be visible.</li>
        <li>The selected state must be visually distinct from the focus indicator.</li>
      </ul>
    </section>

    <section id="kbd_selection_follows_focus"><div class="header-wrapper"><h2 id="x6-4-deciding-when-to-make-selection-automatically-follow-focus">Deciding When to Make Selection Automatically Follow Focus</h2></div>
      
      <p> in composite widgets where only one element may be selected, such as a tablist or single-select listbox, moving the focus may also cause the focused element to become the selected element. This is called having selection follow focus. Having selection follow focus is often beneficial to users, but in some circumstances, it is extremely detrimental to accessibility. </p>
      <p>
        For example, in a tablist, the selected state is used to indicate which panel is displayed.
        So, when selection follows focus in a tablist, moving focus from one tab to another automatically changes  which panel is displayed.
        If the content of panels is present in the DOM, then displaying a new panel is nearly instantaneous.
        A keyboard user who wishes to display the fourth of six tabs can do so with 3 quick presses of the right arrow.
        And, a screen reader user who perceives the labels on tabs by navigating through them may efficiently read through the complete list without any latency.
      </p>
      <p> However, if displaying a new panel causes a network request and possibly a page refresh, the effect of having selection automatically focus can be devastating to the experience for keyboard and screen reader users. In this case, displaying the fourth tab or reading through the list becomes a tedious and time-consuming task as the user experiences significant latency with each movement of focus. Further, if displaying a new tab refreshes the page, then the user not only has to wait for the new page to load but also return focus to the tab list. </p>
      <p>
        When selection does not follow focus, the user changes which element is selected by pressing the <kbd>Enter</kbd> or <kbd>Space</kbd> key.
      </p>
    </section>

    <section id="kbd_general_between"><div class="header-wrapper"><h2 id="x6-5-keyboard-navigation-between-components-the-tab-sequence">Keyboard Navigation Between Components (The Tab Sequence)</h2></div>
      

      <p> As explained in section <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_generalnav' | relative_url }}" class="sec-ref">Fundamental Keyboard Navigation Conventions</a>, all interactive UI components need to be reachable via the keyboard. This is best achieved by either including them in the tab sequence or by making them accessible from a component that is in the tab sequence, e.g., as part of a composite component. This section addresses building and managing the tab sequence, and subsequent sections cover making focusable elements that are contained within components keyboard accessible. </p>

      <p>
        The [<cite><a class="bibref" data-link-type="biblio" href="{{ '/ARIA/apg/about/#bib-html' | relative_url }}" title="HTML Standard">HTML</a></cite>] <a href="https://html.spec.whatwg.org/multipage/interaction.html#the-tabindex-attribute">tabindex</a> and [<cite><a class="bibref" data-link-type="biblio" href="{{ '/ARIA/apg/about/#bib-svg2' | relative_url }}" title="Scalable Vector Graphics (SVG) 2">SVG2</a></cite>] <a href="https://www.w3.org/TR/SVG2/struct.html#tabindexattribute">tabindex</a> attributes can be used to add and remove elements from the tab sequence.
        The value of tabindex can also influence the order of the tab sequence, although authors are strongly advised not to use tabindex for that purpose.
      </p>

      <p>
        In HTML, the default tab sequence of a web page includes only links and HTML form elements, except In macOS, where it includes only form elements.
        macOS system preferences include a keyboard setting that enables the tab key to move focus to all focusable elements.
      </p>

      <p>
        The default order of elements in the tab sequence is the order of elements in the DOM.
        The DOM order also determines screen reader reading order.
        It is important to keep the keyboard tab sequence and the screen reader reading order aligned, logical, and predictable as described in <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_focus_discernable_predictable' | relative_url }}" class="sec-ref">Discernible and Predictable Keyboard Focus</a>.
        The most robust method of manipulating the order of the tab sequence while also maintaining alignment with the reading order that is currently available in all browsers is rearranging elements in the DOM.
      </p>

      <p>The values of the tabindex attribute have the following effects.</p>

      <dl>
        <dt>tabindex is not present or does not have a valid value</dt>
        <dd>
          The element has its default focus behavior.
          In HTML, only form controls and anchors with an HREF attribute are included in the tab sequence.
        </dd>
        <dt>tabindex="0"</dt>
        <dd>The element is included in the tab sequence based on its position in the DOM.</dd>
        <dt>tabindex="-1"</dt>
        <dd>The element is not included in the tab sequence but is focusable with element.focus().</dd>
        <dt>tabindex="X" where X is an integer in the range 1 &lt;= X &lt;= 32767</dt>
        <dd>
          Authors are strongly advised NOT to use these values.
          The element is placed in the tab sequence based on the value of tabindex.
          Elements with a tabindex value of 0 and elements that are focusable by default will be in the sequence after elements with a tabindex value of 1 or greater.
        </dd>
      </dl>
    </section>

    <section id="kbd_general_within"><div class="header-wrapper"><h2 id="x6-6-keyboard-navigation-inside-components"> Keyboard Navigation Inside Components</h2></div>
      

      <p>
        As described in section <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_generalnav' | relative_url }}" class="sec-ref">Fundamental Keyboard Navigation Conventions</a>, the tab sequence should include only one focusable element of a composite UI component.
        Once a composite contains focus, keys other than <kbd>Tab</kbd> and <kbd>Shift + Tab</kbd> enable the user to move focus among its focusable elements.
        Authors are free to choose which keys move focus inside of a composite, but they are strongly advised to use the same key bindings as similar components in common GUI operating systems as demonstrated in <a href="{{ '/ARIA/apg/patterns/' | relative_url }}" class="sec-ref">Design Patterns and Widgets</a>.
      </p>

      <p> The convention for where focus lands in a composite when it receives focus as a result of a <kbd>Tab</kbd> key event depends on the type of composite. It is typically one of the following. </p>

      <ul>
        <li>
          The element that had focus the last time the composite contained focus.
          Or, if the composite has not yet contained the focus, the first element.
          Widgets that usually employ this pattern include grid and tree grid.
        </li>

        <li>
          The selected element. Or, if there is no selected element, the first element.
          Widgets where this pattern is commonly implemented include radio groups, tabs, list boxes, and trees.
          Note: For radio groups, this pattern is referring to the checked radio button; the selected state is not supported for radio buttons.
        </li>

        <li>
          The first element.
          Components that typically follow this pattern include menubars and toolbars.
        </li>
      </ul>

      <p>
        The following sections explain two strategies for managing focus inside composite elements: creating a roving tabindex and using the aria-activedescendant property.
      </p>

      <section id="kbd_roving_tabindex"><div class="header-wrapper"><h3 id="x6-6-1-managing-focus-within-components-using-a-roving-tabindex">Managing Focus Within Components Using a Roving tabindex</h3></div>
        

        <p>
          When using roving tabindex to manage focus in a composite UI component, the element that is to be included in the tab sequence has tabindex of "0" and all other focusable elements contained in the composite have tabindex of "-1".
          The algorithm for the roving tabindex strategy is as follows.
        </p>

        <ul>
          <li>When the component container is loaded or created, set <code>tabindex="0"</code> on the element that will initially be included in the tab sequence and set <code>tabindex="-1"</code> on all other focusable elements it contains.</li>
          <li>
            When the component contains focus and the user presses a navigation key that moves focus within the component, such as an arrow key:

            <ul>
              <li>set <code>tabindex="-1"</code> on the element that has <code>tabindex="0"</code>.</li>
              <li>Set <code>tabindex="0"</code> on the element that will become focused as a result of the key event.</li>
              <li>Set focus, <code>element.focus()</code>, on the element that has <code>tabindex="0"</code>.</li>
            </ul>
          </li>

          <li>
            If the design calls for a specific element to be focused the next time the user moves focus into the composite with <kbd>Tab</kbd> or <kbd>Shift+Tab</kbd>, check if that target element has <code>tabindex="0"</code> when the composite loses focus.
            If it does not, set <code>tabindex="0"</code> on the target element and set <code>tabindex="-1"</code> on the element that previously had <code>tabindex="0"</code>.
          </li>
        </ul>

        <p>
          One benefit of using roving tabindex rather than aria-activedescendant to manage focus is that the user agent will scroll the newly focused element into view.
        </p>
      </section>

      <section id="kbd_focus_activedescendant"><div class="header-wrapper"><h3 id="x6-6-2-managing-focus-in-composites-using-aria-activedescendant">Managing Focus in Composites Using aria-activedescendant</h3></div>
        

        <p>
          If a component container has an ARIA role that supports the <a class="property-reference" href="https://w3c.github.io/aria/#aria-activedescendant">aria-activedescendant</a> property, it is not necessary to manipulate the tabindex attribute and move DOM focus among focusable elements within the container.
          Instead, only the container element needs to be included in the tab sequence. When the container has DOM focus, the value of aria-activedescendant on the container tells assistive technologies which element is active within the widget.
          Assistive technologies will consider the element referred to as active to be the focused element even though DOM focus is on the element that has the aria-activedescendant property.
          And, when the value of aria-activedescendant is changed, assistive technologies will receive focus change events equivalent to those received when DOM focus actually moves.
        </p>

        <p>The steps for using the aria-activedescendant method of managing focus are as follows.</p>

        <ul>
          <li>When the container element that has a role that supports aria-activedescendant is loaded or created, ensure that:
            <ul>
              <li>The container element is included in the tab sequence as described in <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_general_between' | relative_url }}" class="sec-ref">Keyboard Navigation Between Components (The Tab Sequence)</a> or is a focusable element of a composite that implements <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex' | relative_url }}">a roving tabindex</a>.</li>
              <li>
                It has <code>aria-activedescendant="IDREF"</code> where IDREF is the ID of the element within the container that should be identified as active when the widget receives focus.
                The referenced element needs to meet the DOM relationship requirements described below.
              </li>
            </ul>
          </li>
          <li>When the container element receives DOM focus, draw a visual focus indicator on the active element and ensure the active element is scrolled into view.</li>
          <li>When the composite widget contains focus and the user presses a navigation key that moves focus within the widget, such as an arrow key:
            <ul>
              <li>Change the value of aria-activedescendant on the container to refer to the element that should be reported to assistive technologies as active.</li>
              <li>Move the visual focus indicator and, if necessary,  scrolled the active element into view.</li>
            </ul>
          </li>
          <li>
            If the design calls for a specific element to be focused the next time a user moves focus into the composite with <kbd>Tab</kbd> or <kbd>Shift+Tab</kbd>, check if aria-activedescendant is referring to that target element when the container loses focus.
            If it is not, set aria-activedescendant to refer to the target element.
          </li>
        </ul>

        <p>
          The <a href="https://w3c.github.io/aria/#aria-activedescendant" class="property-reference">specification for aria-activedescendant</a> places important restrictions on the DOM relationship between the focused element that has the aria-activedescendant attribute and the element referenced as active by the value of the attribute.
          One of the following three conditions must be met.
        </p>
        <ol>
          <li>The element referenced as active is a DOM descendant of the focused referencing element.</li>
          <li>The focused referencing element has a value specified for the <a href="https://w3c.github.io/aria/#aria-owns" class="property-reference">aria-owns</a> property that includes the ID of the element referenced as active.</li>
          <li>The focused referencing element has role of <a href="https://w3c.github.io/aria/#combobox" class="role-reference">combobox</a>, <a href="https://w3c.github.io/aria/#textbox" class="role-reference">textbox</a>, or <a href="https://w3c.github.io/aria/#searchbox" class="role-reference">searchbox</a> and has <a href="https://w3c.github.io/aria/#aria-controls" class="property-reference">aria-controls</a> property referring to an element with a role that supports aria-activedescendant and either:
            <ol>
              <li>The element referenced as active is a descendant of the controlled element.</li>
              <li>The controlled element has a value specified for the <a href="https://w3c.github.io/aria/#aria-owns" class="property-reference">aria-owns</a> property that includes the ID of the element referenced as active.</li>
            </ol>
          </li>
        </ol>
      </section>
    </section>
    <section id="kbd_disabled_controls"><div class="header-wrapper"><h2 id="x6-7-focusability-of-disabled-controls">Focusability of disabled controls</h2></div>
      
      <p>
        By default, disabled HTML input elements are removed from the tab sequence.
        In most contexts, the normal expectation is that disabled interactive elements are not focusable.
        However, there are some contexts where it is common for disabled elements to be focusable, especially inside of composite widgets.
        For example, as demonstrated in the <a href="{{ '/ARIA/apg/patterns/menu/' | relative_url }}" class="sec-ref">Menu or Menu bar</a> pattern, disabled items are focusable when navigating through a menu with the arrow keys.
      </p>

      <p>
        Removing focusability from disabled elements can offer users both advantages and disadvantages.
        Allowing keyboard users to skip disabled elements usually reduces the number of key presses required to complete a task.
        However, preventing focus from moving to disabled elements can hide their presence from screen reader users who "see" by moving the focus.
      </p>

      <p>
        Authors are encouraged to adopt a consistent set of conventions for the focusability of disabled elements.
        The examples in this guide adopt the following conventions, which both reflect common practice and attempt to balance competing concerns.
      </p>

      <ol>
        <li>For elements that are in the tab sequence when enabled, remove them from the tab sequence when disabled.</li>

        <li>
          For the following composite widget elements, keep them focusable when disabled:

          <ul>
            <li>Options in a <a href="{{ '/ARIA/apg/patterns/listbox/' | relative_url }}">Listbox</a></li>
            <li>Menu items in a <a href="{{ '/ARIA/apg/patterns/menu/' | relative_url }}">Menu or menu bar</a></li>
            <li>Tab elements in a set of <a href="{{ '/ARIA/apg/patterns/tabpanel/' | relative_url }}">Tabs</a></li>
            <li>Tree items in a <a href="{{ '/ARIA/apg/patterns/treeview/' | relative_url }}">Tree View</a></li>
          </ul>
        </li>

        <li>
          For elements contained in a toolbar, make them focusable if discoverability is a concern. Here are two examples to aid with this judgment.

          <ol>
            <li>
              A toolbar with buttons for moving, removing, and adding items in a list includes buttons for "Up", "Down", "Add", and "Remove".
              The "Up" button is disabled and its focusability is removed when the first item in the list is selected.
              Given the  presence of the "Down" button, discoverability of the "Up" button is not a concern.
            </li>

            <li>
              A toolbar in an editor contains a set of special smart paste functions that are disabled when the clipboard is empty or when the function is not applicable to the current content of the clipboard.
              It could be helpful to keep the disabled buttons focusable if the ability to discover their functionality is primarily via their presence on the toolbar.
            </li>
          </ol>
        </li>
      </ol>

      <p>One design technique for mitigating the impact of including disabled elements in the path of keyboard focus is employing appropriate keyboard shortcuts as described in <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_shortcuts' | relative_url }}" class="sec-ref">Keyboard Shortcuts</a>.</p>
    </section>
    <section id="kbd_common_conventions"><div class="header-wrapper"><h2 id="x6-8-key-assignment-conventions-for-common-functions">Key Assignment Conventions for Common Functions</h2></div>
      
      <p>
        The following key assignments can be used in any context where their conventionally associated functions are appropriate.
        While the assignments associated with Windows and Linux platforms can be implemented and used in browsers running in macOS,
        replacing them with macOS assignments in browsers running on a macOS device can make the keyboard interface more discoverable and intuitive for those users.
        In some cases, it may also help avoid system or browser keyboard conflicts.
      </p>
      <div class="table-wrap"><table class="widget-features">
        <thead>
          <tr>
            <th>Function</th>
            <th>Windows/Linux Key</th>
            <th>macOS Key</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">open context menu</th>
            <td><kbd>Shift + F10</kbd></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Copy to clipboard</th>
            <td><kbd>Control + C</kbd></td>
            <td><kbd>Command + C</kbd></td>
          </tr>
          <tr>
            <th scope="row">Paste from clipboard</th>
            <td><kbd>Control + V</kbd></td>
            <td><kbd>Command + V</kbd></td>
          </tr>
          <tr>
            <th scope="row">Cut to clipboard</th>
            <td><kbd>Control + X</kbd></td>
            <td><kbd>Command + X</kbd></td>
          </tr>
          <tr>
            <th scope="row">undo last action</th>
            <td><kbd>Control + Z</kbd></td>
            <td><kbd>Command + Z</kbd></td>
          </tr>
          <tr>
            <th scope="row">Redo action</th>
            <td><kbd>Control + Y</kbd></td>
            <td>Command + Shift + Z</td>
          </tr>
        </tbody>
      </table></div>
    </section>
    <section id="kbd_shortcuts"><div class="header-wrapper"><h2 id="x6-9-keyboard-shortcuts">Keyboard Shortcuts</h2></div>
      
      <p>
        When effectively designed, keyboard shortcuts that focus an element, activate a widget, or both can dramatically enhance usability of frequently used features of a page or site.
        This section addresses some of the keyboard shortcut design and implementation factors that most impact their effectiveness, including:
      </p>
      <ol>
        <li>Understanding how keyboard shortcuts augment a keyboard interface and whether to make a particular shortcut move focus, perform a function, or both. </li>
        <li>Making key assignments and avoiding assignment conflicts with assistive technologies, browsers, and operating systems. </li>
        <li>Exposing and documenting key assignments. </li>
      </ol>
      <section id="kbd_shortcuts_behavior_design"><div class="header-wrapper"><h3 id="x6-9-1-designing-the-scope-and-behavior-of-keyboard-shortcuts">Designing the Scope and Behavior of Keyboard Shortcuts</h3></div>
        

        <p>This section explains the following factors when determining which elements and features to assign keyboard shortcuts and what behavior to give each shortcut:</p>

        <ol>
          <li>Ensuring discovery through navigation; keyboard shortcuts enhance, not replace, standard keyboard access.</li>

          <li>
            Effectively choosing from among the following behaviors:

            <ol>
              <li>Navigation: Moving focus to an element. </li>
              <li>Activation: Performing an operation associated with an element that does not have focus and might not be visible.</li>
              <li>Navigation and activation: Both moving focus to an element and activating it.</li>
            </ol>
          </li>

          <li>Balancing efficiency and cognitive load: lack of a shortcut can reduce efficiency while too many shortcuts can increase cognitive load and clutter the experience.</li>
        </ol>

        <section id="kbd_shortcuts_design_basic"><div class="header-wrapper"><h4 id="x6-9-1-1-ensure-basic-access-via-navigation">Ensure Basic Access Via Navigation </h4></div>
          

          <p>
            Before assigning keyboard shortcuts, it is essential to ensure the features and functions to which shortcuts may be assigned are keyboard accessible without a keyboard shortcut.
            In other words, all elements that could be targets for keyboard shortcuts need to be focusable via the keyboard using the methods described in:
          </p>

          <ul>
            <li><a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_general_between' | relative_url }}" class="sec-ref">Keyboard Navigation Between Components (The Tab Sequence)</a> </li>
            <li><a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_general_within' | relative_url }}" class="sec-ref"> Keyboard Navigation Inside Components</a> </li>
          </ul>

          <p>
            Do not use keyboard shortcuts as a substitute for access via navigation.
            This is essential to full keyboard access because:
          </p>

          <ol>
            <li>The primary means of making functions and their shortcuts discoverable is by making the target elements focusable and revealing key assignments on the element itself.</li>
            <li>If people who rely on the keyboard have to read documentation to learn which keys are required to use an interface, the interface may technically meet some accessibility standards but in practice is only accessible to the small subset of them who have the knowledge that such documentation exists, have the extra time available, and the ability to retain the necessary information.</li>
            <li>Not all devices that depend on keyboard interfaces can support keyboard shortcuts.</li>
          </ol>
        </section>

        <section id="kbd_shortcuts_design_choose_behavior"><div class="header-wrapper"><h4 id="x6-9-1-2-choose-appropriate-shortcut-behavior">Choose Appropriate Shortcut Behavior</h4></div>
          

          <p>The following conventions may help identify the most advantageous behavior for a keyboard shortcut.</p>

          <ul>
            <li>
              Move focus when the primary objective is to make navigation more efficient, e.g., reduce the number of times the user must press <kbd>Tab</kbd> or the arrow keys.
              This behavior is commonly expected when assigning a shortcut to a text box, toolbar, or composite, such as a listbox, tree, grid, or menubar.
              This behavior is also useful for moving focus to a section of a page, such as the main content or a complementary landmark section.
            </li>

            <li> Activate an element without moving focus when the target context of the function is the context that contains the focus. This behavior is most common for command buttons and for functions associated with elements that are not visible, such as a "Save" option that is accessible via a menu. For example, if the focus is on an option in a listbox and a toolbar contains buttons for moving and removing options, it is most beneficial to keep focus in the listbox when the user presses a key shortcut for one of the buttons in the toolbar. This behavior can be particularly important for screen reader users because it provides confirmation of the action performed and makes performing multiple commands more efficient. For instance, when a screen reader user presses the shortcut for the "Up" button, the user will be able to hear the new position of the option in the list since it still has the focus. Similarly, when the user presses the shortcut for deleting an option, the user can
                hear the next option in the list and immediately decide whether to press the delete shortcut again. </li>

            <li>
              Move focus and activate when the target of the shortcut has a single function and the context of that function is the same as the target.
              This behavior is typical when a shortcut is assigned to a button that opens a menu or dialog, to a checkbox, or to a navigation link or button.
            </li>
          </ul>
        </section>

        <section id="kbd_shortcuts_design_where"><div class="header-wrapper"><h4 id="x6-9-1-3-choose-where-to-add-shortcuts">Choose Where to Add Shortcuts </h4></div>
          
          <p>Work to draft content for this section is tracked in <a href="https://github.com/w3c/aria-practices/issues/219">issue 219.</a></p>
          <p>The first goal when designing a keyboard interface is simple, efficient, and intuitive operation with only basic keyboard navigation support. If basic operation of a keyboard interface is inefficient, attempting to compensate for fundamental design issues, such as suboptimal layout or command structure, by implementing keyboard shortcuts will not likely reduce user frustration. The practical implication of this is that, in most well-designed user interfaces, the percentage of functionality that needs to be accessible via a keyboard shortcut in order to create optimal usability is not very high. In many simple user interfaces, keyboard shortcuts can be entirely superfluous. And, in user interfaces with too many keyboard shortcuts, the excess shortcuts create cognitive load that make the most useful ones more difficult to remember. </p>
          <p>Consider the following when deciding where to assign keyboard shortcuts: </p>

          <ol>
            <li>To be written.</li>
          </ol>
        </section>
      </section>
      <section id="kbd_shortcuts_assigning"><div class="header-wrapper"><h3 id="x6-9-2-assigning-keyboard-shortcuts">Assigning Keyboard Shortcuts</h3></div>
        
        <p>When choosing the keys to assign to a shortcut, there are many factors to consider.</p>
        <ul>
          <li>Making the shortcut easy to learn and remember by using a mnemonic (e.g., <kbd>Control + S</kbd> for "Save") or following a logical or spacial pattern.</li>
          <li> Localizing the interface, including for differences in which keys are available and how they behave and for language considerations that could impact mnemonics. </li>
          <li>Avoiding and managing conflicts with key assignments used by an assistive technology, the browser, or the operating system.</li>
        </ul>
        <p>
          Methods for designing a key shortcut scheme that supports learning and memory is beyond the scope of this guide.
          Unless the key shortcut scheme is extensive, it is likely sufficient to mimic concepts that are familiar from common desktop software, such as browsers.
          Similarly, while localization is important, describing how to address it is left to other resources that specialize in that topic.
        </p>
        <p>
          The remainder of this section provides guidance balancing requirements and concerns related to key assignment conflicts.
          It is typically ideal if key assignments do not conflict with keys that are assigned to functions in the user's operating system, browser, or assistive technology.
          Conflicts can block efficient access to functions that are essential to the user, and a perfect storm of conflicts can trap a user.
          At the same time, there are some circumstances where intentional conflicts are useful.
          And, given the vast array of operating system, browser, and assistive technology keys, it is almost impossible to be certain conflicts do not exist.
          So it is also important to employ strategies that mitigate the impact of conflicts whether they are intentional or unknown.
        </p>
        <div class="note" role="note" id="issue-container-generatedID-40"><div role="heading" class="note-title marker" id="h-note-35" aria-level="5"><span>Note</span></div><p class="">
          In the following sections, <kbd>meta</kbd> key refers to the <kbd>Windows</kbd> key on Windows-compatible keyboards and the <kbd>Command</kbd> key on MacOS-compatible keyboards.
        </p></div>
        <section id="kbd_shortcuts_assignments_opsys_conflicts"><div class="header-wrapper"><h4 id="x6-9-2-1-operating-system-key-conflicts">Operating System Key Conflicts</h4></div>
          

          <p> It is essential to avoid conflicts with keys that perform system level functions, such as application and window management and display and sound control. In general, this can be achieved by refraining from the following types of assignments. </p>

          <ol>
            <li>Any modifier keys + any of <kbd>Tab</kbd>, <kbd>Enter</kbd>, <kbd>Space</kbd>, or <kbd>Escape</kbd>.</li>

            <li><kbd>Meta</kbd> key + any other single key (there are exceptions, but they can be risky as these keys can change across versions of operating systems). </li>

            <li><kbd>Alt</kbd> + a function key.</li>
          </ol>

          <p>
            In addition, there are some important application level features that most applications, including browsers, generally support.
            These include:
          </p>

          <ol>
            <li>Zoom</li>
            <li>Copy/Paste</li>
            <li> ... to be continued ... </li>
          </ol>
        </section>

        <section id="kbd_shortcuts_assignments_assistivetech_conflicts"><div class="header-wrapper"><h4 id="x6-9-2-2-assistive-technology-key-conflicts">Assistive Technology Key Conflicts</h4></div>
          

          <p>
            Even though assistive technologies have collectively taken thousands of key assignments, avoiding conflicts is relatively easy.
            This is because assistive technologies have had to develop key assignment schemes that avoid conflicts with both operating systems and applications.
            They do this by hijacking specific keys as modifiers that uniquely define their key commands.
            For example, many assistive technologies use the <kbd>Caps Lock</kbd> key as a modifier.
          </p>

          <p>Deflect assistive technology key conflicts by steering clear of the following types of assignments. </p>

          <ol>
            <li><kbd>Caps Lock</kbd> + any other combination of keys.</li>
            <li><kbd>Insert</kbd> + any combination of other keys.</li>
            <li><kbd>Scroll Lock</kbd> + any combination of other keys.</li>
            <li>macOS only: <kbd>Control+Option</kbd> + any combination of other keys.</li>
          </ol>
        </section>

        <section id="kbd_shortcuts_assignments_browser_conflicts"><div class="header-wrapper"><h4 id="x6-9-2-3-browser-key-conflicts">Browser Key Conflicts</h4></div>
          

          <p> While there is considerable similarity among browser keyboard schemes, the patterns within the schemes are less homogenous. Consequently, it is more difficult to avoid conflicts with browser key assignments. While the impact of conflicts is sometimes mitigated by the availability of two paths to nearly every function -- keyboard accessible menus and keyboard shortcuts, avoiding conflicts with shortcuts to heavily used functions is nonetheless important. Pay special attention to avoiding conflicts with shortcuts to: </p>

          <ol>
            <li>Address or location bar</li>
            <li>Notification bar</li>
            <li>Page refresh</li>
            <li>Bookmark and history functions</li>
            <li>Find functions</li>
          </ol>
        </section>
        <section id="kbd_shortcuts_assignments_intentional_conflicts"><div class="header-wrapper"><h4 id="x6-9-2-4-intentional-key-conflicts">Intentional Key Conflicts</h4></div>
          

          <p>
            While avoiding key conflicts is usually desirable, there are circumstances where intentionally conflicting with a browser function is acceptable or even desirable.
            This can occur when the following combination of conditions arises:
          </p>

          <ul>
            <li>A web application has a frequently used function that is similar to a browser function.</li>
            <li>Users will often want to execute the web application function.</li>
            <li>Users will rarely execute the browser function.</li>
            <li>There is an efficient, alternative path to the browser function.</li>
          </ul>

          <p>For example, consider a save function that is available when the focus is in an editor. Most browsers use ... to be continued ...</p>
        </section>
      </section>
    </section>
  </section>
        
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
