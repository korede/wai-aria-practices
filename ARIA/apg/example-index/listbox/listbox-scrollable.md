---
# This is a generated file
title: "Scrollable Listbox Example"
ref: /ARIA/apg/example-index/listbox/listbox-scrollable

github:
  repository: w3c/aria-practices
  branch: main
  path: examples/listbox/listbox-scrollable.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/example-index/listbox/listbox-scrollable

sidebar: true

footer: "          <div class='example-page-footer'>            <p><a href='https://github.com/w3c/aria-practices/projects/13'>View issues related to this example</a></p>            <p>Page last updated: 23 November 2021</p>          </div>        "

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
<script src="js/listbox-scrollable.js" type="text/javascript"></script>


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
          <img alt=""
          src="{{ '/content-images/wai-aria-practices/img/listbox.svg' | relative_url }}"
          class="example-page-example-icon"
        >
  
  <div>
  
  <p>
    The following example implementation of the
    <a href="{{ '/ARIA/apg/patterns/listbox/' | relative_url }}">design pattern for listbox</a>
    demonstrates a scrollable single-select listbox widget.
    This widget is functionally similar to an HTML <code>select</code> input where the <code>size</code> attribute has a value greater than one.
  </p>
  <p>Similar examples include:</p>
  <ul>
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
        <div>
          <span id="ss_elem" class="listbox-label">Transuranium elements:</span>
          <ul id="ss_elem_list" tabindex="0" role="listbox" aria-labelledby="ss_elem">
            <li id="ss_elem_Np" role="option">Neptunium</li>
            <li id="ss_elem_Pu" role="option">Plutonium</li>
            <li id="ss_elem_Am" role="option">Americium</li>
            <li id="ss_elem_Cm" role="option">Curium</li>
            <li id="ss_elem_Bk" role="option">Berkelium</li>
            <li id="ss_elem_Cf" role="option">Californium</li>
            <li id="ss_elem_Es" role="option">Einsteinium</li>
            <li id="ss_elem_Fm" role="option">Fermium</li>
            <li id="ss_elem_Md" role="option">Mendelevium</li>
            <li id="ss_elem_No" role="option">Nobelium</li>
            <li id="ss_elem_Lr" role="option">Lawrencium</li>
            <li id="ss_elem_Rf" role="option">Rutherfordium</li>
            <li id="ss_elem_Db" role="option">Dubnium</li>
            <li id="ss_elem_Sg" role="option">Seaborgium</li>
            <li id="ss_elem_Bh" role="option">Bohrium</li>
            <li id="ss_elem_Hs" role="option">Hassium</li>
            <li id="ss_elem_Mt" role="option">Meitnerium</li>
            <li id="ss_elem_Ds" role="option">Darmstadtium</li>
            <li id="ss_elem_Rg" role="option">Roentgenium</li>
            <li id="ss_elem_Cn" role="option">Copernicium</li>
            <li id="ss_elem_Nh" role="option">Nihonium</li>
            <li id="ss_elem_Fl" role="option">Flerovium</li>
            <li id="ss_elem_Mc" role="option">Moscovium</li>
            <li id="ss_elem_Lv" role="option">Livermorium</li>
            <li id="ss_elem_Ts" role="option">Tennessine</li>
            <li id="ss_elem_Og" role="option">Oganesson</li>
          </ul>
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
      <li>Normal scrolling through any scrolling mechanism (including <kbd>Page Up</kbd> and <kbd>Page Down</kbd>) works as expected.
        The scroll position will jump as described for <code>focusItem</code> if a means other than a mouse click is used to change focus after scrolling.</li>
    </ol>
  </section>

  <section>
    <h2 id="kbd_label">Keyboard Support</h2>
    <p>
      The example listboxes on this page implement the following keyboard interface.
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
        <tr data-test-id="key-down-arrow">
          <th><kbd>Down Arrow</kbd></th>
          <td>Moves focus to and selects the next option.</td>
        </tr>
        <tr data-test-id="key-up-arrow">
          <th><kbd>Up Arrow</kbd></th>
          <td>Moves focus to and selects the previous option.</td>
        </tr>
        <tr data-test-id="key-home">
          <th><kbd>Home</kbd></th>
          <td>Moves focus to and selects the first option.</td>
        </tr>
        <tr data-test-id="key-end">
          <th><kbd>End</kbd></th>
          <td>Moves focus to and selects the last option.</td>
        </tr>
      </tbody>
    </table></div>
  </section>

  <section>
    <h2 id="rps_label">Role, Property, State, and Tabindex  Attributes</h2>
    <p>
      The example listboxes on this page implement the following ARIA roles, states, and properties.
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
          <th scope="row"><code>tabindex=&quot;0&quot;</code></th>
          <td><code>ul</code></td>
          <td>Includes the listbox in the page tab sequence.</td>
        </tr>
        <tr data-test-id="listbox-aria-activedescendant">
          <td></td>
          <th scope="row"><code>aria-activedescendant=&quot;ID_REF&quot;</code></th>
          <td><code>ul</code></td>
          <td>
            <ul>
              <li>Tells assistive technologies which of the options, if any, is visually indicated as having keyboard focus.</li>
              <li>DOM focus remains on the <code>ul</code> element and the idref specified for <code>aria-activedescendant</code> refers to the <code>li</code> element that is visually styled as focused.</li>
              <li>When navigation keys, such as <kbd>Down Arrow</kbd>, are pressed, the JavaScript changes the value.</li>
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
        <a href="js/listbox.js" type="text/javascript">listbox.js</a>, <a href="js/listbox-scrollable.js" type="text/javascript">listbox-scrollable.js</a>, <a href="../js/utils.js">utils.js</a>
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
