---
# This is a generated file
title: "Alert Example"
ref: /ARIA/apg/example-index/alert/alert

github:
  repository: w3c/aria-practices
  branch: main
  path: examples/alert/alert.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/example-index/alert/alert

sidebar: true

footer: "          <div class='example-page-footer'>            <p><a href='https://github.com/w3c/aria-practices/projects/20'>View issues related to this example</a></p>            <p>Page last updated: 23 November 2021</p>          </div>        "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link href="css/alert.css" rel="stylesheet" />
<script src="js/alert.js" type="text/javascript"></script>


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
          src="{{ '/content-images/wai-aria-practices/img/alert.svg' | relative_url }}"
          class="example-page-example-icon"
        >
  
    <div>
    
    <p>
      The below example demonstrates the <a href="{{ '/ARIA/apg/patterns/alert/' | relative_url }}">design pattern for alert</a>.
      Activating the <q>Trigger Alert</q> button causes a message to be inserted into the example alert element.
    </p>
    <p>Similar examples include:</p>
    <ul>
      <li><a href="../dialog-modal/alertdialog.html">Alert Dialog Example</a>: A confirmation prompt that demonstrates an alert dialog.</li>
    </ul>
    <section>
      <div class="example-header">
        <h2 id="ex_label">Example</h2>
      </div>
      <p>
        This is just a test.
        A typical alert is triggered by an event, such as an error, warning condition, or the arrival of information that is important in the context of the user's task.
      </p>
      <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
      <div id="ex1">
        <button type="button" id="alert-trigger">Trigger Alert</button>

        <div id="example" role="alert"></div>

        
        <script type="text/template" id="alert-template">
          <p>Hello</p>
        </script>
      </div>
      <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
    </section>

    <section>
      <h2>Accessibility Features</h2>
      <p>
        Because an alert is for critical information, assistive technologies may provide special behaviors designed to help call attention to changes in the text of an alert.
        For example, screen readers may interrupt all other speech and preface announcement of the new alert text with a special sound or phrase.
      </p>
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
          <tr data-test-id="alert-role">
            <th scope="row"><code>alert</code></th>
            <td></td>
            <td><code>div</code></td>
            <td>Identifies the element as the container where alert content will be added or updated.</td>
          </tr>
          <tr data-test-id="test-not-required">
            <td></td>
            <th scope="row"><code>aria-live=<q>assertive</q></code></th>
            <td>Implicit on <code>div</code></td>
            <td>
              <ul>
                <li>This does not have to be declared in the code because it is implicit in the alert role.</li>
                <li>Tells assistive technologies to interrupt other processes to provide users with immediate notification of relevant alert container changes.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="test-not-required">
            <td></td>
            <th scope="row"><code>aria-atomic=<q>true</q></code></th>
            <td>Implicit on <code>div</code></td>
            <td>
              <ul>
                <li>This does not have to be declared in the code because it is implicit in the alert role.</li>
                <li>Tells assistive technologies to use the entire content of the alert element as the alert message even if only a portion of it has changed.</li>
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
          <a href="css/alert.css" type="tex/css">alert.css</a>
        </li>
        <li>
          Javascript:
          <a href="js/alert.js" type="text/javascript">alert.js</a>
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
