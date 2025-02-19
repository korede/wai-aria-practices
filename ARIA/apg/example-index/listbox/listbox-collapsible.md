---
# This is a generated file
title: "(Deprecated) Collapsible Dropdown Listbox Example"
ref: /ARIA/apg/example-index/listbox/listbox-collapsible

github:
  repository: w3c/aria-practices
  branch: main
  path: examples/listbox/listbox-collapsible.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/example-index/listbox/listbox-collapsible

sidebar: true

footer: "          <div class='example-page-footer'>            <p><a href='https://github.com/w3c/aria-practices/projects/13'>View issues related to this example</a></p>            <p>Page last updated: 10 February 2022</p>          </div>        "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>
<script src="../js/utils.js" type="text/javascript"></script>

<link href="css/listbox.css" rel="stylesheet" />
<script src="js/listbox.js" type="text/javascript"></script>
<script src="js/listbox-collapsible.js" type="text/javascript"></script>


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
const addBodyClass = undefined;
const enableSidebar = true;
if (addBodyClass) document.body.classList.add(addBodyClass);
if (enableSidebar) document.body.classList.add('has-sidebar');
</script>
    
<div>

            <h2>About This Example</h2>
            <details id="support-notice" class="note">
    <summary>Important Note About Use of This Example</summary>
    <p>
        Note: This is an illustrative example of one way of using ARIA that conforms with the ARIA specification.
    </p>
    <ul>
    <li>
        There may be support gaps in some
        <a href="{{ '/ARIA/apg/practices/read-me-first/#browser_and_AT_support' | relative_url }}">browser and assistive technology combinations</a>,
        especially for <a href="{{ '/ARIA/apg/practices/read-me-first/#mobile_and_touch_support' | relative_url }}">mobile/touch devices</a>.
        Testing code based on this example with assistive technologies is essential before considering use in production systems.
    </li>
    <li>
        The <a href="https://aria-at.w3.org">ARIA and Assistive Technologies Project</a>
        is developing measurements of assistive technology support for APG examples.
    </li>
    <li>
        Robust accessibility can be further optimized by choosing implementation patterns that
        <a href="https://www.w3.org/TR/using-aria/#rule1">maximize use of semantic HTML</a>
        and heeding the warning that
        <a href="{{ '/ARIA/apg/practices/read-me-first/#no_aria_better_bad_aria' | relative_url }}">No ARIA is better than Bad ARIA</a>.
    </li>
    </ul>
