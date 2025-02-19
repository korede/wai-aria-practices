---
# This is a generated file
title: "Actions Menu Button Example Using aria-activedescendant"
ref: /ARIA/apg/example-index/menu-button/menu-button-actions-active-descendant

github:
  repository: w3c/aria-practices
  branch: main
  path: examples/menu-button/menu-button-actions-active-descendant.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/example-index/menu-button/menu-button-actions-active-descendant

sidebar: true

footer: "          <div class='example-page-footer'>            <p><a href='https://github.com/w3c/aria-practices/projects/5'>View issues related to this example</a></p>            <p>Page last updated: 16 May 2022</p>          </div>        "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link href="css/menu-button-actions.css" rel="stylesheet" />
<script
  src="js/menu-button-actions-active-descendant.js"
  type="text/javascript"
></script>


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
        This example demonstrates how the
        <a href="{{ '/ARIA/apg/patterns/menubutton/' | relative_url }}">menu button design pattern</a>
      can be used to create a button that opens an actions menu.
      In this example, choosing an action from the menu will cause the chosen action to be displayed in the <q>Last Action</q> edit box.
    </p>
    <p>
    This implementation
    <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_focus_activedescendant' | relative_url }}">uses aria-activedescendant to manage focus</a>
    in the menu.
      </p>
      <p>Similar examples include: </p>
      <ul>
        <li><a href="menu-button-actions.html">Action Menu Button Example Using element.focus()</a>: A button that opens a menu of actions or commands where focus in the menu is managed using <code>element.focus()</code>.</li>
        <li><a href="menu-button-links.html">Navigation Menu Button</a>: A button that opens a menu of items that behave as links.</li>
      </ul>
      <section>
        <div class="example-header">
          <h2 id="ex_label">Example</h2>
        </div>
        <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
        <div id="ex1">
          <div class="menu-button-actions">
            <button type="button"
                id="menubutton1"
                aria-haspopup="true"
                aria-controls="menu1"
                >
              Actions
              <svg xmlns="http://www.w3.org/2000/svg" class="down" width="12" height="9" viewBox="0 0 12 9">
                <polygon points="1 0, 11 0, 6 8"></polygon>
              </svg>
            </button>
            <ul id="menu1"
                role="menu"
                tabindex="-1"
                aria-labelledby="menubutton1"
                aria-activedescendant="mi1">
              <li id="mi1" role="menuitem">Action 1</li>
              <li id="mi2" role="menuitem">Action 2</li>
              <li id="mi3" role="menuitem">Action 3</li>
              <li id="mi4" role="menuitem">Action 4</li>
            </ul>
          </div>
        <p>
          <label>Last Action: <input class="action" id="action_output" type="text" value=""></label>
        </p>
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
              <th><kbd>Enter</kbd></th>
              <td>
                <ul>
                  <li>Activates the menu item, causing the <q>Last Action</q> textbox to be updated.</li>
                                    <li>Closes the menu.</li>
                                    <li>Sets focus on the menu button</li>
                </ul>
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
                  <li>Indicates the <code>button</code> element opens a menu.</li>
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
            <tr data-test-id="menu-tabindex">
              <td></td>
              <th scope="row"><code>tabindex=&quot;-1&quot;</code></th>
              <td>
                <code>ul</code>
              </td>
              <td>
                <ul>
                  <li>Allows DOM focus to be set on the menu container with the JavaScript focus method.</li>
                  <li>Dynamically added by the JavaScript.</li>
                  <li>Note that users never perceive the menu container as focused. When the menu is open, only menu items are perceived as focused.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="menu-aria-activedescendant">
              <td></td>
              <th scope="row"><code>aria-activedescendant=&quot;IDREF&quot;</code></th>
              <td>
                <code>ul</code>
              </td>
              <td>
                <ul>
                  <li>Refers to the descendant <code>menuitem</code> element that is visually indicated as focused.</li>
                  <li>The <code>IDREF</code> value is updated when keys that move the focus indicator among menu items are pressed.</li>
                  <li>Enables assistive technologies to know which element the application regards as focused while DOM focus remains on the <code>ul</code> element with role <code>menu</code>.</li>
                  <li>
                    For more information about this focus management technique, see
                    <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_focus_activedescendant' | relative_url }}">Using aria-activedescendant to Manage Focus.</a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="menuitem-role">
              <th scope="row">
                <code>menuitem</code>
              </th>
              <td></td>
              <td>
                <code>li</code>
              </td>
              <td>
                <ul>
                  <li>Identifies the <code>li</code> element as a <code>menuitem</code>.</li>
                  <li>The text content of the <code>li</code> element provides the accessible name of the <code>menuitem</code>.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table></div>

      </section>

      <section>
        <h2>Javascript and CSS Source Code</h2>

        <ul id="css_js_files">
          <li>CSS: <a href="css/menu-button-actions.css" type="text/css">menu-button-actions.css</a></li>
          <li>Javascript: <a href="js/menu-button-actions-active-descendant.js" type="text/javascript">menu-button-actions-active-descendant.js</a></li>
        </ul>
      </section>
      <section>
        <h2 id="sc1_label">HTML Source Code</h2>
        <div role="separator" id="sc1_start_sep" aria-labelledby="sc1_start_sep sc1_label" aria-label="Start of"></div>
        <pre><code id="sc1"></code></pre>
        <div role="separator" id="sc1_end_sep" aria-labelledby="sc1_end_sep sc1_label" aria-label="End of"></div>
        
        <script>
          sourceCode.add('sc1', 'ex1', 'ex_label', 'css_js_files');
          sourceCode.make();
        </script>
      </section>
    </div>
    
  
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
