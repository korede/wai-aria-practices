---
# This is a generated file
title: "Breadcrumb Example"
ref: /ARIA/apg/example-index/breadcrumb/index

github:
  repository: w3c/aria-practices
  branch: main
  path: examples/breadcrumb/index.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/example-index/breadcrumb/index

sidebar: true

footer: "          <div class='example-page-footer'>            <p><a href='https://github.com/w3c/aria-practices/projects/21'>View issues related to this example</a></p>            <p>Page last updated: 23 November 2021</p>          </div>        "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link href="css/breadcrumb.css" rel="stylesheet" />


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
          src="{{ '/content-images/wai-aria-practices/img/breadcrumb.svg' | relative_url }}"
          class="example-page-example-icon"
        >
  
    <div>
    
    <p>The following example demonstrates the <a href="{{ '/ARIA/apg/patterns/breadcrumb/' | relative_url }}">breadcrumb design pattern</a>.</p>
    <section>
      <div class="example-header">
        <h2 id="ex_label">Example</h2>
      </div>
      <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
      <div id="ex1">
        <nav aria-label="Breadcrumb" class="breadcrumb">
          <ol>
            <li>
              <a href="../../">WAI-ARIA Authoring Practices</a>
            </li>
            <li>
              <a href="{{ '/ARIA/apg/patterns/' | relative_url }}">Design Patterns</a>
            </li>
            <li>
              <a href="{{ '/ARIA/apg/patterns/breadcrumb/' | relative_url }}">Breadcrumb Pattern</a>
            </li>
            <li>
              <a href="index.html" aria-current="page">Breadcrumb Example</a>
            </li>
          </ol>
        </nav>
      </div>
      <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
    </section>

    <section>
      <h2>Accessibility Features</h2>
      <ul>
        <li>The set of links is structured using an ordered list .</li>
        <li>A <code>nav</code> element labeled <q>Breadcrumb</q> identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it is easy to locate.</li>
        <li>To prevent screen reader announcement of the visual separators between links, they are added via <abbr title="Cascading Style Sheets">CSS</abbr>:
          <ul>
            <li>
              The separators are part of the visual presentation that signifies the breadcrumb trail, which is already semantically represented by the <code>nav</code> element with its label of <q>Breadcrumb</q>.
              So, using a display technique that is not represented in the accessibility tree used by screen readers prevents redundant and potentially distracting verbosity.
            </li>
            <li>Each link has a border on one side that is skewed with the CSS’ <code>transform</code> property so it resembles a slash.</li>
          </ul>
        </li>
      </ul>
    </section>

    <section>
      <h2 id="kbd_label">Keyboard Support</h2>
      <p>No keyboard interaction needed.</p>
    </section>

    <section>
      <h2 id="rps_label">Role, Property, State, and Tabindex  Attributes</h2>
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
          <tr data-test-id="aria-label">
            <td></td>
            <th scope="row">
              <code>aria-label=<q>Breadcrumb</q></code>
            </th>
            <td>
              <code>nav</code>
            </td>
            <td>
              Provides a label that describes the type of navigation provided in the <code>nav</code> element.
            </td>
          </tr>
          <tr data-test-id="aria-current">
            <td></td>
            <th scope="row">
              <code>aria-current=<q>page</q></code>
            </th>
            <td>
              <code>a</code>
            </td>
            <td>
              Applied to the last link in the set to indicate that it represents the current page.
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
          <a href="css/breadcrumb.css" type="tex/css">breadcrumb.css</a>
        </li>
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