</details>
          
  
  <div>
  
  <div class="advisement">
    <p><strong>DEPRECATION WARNING:</strong> This pattern has been deprecated, and will be removed in a future version of the ARIA Authoring Practices. The <a href="../combobox/combobox-select-only.html">select-only combobox</a> should be used as an alternative to this pattern.</p>
  </div><img alt=""
          src="{{ '/content-images/wai-aria-practices/img/listbox.svg' | relative_url }}"
          class="example-page-example-icon"
        >
  <p>
    The following example implementation of the
    <a href="{{ '/ARIA/apg/patterns/listbox/' | relative_url }}">design pattern for listbox</a>
    demonstrates a collapsible single-select listbox widget that is functionally similar to an HTML <code>select</code> input with the attribute <code>size=&quot;1&quot;</code>.
    The widget consists of a button that triggers the display of a listbox.
    In its default state, the widget is collapsed (the listbox is not visible)  and the button label shows the currently selected option from the listbox.
    When the button is activated, the listbox is displayed and the current option is focused and selected.
  </p>
  <p>Similar examples include:</p>
  <ul>
    <li><a href="../combobox/combobox-select-only.html">Select-Only Combobox</a>: A single-select combobox with no text input that is functionally similar to an HTML <code>select</code> element.</li>
    <li><a href="listbox-scrollable.html">Scrollable Listbox Example</a>: Single-select listbox that scrolls to reveal more options, similar to HTML <code>select</code> with <code>size</code> attribute greater than one.</li>
    <li><a href="listbox-rearrangeable.html">Example Listboxes with Rearrangeable Options</a>: Examples of both single-select and multi-select listboxes with accompanying toolbars where options can be added, moved, and removed.</li>
    <li><a href="listbox-grouped.html">Listbox Example with Grouped Options</a>: Single-select listbox with grouped options, similar to an HTML <code>select</code> with <code>optgroup</code> children.</li>
  </ul>
  <section>
    <div class="example-header">
      <h2 id="ex_label">Example</h2>
    </div>
    <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
    <div id="ex">
      <p>Choose your favorite transuranic element (actinide or transactinide).</p>
      <div class="listbox-area">
        <div class="left-area">
          <span id="exp_elem" class="listbox-label">Choose an element:</span>
          <div id="exp_wrapper">
            <button type="button" aria-haspopup="listbox" aria-labelledby="exp_elem exp_button" id="exp_button">Neptunium</button>
            <ul id="exp_elem_list" tabindex="-1" role="listbox" aria-labelledby="exp_elem" class="hidden">
              <li id="exp_elem_Np" role="option">Neptunium</li>
              <li id="exp_elem_Pu" role="option">Plutonium</li>
              <li id="exp_elem_Am" role="option">Americium</li>
              <li id="exp_elem_Cm" role="option">Curium</li>
              <li id="exp_elem_Bk" role="option">Berkelium</li>
              <li id="exp_elem_Cf" role="option">Californium</li>
              <li id="exp_elem_Es" role="option">Einsteinium</li>
              <li id="exp_elem_Fm" role="option">Fermium</li>
              <li id="exp_elem_Md" role="option">Mendelevium</li>
              <li id="exp_elem_No" role="option">Nobelium</li>
              <li id="exp_elem_Lr" role="option">Lawrencium</li>
              <li id="exp_elem_Rf" role="option">Rutherfordium</li>
              <li id="exp_elem_Db" role="option">Dubnium</li>
              <li id="exp_elem_Sg" role="option">Seaborgium</li>
              <li id="exp_elem_Bh" role="option">Bohrium</li>
              <li id="exp_elem_Hs" role="option">Hassium</li>
              <li id="exp_elem_Mt" role="option">Meitnerium</li>
              <li id="exp_elem_Ds" role="option">Darmstadtium</li>
              <li id="exp_elem_Rg" role="option">Roentgenium</li>
              <li id="exp_elem_Cn" role="option">Copernicium</li>
              <li id="exp_elem_Nh" role="option">Nihonium</li>
              <li id="exp_elem_Fl" role="option">Flerovium</li>
              <li id="exp_elem_Mc" role="option">Moscovium</li>
              <li id="exp_elem_Lv" role="option">Livermorium</li>
              <li id="exp_elem_Ts" role="option">Tennessine</li>
              <li id="exp_elem_Og" role="option">Oganesson</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
    <h3>Notes</h3>
    <p>This listbox is scrollable; it has more options than its height can accommodate.</p>
    <ol>
      <li>
        Scrolling only works as expected if the listbox is the options' <code>offsetParent</code>.
        The example uses <code>position: relative</code> on the listbox to that effect.
      </li>
      <li>When an option is focused that isn't (fully) visible, the listbox's scroll position is updated:
        <ol>
          <li>If <kbd>Up Arrow</kbd> or <kbd>Down Arrow</kbd> is pressed, the previous or next option is scrolled into view.</li>
          <li>If <kbd>Home</kbd> or <kbd>End</kbd> is pressed, the listbox scrolls all the way to the top or to the bottom.</li>
          <li>If <code>focusItem</code> is called, the focused option will be scrolled to the top of the view if it was located above it or to the bottom if it was below it.</li>
          <li>If the mouse is clicked on a partially visible option, it will be scrolled fully into view.</li>
        </ol>
      </li>
      <li>When a fully visible option is focused in any way, no scrolling occurs.</li>
    </ol>
  </section>

  <section>
    <h2 id="kbd_label">Keyboard Support</h2>
    <p>
      The example listbox on this page implements the following keyboard interface.
      Other variations and options for the keyboard interface are described in the
      <a href="{{ '/ARIA/apg/patterns/listbox/#listbox_kbd_interaction' | relative_url }}">Keyboard Interaction section of the Listbox Design Pattern.</a>
    </p>
    <div class="table-wrap"><table aria-labelledby="kbd_label" class="def">
      <thead>
        <tr>
          <th>Key</th>
          <th>Function</th>
        </tr>
      </thead>
      <tbody>
        <tr data-test-id="key-enter">
          <th><kbd>Enter</kbd></th>
          <td>
            <ul>
              <li>If the focus is on the button, expands the listbox and places focus on the currently selected option in the list.</li>
              <li>If focus is in the listbox , collapses the listbox and keeps the currently selected option as the button label.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="key-escape">
          <th><kbd>Escape</kbd></th>
          <td>If the listbox is displayed, collapses the listbox and moves focus to the button.</td>
        </tr>
        <tr data-test-id="key-down-arrow">
          <th><kbd>Down Arrow</kbd></th>
          <td>
            <ul>
              <li>Moves focus to and selects the next option.</li>
              <li>If the listbox is collapsed, also expands the list.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="key-up-arrow">
          <th><kbd>Up Arrow</kbd></th>
          <td>
            <ul>
              <li>Moves focus to and selects the previous option.</li>
              <li>If the listbox is collapsed, also expands the list.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="key-home">
          <th><kbd>Home</kbd></th>
          <td>If the listbox is displayed, moves focus to and selects the first option.</td>
        </tr>
        <tr data-test-id="key-end">
          <th><kbd>End</kbd></th>
          <td>If the listbox is displayed, moves focus to and selects the last option.</td>
        </tr>
        <tr data-test-id="key-character">
          <th>Printable Characters</th>
          <td>
          <ul>
              <li>Type a character: focus moves to the next item with a name that starts with the typed character.</li>
              <li>Type multiple characters in rapid succession: focus moves to the next item with a name that starts with the string of characters typed.</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table></div>
  </section>

  <section>
    <h2 id="rps_label">Role, Property, State, and Tabindex  Attributes</h2>
    <p>
      The example listbox on this page implements the following ARIA roles, states, and properties.
      Information about other ways of applying ARIA roles, states, and properties is available in the
      <a href="{{ '/ARIA/apg/patterns/listbox/#listbox_roles_states_props' | relative_url }}">Roles, States, and Properties section of the Listbox Design Pattern.</a>
    </p>
    <div class="table-wrap"><table aria-labelledby="rps_label" class="data attributes">
    <thead>
        <tr>
          <th scope="col">Role</th>
          <th scope="col">Attribute</th>
          <th scope="col">Element</th>
          <th scope="col">Usage</th>
        </tr>
      </thead>
      <tbody>
        <tr data-test-id="button-aria-labelledby">
          <td></td>
          <th scope="row"><code>aria-labelledby=&quot;ID_REF1 ID_REF2&quot;</code></th>
          <td><code>button</code></td>
          <td>
            <ul>
              <li>References the two elements whose labels are concatenated by the browser to label the button.</li>
              <li>The first element is a span containing text <q>Choose an element: </q>.</li>
              <li>The second element is the button itself; the button text is set to the name of the currently chosen element.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="button-aria-haspopup">
          <td></td>
          <th scope="row"><code>aria-haspopup=&quot;listbox&quot;</code></th>
          <td><code>button</code></td>
          <td>Indicates that activating the button displays a listbox.</td>
        </tr>
        <tr data-test-id="button-aria-expanded">
          <td></td>
          <th scope="row"><code>aria-expanded=&quot;true&quot;</code></th>
          <td><code>button</code></td>
          <td>
            <ul>
              <li>Set by the JavaScript when the listbox is displayed.</li>
              <li>Otherwise, is not present.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="listbox-role">
          <th scope="row"><code>listbox</code></th>
          <td></td>
          <td><code>ul</code></td>
          <td>Identifies the focusable element that has listbox behaviors and contains the listbox options. </td>
        </tr>
        <tr data-test-id="listbox-aria-labelledby">
          <td></td>
          <th scope="row"><code>aria-labelledby=&quot;ID_REF&quot;</code></th>
          <td><code>ul</code></td>
          <td>Refers to the element containing the listbox label.</td>
        </tr>
        <tr data-test-id="listbox-tabindex">
          <td></td>
          <th scope="row"><code>tabindex=&quot;-1&quot;</code></th>
          <td><code>ul</code></td>
          <td>
            <ul>
              <li>Makes the listbox focusable.</li>
              <li>The JavaScript sets focus on the listbox when it is displayed.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="listbox-aria-activedescendant">
          <td></td>
          <th scope="row"><code>aria-activedescendant=&quot;ID_REF&quot;</code></th>
          <td><code>ul</code></td>
          <td>
            <ul>
              <li>Set by the JavaScript when it displays and sets focus on the listbox; otherwise is not present.</li>
              <li>Refers to the option in the listbox that is visually indicated as having keyboard focus.</li>
              <li>When navigation keys, such as <kbd>Down Arrow</kbd>, are pressed, the JavaScript changes the value.</li>
              <li>Enables assistive technologies to know which element the application regards as focused while DOM focus remains on the <code>ul</code> element.</li>
              <li>
                For more information about this focus management technique, see
                <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_focus_activedescendant' | relative_url }}">Using aria-activedescendant to Manage Focus.</a>
              </li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="option-role">
          <th scope="row"><code>option</code></th>
          <td></td>
          <td><code>li</code></td>
          <td>Identifies each selectable element containing the name of an option.</td>
        </tr>
        <tr data-test-id="option-aria-selected">
          <td></td>
          <th scope="row"><code>aria-selected=&quot;true&quot;</code></th>
          <td><code>li</code></td>
          <td>
            <ul>
              <li>Indicates that the option is selected.</li>
              <li>Applied to the element with role option that is visually styled as  selected.</li>
              <li>The option with this attribute is always the same as the option that is referenced by aria-activedescendant because it is a single-select listbox where selection follows focus.</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table></div>
  </section>

  <section>
    <h2>Javascript and CSS Source Code</h2>
    <ul id="css_js_files">
      <li>
        CSS:
        <a href="css/listbox.css" type="tex/css">listbox.css</a>
      </li>
      <li>
        Javascript:
        <a href="js/listbox.js" type="text/javascript">listbox.js</a>, <a href="js/listbox-collapsible.js" type="text/javascript">listbox-collapsible</a>, <a href="../js/utils.js">utils.js</a>
      </li>
    </ul>
  </section>

  <section>
    <h2 id="sc_label">HTML Source Code</h2>
    <div id="sc_start_sep" role="separator" aria-labelledby="sc_start_sep sc_label" aria-label="Start of "></div>
    <pre><code id="sc"></code></pre>
    <div id="sc_end_sep" role="separator" aria-labelledby="sc_end_sep sc_label" aria-label="End of"></div>
    <script>
      sourceCode.add('sc', 'ex', 'ex_label', 'css_js_files');
    </script>
    <script>
      sourceCode.make();
    </script>
  </section>
  </div>
  

</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
