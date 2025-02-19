---
# This is a generated file
title: "Navigation Menu Button Example"
ref: /ARIA/apg/example-index/menu-button/menu-button-links

github:
  repository: w3c/aria-practices
  branch: main
  path: examples/menu-button/menu-button-links.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/example-index/menu-button/menu-button-links

sidebar: true

footer: "          <div class='example-page-footer'>            <p><a href='https://github.com/w3c/aria-practices/projects/5'>View issues related to this example</a></p>            <p>Page last updated: 16 May 2022</p>          </div>        "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link href="css/menu-button-links.css" rel="stylesheet" />
<script src="js/menu-button-links.js" type="text/javascript"></script>


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
          src="{{ '/content-images/wai-aria-practices/img/menubutton.svg' | relative_url }}"
          class="example-page-example-icon"
        >
    
    <div>
      
      <p>
        This example demonstrates the
        <a href="{{ '/ARIA/apg/patterns/menubutton/' | relative_url }}">menu button design pattern</a>
        for a button that displays a menu of link targets.
        The menu items are made from HTML links, so they  maintain their HTML link behaviors.
        That is, activating a menuitem loads the link target, and the browser's link context menu and associated actions are available.
      </p>
      <p>
        In this implementation, an HTML <code>button</code> element reveals a menu structure made with an HTML <code>ul</code> element.
        The <code>menuitem</code> role is on the HTML <code>a</code> element contained by each <code>li</code> element so link behaviors are available when focus is set on the menu item.
        Another reason for applying the <code>menuitem</code> role to the <code>a</code> element instead of the <code>li</code> element is that the semantics of descendants of <code>menuitem</code> elements are not exposed in the accessibility tree.
        That is, an item in a menu can only be a <code>menuitem</code> because accessibility APIs do not enable assistive technologies to render elements contained inside of an item in a menu.
        For a more detailed description of this constraint, see
        <a href="{{ '/ARIA/apg/practices/hiding-semantics/#children-presentational' | relative_url }}">Roles That Automatically Hide Semantics by Making Their Descendants Presentational.</a>
      </p>
      <p>Similar examples include: </p>
      <ul>
        <li><a href="menu-button-actions.html">Action Menu Button Example Using element.focus()</a>: A button that opens a menu of actions or commands where focus in the menu is managed using <code>element.focus()</code>.</li>
        <li><a href="menu-button-actions-active-descendant.html">Action Menu Button Example Using aria-activedescendant</a>: A button that opens a menu of actions or commands where focus in the menu is managed using aria-activedescendant.</li>
      </ul>
      <section>
        <div class="example-header">
          <h2 id="ex_label">Example</h2>
        </div>
        <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
        <div id="ex1">
          <div class="menu-button-links">
            <button type="button"
              id="menubutton"
              aria-haspopup="true"
              aria-controls="menu2"
              >
              WAI-ARIA Quick Links
              <svg xmlns="http://www.w3.org/2000/svg" class="down" width="12" height="9" viewBox="0 0 12 9">
                <polygon points="1 0, 11 0, 6 8"></polygon>
              </svg>
            </button>

            <ul id="menu2" role="menu" aria-labelledby="menubutton">
              <li role="none">
                <a role="menuitem" href="https://www.w3.org/">
                  W3C Home Page
                </a>
              </li>
              <li role="none">
                <a role="menuitem" href="https://www.w3.org/standards/webdesign/accessibility">
                  W3C Web Accessibility Initiative
                </a>
              </li>
              <li role="none">
                <a role="menuitem" href="https://www.w3.org/TR/wai-aria/">
                  Accessible Rich Internet Application Specification
                </a>
              </li>
              <li role="none">
                <a role="menuitem" href="https://www.w3.org/TR/wai-aria-practices/">
                  WAI-ARIA Authoring Practices
                </a>
              </li>
              <li role="none">
                <a role="menuitem" href="https://www.w3.org/TR/wai-aria-implementation/">
                  WAI-ARIA Implementation Guide
                </a>
              </li>
              <li role="none">
                <a role="menuitem" href="https://www.w3.org/TR/accname-aam-1.1/">
                  Accessible Name and Description
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
      </section>

      <section>
        <h2>Accessibility Features</h2>
        <ol>
          <li>A down arrow icon is included to help users understand that the button opens a menu.</li>
          <li>To support operating system high contrast settings:
            <ul>
              <li>
                Because transparent borders are visible on some systems with operating system high contrast settings enabled, transparency cannot be used to create a visual difference between the element that is focused an other elements.
                Instead of using transparency, the focused element has a thicker border and less padding.
                When an element receives focus, its border changes from 1 to 3 pixels and padding is reduced by 2 pixels.
                When an element loses focus, its border changes from 3 pixels to 1 and padding is increased by 2 pixels.
              </li>
              <li>Because background color and text color styles can be overridden by operating system high contrast settings, a border is used to ensure the button has a visible boundary when high contrast mode is enabled.</li>
              <li>
                To ensure the arrow icons used to indicate the expanded or collapsed state have sufficient contrast with the background when high contrast settings invert colors, the CSS <code>currentcolor</code> value for the <code>fill</code> and <code>stroke</code> properties of the SVG <code>polygon</code> element is used to synchronize the color with text content.
                If specific colors are used to specify the <code>fill</code> and <code>stroke</code> properties, these colors will remain the same in high contrast mode, which could lead to insufficient contrast between the icon and the background or even make the icon invisible if its color matches the high contrast mode background.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section>
        <h2 id="kbd_label">Keyboard Support</h2>
        <h3 id="kbd1_label">Menu Button</h3>
        <div class="table-wrap"><table aria-labelledby="kbd1_label kbd_label" class="def">
          <thead>
            <tr>
              <th>Key</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            <tr data-test-id="button-down-arrow-or-space-or-enter">
              <th><kbd>Down Arrow</kbd><br><kbd>Space</kbd><br><kbd>Enter</kbd></th>
              <td>Opens <code>menu</code> and moves focus to first <code>menuitem</code></td>
            </tr>
            <tr data-test-id="button-up-arrow">
              <th><kbd>Up Arrow</kbd></th>
              <td>Opens <code>menu</code> and moves focus to last <code>menuitem</code></td>
            </tr>
          </tbody>
        </table></div>
         <h3 id="kbd2_label" class="widget">Menu</h3>
        <div class="table-wrap"><table aria-labelledby="kbd2_label kbd_label" class="def">
          <thead>
            <tr>
              <th style="min-width: 8em">Key</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            <tr data-test-id="menu-enter">
              <th><kbd>Space</kbd><br><kbd>Enter</kbd></th>
              <td>
                Activates the menu item, which is equivalent to activating the link element from which the menu item is made.
              </td>
            </tr>
            <tr data-test-id="menu-escape">
              <th><kbd>Escape</kbd></th>
              <td>
                <ul>
                  <li>Closes the menu.</li>
                  <li>Sets focus to the menu button.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="menu-up-arrow">
              <th><kbd>Up Arrow</kbd></th>
              <td>
                <ul>
                  <li>Moves focus to the previous menu item.</li>
                  <li>If focus is on the first menu item, moves focus to the last menu item.</li>
                </ul>
              </td>
            </tr>
             <tr data-test-id="menu-down-arrow">
              <th><kbd>Down Arrow</kbd></th>
              <td>
                <ul>
                  <li>Moves focus to the next menu item.</li>
                  <li>If focus is on the last menu item, moves focus to the first menu item.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="menu-home">
              <th><kbd>Home</kbd></th>
              <td>Moves focus to the first menu item.</td>
            </tr>
            <tr data-test-id="menu-end">
              <th><kbd>End</kbd></th>
              <td>Moves focus to the last menu item.</td>
            </tr>
            <tr data-test-id="menu-character">
              <th><kbd>A-Z</kbd><br><kbd>a-z</kbd></th>
              <td>
                <ul>
                  <li>Moves focus to the next menu item with a label that starts with the typed character if such an menu item exists.</li>
                  <li>Otherwise, focus does not move.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table></div>
      </section>

     <section>
        <h2 id="rps_label">Role, Property, State, and Tabindex  Attributes</h2>
        <h3 id="rps1_label">Menu Button</h3>
        <div class="table-wrap"><table aria-labelledby="rps1_label rps_label" class="data attributes">
          <thead>
            <tr>
              <th scope="col">Role</th>
              <th scope="col">Attribute</th>
              <th scope="col">Element</th>
              <th scope="col">Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr data-test-id="button-aria-haspopup">
              <td></td>
              <th scope="row"><code>aria-haspopup=&quot;true&quot;</code></th>
              <td>
                <code>button</code>
              </td>
              <td>
                <ul>
                  <li>Indicates the button opens a menu.</li>
                  <li>
                    <strong>NOTE:</strong> While ARIA does not include a role specifically for menu buttons, most platform accessibility APIs include a menubutton role.
                    Consequently, on such platforms, assistive technologies, such as screen readers, identify buttons that have <code>aria-haspopup</code> set to either <code>true</code> or <code>menu</code> as menu buttons.
                  </li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="button-aria-controls">
              <td></td>
              <th scope="row"><code>aria-controls=&quot;IDREF&quot;</code></th>
              <td>
                <code>button</code>
              </td>
              <td>
                <ul>
                  <li>Refers to the menu element controlled by the menu button.</li>
                  <li>Optional attribute: assistive technology users can operate the menu if not present.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="button-aria-expanded">
                <td></td>
                <th scope="row"><code>aria-expanded=&quot;true&quot;</code></th>
                <td><code>button</code></td>
                <td>
                  <ul>
                    <li>Added when the menu is open.</li>
                    <li>Indicates that the menu is displayed and that activating the menu button closes the menu.</li>
                    <li>The <code>aria-expanded</code> attribute is removed when the menu is closed.</li>
                    <li>Included to support touch devices where screen reader users can touch the menu button when the menu is displayed. Keyboard users cannot focus the menu button when the menu is open.</li>
                  </ul>
                </td>
            </tr>
          </tbody>
        </table></div>
        <h4>Note</h4>
        <p>The label for the button is provided by the text content of the <code>button</code> element.</p>
        <h3 id="rps2_label">Menu</h3>
        <div class="table-wrap"><table aria-labelledby="rps2_label rps_label" class="data attributes">
          <thead>
            <tr>
              <th scope="col">Role</th>
              <th scope="col">Attribute</th>
              <th scope="col">Element</th>
              <th scope="col">Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr data-test-id="menu-role">
              <th scope="row">
                <code>menu</code>
              </th>
              <td></td>
              <td>
                <code>ul</code>
              </td>
              <td>Identifies the <code>ul</code> element as a <code>menu</code>.</td>
            </tr>
            <tr data-test-id="menu-aria-labelledby">
              <td>
                <code></code>
              </td>
              <th scope="row"><code>aria-labelledby=&quot;IDREF&quot;</code></th>
              <td>
                <code>ul</code>
              </td>
              <td>
                <ul>
                  <li>Refers to the element that contains the accessible name for the <code>menu</code>.</li>
                  <li>The menu is labeled by the menu button.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="none-role">
              <th scope="row">
                <code>none</code>
              </th>
              <td></td>
              <td>
                <code>li</code>
              </td>
              <td>
                <ul>
                  <li>Hides the implied <code>listitem</code> role of the <code>li</code> element from assistive technologies.</li>
                  <li>For more details, see <a href="{{ '/ARIA/apg/practices/hiding-semantics/#presentation-role' | relative_url }}">Intentionally Hiding Semantics with the <code>presentation</code> Role</a>.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="menuitem-role">
              <th scope="row">
                <code>menuitem</code>
              </th>
              <td></td>
              <td>
                <code>a</code>
              </td>
              <td>
                <ul>
                  <li>Identifies the element as a <code>menuitem</code>.</li>
                  <li>The text content of the <code>a</code> element provides the accessible name of the <code>menuitem</code>.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="menuitem-tabindex">
              <td></td>
              <th scope="row"><code>tabindex=&quot;-1&quot;</code></th>
              <td>
                <code>a</code>
              </td>
              <td>removes the <code>a</code> element from the page tab sequence but keeps it focusable with JavaScript.</td>
            </tr>
          </tbody>
        </table></div>
      </section>

      <section>
        <h2>Javascript and CSS Source Code</h2>

        <ul id="cssJsFiles">
          <li>CSS: <a href="css/menu-button-links.css" type="text/css">menu-button-links.css</a></li>
          <li>Javascript: <a href="js/menu-button-links.js" type="text/javascript">menu-button-links.js</a></li>
        </ul>
      </section>
      <section>
        <h2 id="sc1_label">HTML Source Code</h2>
        <div role="separator" id="sc1_start_sep" aria-labelledby="sc1_start_sep sc1_label" aria-label="Start of"></div>
        <pre><code id="sc1"></code></pre>
        <div role="separator" id="sc1_end_sep" aria-labelledby="sc1_end_sep sc1_label" aria-label="End of"></div>
        
        <script>
          sourceCode.add('sc1', 'ex1', 'ex_label', 'cssJsFiles');
          sourceCode.make();
        </script>
      </section>
    </div>
    
  
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
