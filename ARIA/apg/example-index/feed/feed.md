---
# This is a generated file
title: "Feed Example"
ref: /ARIA/apg/example-index/feed/feed

github:
  repository: w3c/aria-practices
  branch: main
  path: examples/feed/feed.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/example-index/feed/feed

sidebar: true

footer: "          <div class='example-page-footer'>            <p><a href='https://github.com/w3c/aria-practices/projects/19'>View issues related to this example</a></p>            <p>Page last updated: 23 November 2021</p>          </div>        "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>


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
          src="{{ '/content-images/wai-aria-practices/img/feed.svg' | relative_url }}"
          class="example-page-example-icon"
        >
  
  <div>
  
  <p>
    <strong>NOTE:</strong> The feed role is a new WAI-ARIA feature, introduced by WAI-ARIA 1.1.
     This page provides a proposed implementation of a feed component.
    This proposal does not yet have ARIA Practices Task Force consensus.
    Feedback is welcome in
    <a href="https://github.com/w3c/aria-practices/issues/565">issue 565.</a>
  </p>
  <p>
    The example below implements the
    <a href="{{ '/ARIA/apg/patterns/feed/' | relative_url }}">feed design pattern.</a>
    for a restaurant review site.
    To imitate an infinitely scrolling set of data, information about ten restaurants is repeatedly loaded as the user reads the feed.
    Outside of the feed, an article load time selector is available for simulating data fetch delays.
  </p>
  <p>
    Unlike other examples in the WAI-ARIA Authoring Practices, the example experience has its own page separate from this documentation page.
  </p>
  <section>
    <h2 id="ex_label">Example</h2>
    <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
    <div id="ex1">
      <p>
        The example feed experience is presented on a separate
        <a href="feedDisplay.html">feed display page.</a>
      </p>
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
        <tr data-test-id="key-page-down">
          <th><kbd>Page Down</kbd></th>
          <td>Move focus to next article.</td>
        </tr>
        <tr data-test-id="key-page-up">
          <th><kbd>Page Up</kbd></th>
          <td>Move focus to previous article.</td>
        </tr>
        <tr data-test-id="key-control-end">
          <th><kbd>Control + End</kbd></th>
          <td>Move focus to the first focusable element after the feed.</td>
        </tr>
        <tr data-test-id="key-control-home">
          <th><kbd>Control + Home</kbd></th>
          <td>Move focus to the first focusable element before the feed.</td>
        </tr>
      </tbody>
    </table></div>
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
        <tr data-test-id="feed-role">
          <th scope="row"><code>feed</code></th>
          <td></td>
          <td><code>div</code></td>
          <td>
            <ul>
              <li>Identifies the element that contains the set of feed articles.</li>
              <li>The feed element is a structural container that it is not focusable.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="feed-aria-labelledby">
          <td></td>
          <th scope="row"><code>aria-labelledby="IDREF"</code></th>
          <td><code>div</code></td>
          <td>Provides an accessible name for the feed element.</td>
        </tr>
        <tr data-test-id="feed-aria-busy">
          <td></td>
          <th scope="row"><code>aria-busy="true"</code></th>
          <td><code>div</code></td>
          <td>
            <ul>
              <li>Set during the process of loading additional articles.</li>
              <li>Removed when the article load process is complete.</li>
              <li>Enables assistive technologies to ignore DOM changes during the load process and then render the changes when the DOM is stable.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="article-role">
          <th scope="row"><code>article</code></th>
          <td></td>
          <td><code>div</code></td>
          <td>
            <ul>
              <li>Identifies an element that contains content for a feed article.</li>
              <li>Feed articles and their content are Dynamically created in the JavaScript.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="article-tabindex">
          <td></td>
          <th scope="row"><code>tabindex="0"</code></th>
          <td><code>div</code></td>
          <td>
            <ul>
              <li>Makes the article element focusable and includes it in the page <kbd>Tab</kbd> sequence.</li>
              <li>As the user reads, the feed loads additional articles based on either focus position or scroll position.</li>
              <li>Assistive technologies can ensure new articles are loaded and correctly visually positioned by ensuring that the article containing the assistive technology reading cursor has or contains DOM focus.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="article-labelledby">
          <td> </td>
          <th scope="row"><code>aria-labelledby="IDREF_LIST"</code></th>
          <td><code>div</code></td>
          <td>
            <ul>
              <li>Identifies one or more elements in the article that provide a distinguishing label.</li>
              <li>In this example, the restaurant name sufficiently identifies each article.</li>
              <li>Note: due to the nature of feeds, labels are often not unique.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="article-describedby">
          <td> </td>
          <th scope="row"><code>aria-describedby="IDREF_LIST"</code></th>
          <td><code>div</code></td>
          <td>
            <ul>
              <li>Refers to the list of elements that provide the main content of the article.</li>
              <li>Does not include elements that are identically repeated in every article, e.g., does not include the &quot;Bookmark&quot; button.</li>
              <li>Enables assistive technology users to skim the feed.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="article-aria-posinset">
          <td> </td>
          <th scope="row"><code>aria-posinset="INTEGER"</code></th>
          <td><code>div</code></td>
          <td>
            <ul>
              <li>Indicates the position of the article in the feed.</li>
              <li>Numbering starts with 1.</li>
              <li>Note: If articles are added to the beginning of the feed, all articles are renumbered.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="article-aria-setsize">
          <td></td>
          <th scope="row"><code>aria-setsize="INTEGER"</code></th>
          <td><code>div</code></td>
          <td>Set to the total number of articles currently contained by the feed element.</td>
        </tr>
      </tbody>
    </table></div>
  </section>

  <section>
    <h2>Javascript and CSS Source Code</h2>
    <p>The following Javascript and CSS is used by the feedDisplay.html page:</p>
    <ul>
      <li><a href="css/feedDisplay.css" type="tex/css">feedDisplay.css</a></li>
      <li>Javascript: <a href="js/feed.js" type="text/javascript">feed.js</a>, <a href="js/feedDisplay.js" type="text/javascript">feedDisplay.js</a>, <a href="js/main.js" type="text/javascript">main.js</a>, <a href="../js/utils.js">utils.js</a></li>
    </ul>
  </section>

  <section>
    <h2 id="sc1_label">HTML Source Code</h2>
    <p>Please open <a href="feedDisplay.html">feedDisplay.html</a> and view source.</p>
  </section>
  </div>
  

</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
