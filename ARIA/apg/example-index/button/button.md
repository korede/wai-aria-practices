---
# This is a generated file
title: "Button Examples"
ref: /ARIA/apg/example-index/button/button

github:
  repository: w3c/aria-practices
  branch: main
  path: examples/button/button.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/example-index/button/button

sidebar: true

footer: "          <div class='example-page-footer'>            <p><a href='https://github.com/w3c/aria-practices/projects/14'>View issues related to this example</a></p>            <p>Page last updated: 16 May 2022</p>          </div>        "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link rel="stylesheet" href="css/button.css" />
<script src="js/button.js"></script>


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
          src="{{ '/content-images/wai-aria-practices/img/button.svg' | relative_url }}"
          class="example-page-example-icon"
        >
  

  <div>
    

    <p>
      The following command and toggle button examples demonstrate the <a href="{{ '/ARIA/apg/patterns/button/' | relative_url }}">button design pattern.</a>
    </p>

    <p>Similar examples include:</p>

    <ul>
      <li><a href="../menu-button/menu-button-links.html">Navigation Menu Button</a>: A button that opens a menu of items that behave as links.</li>
      <li><a href="../menu-button/menu-button-actions.html">Action Menu Button Example Using <code>element.focus()</code></a>: A button that opens a menu of actions or commands where focus in the menu is managed using <code>element.focus()</code>.</li>
      <li><a href="../menu-button/menu-button-actions-active-descendant.html">Action Menu Button Example Using <code>aria-activedescendant</code></a>: A button that opens a menu of actions or commands where focus in the menu is managed using <code>aria-activedescendant</code>.</li>
    </ul>

    <section>
    <div class="example-header">
      <h2 id="ex_label">Example</h2>
    </div>

      <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>

      <div id="example">
        <p>This <q>Print</q> action button uses a <code>div</code> element.</p>
        <div tabindex="0" role="button" id="action">Print Page</div>

        <p>This <q>Mute</q> toggle button uses an <code>a</code> element.</p>
        <a tabindex="0" role="button" id="toggle" aria-pressed="false">
          Mute
          <svg aria-hidden="true" focusable="false">
            <use xlink:href="#icon-sound"></use>
          </svg>
        </a>

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:none" id="svg_definitions">
          <defs>
            <symbol id="icon-mute" viewBox="0 0 75 75">
              <polygon id="polygon1"
                 points="39.389,13.769 22.235,28.606 6,28.606 6,47.699 21.989,47.699 39.389,62.75 39.389,13.769"
                 style="stroke:currentcolor;stroke-width:5;stroke-linejoin:round;fill:currentcolor;" ></polygon>
              <path id="path3003"
                 d="M 48.651772,50.269646 69.395223,25.971024"
                 style="fill:none;stroke:currentcolor;stroke-width:5;stroke-linecap:round" ></path>
              <path id="path3003-1"
                 d="M 69.395223,50.269646 48.651772,25.971024"
                 style="fill:none;stroke:currentcolor;stroke-width:5;stroke-linecap:round"></path>
            </symbol>
            <symbol id="icon-sound" viewBox="0 0 75 75">
              <polygon points="39.389,13.769 22.235,28.606 6,28.606 6,47.699 21.989,47.699 39.389,62.75 39.389,13.769"
                style="stroke:currentcolor;stroke-width:5;stroke-linejoin:round;fill:currentcolor;"></polygon>
              <path d="M 48.128,49.03 C 50.057,45.934 51.19,42.291 51.19,38.377 C 51.19,34.399 50.026,30.703 48.043,27.577"
                style="fill:none;stroke:currentcolor;stroke-width:5;stroke-linecap:round"></path>
              <path d="M 55.082,20.537 C 58.777,25.523 60.966,31.694 60.966,38.377 C 60.966,44.998 58.815,51.115 55.178,56.076"
                style="fill:none;stroke:currentcolor;stroke-width:5;stroke-linecap:round"></path>
              <path d="M 61.71,62.611 C 66.977,55.945 70.128,47.531 70.128,38.378 C 70.128,29.161 66.936,20.696 61.609,14.01"
                style="fill:none;stroke:currentcolor;stroke-width:5;stroke-linecap:round"></path>
            </symbol>
          </defs>
        </svg>

      </div>

      <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
    </section>

    <section>
      <h2 id="kbd_label">Keyboard Support</h2>

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
            <td>Activates the button.</td>
          </tr>
          <tr data-test-id="key-space">
            <th><kbd>Space</kbd></th>
            <td>Activates the button.</td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h2 id="rps_label">Role, Property, State, and Tabindex Attributes</h2>

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
          <tr data-test-id="button-role">
            <th scope="row"><code>button</code></th>
            <td></td>
            <td>
              <code>div</code>, <code>a</code>
            </td>
            <td>
              <ul>
                <li>Identifies the element as a <code>button</code> widget.</li>
                <li>Accessible name for the button is defined by the text content of the element.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="button-tabindex">
            <td></td>
            <th scope="row">
              <code>tabindex=&quot;0&quot;</code>
            </th>
            <td>
              <code>div</code>, <code>a</code>
            </td>
            <td>
              <ul>
                <li>Includes the element in the tab sequence.</li>
                <li>Needed on the <code>a</code> element because it does not have a <code>href</code> attribute.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="button-aria-pressed">
            <td></td>
            <th scope="row"><code>aria-pressed=&quot;false&quot;</code></th>
            <td><code>a</code></td>
            <td>
              <ul>
                <li>Identifies the button as a toggle button.</li>
                <li>Indicates the toggle button is not pressed.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="button-aria-pressed">
            <td></td>
            <th scope="row"><code>aria-pressed=&quot;true&quot;</code></th>
            <td><code>a</code></td>
            <td>
              <ul>
                <li>Identifies the button as a toggle button.</li>
                <li>Indicates the toggle button is pressed.</li>
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
          <a href="css/button.css" type="text/css">button.css</a>
        </li>
        <li>
          Javascript:
          <a href="js/button.js" type="text/javascript">button.js</a>
        </li>
      </ul>
    </section>

    <section>
      <h2 id="sc1_label">HTML Source Code</h2>

      <div role="separator" id="sc1_start_sep" aria-labelledby="sc1_start_sep sc1_label" aria-label="Start of"></div>

      <pre><code id="source1"></code></pre>

      <div role="separator" id="sc1_end_sep" aria-labelledby="sc1_end_sep sc1_label" aria-label="End of"></div>

      <script>
        sourceCode.add('source1', 'example', 'ex_label', 'css_js_files');
        sourceCode.make();
      </script>
    </section>
  </div>

  

</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
