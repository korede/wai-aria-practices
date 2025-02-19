---
# This is a generated file
title: "Rating Slider Example"
ref: /ARIA/apg/example-index/slider/slider-rating

github:
  repository: w3c/aria-practices
  branch: main
  path: examples/slider/slider-rating.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/example-index/slider/slider-rating

sidebar: true

footer: "          <div class='example-page-footer'>            <p><a href='https://github.com/w3c/aria-practices/projects/3'>View issues related to this example</a></p>            <p>Page last updated: 16 May 2022</p>          </div>        "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link rel="stylesheet" type="text/css" href="css/slider-rating.css" />
<script src="js/slider-rating.js" type="text/javascript"></script>


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
    <p>
      <strong>WARNING!</strong> Some users of touch-based assistive technologies may experience difficulty utilizing widgets that implement this slider pattern because the gestures their assistive technology provides for operating sliders may not yet generate the necessary output.
      To change the slider value, touch-based assistive technologies need to respond to user gestures for increasing and decreasing the value by synthesizing key events.
      This is a new convention that may not be fully implemented by some assistive technologies.
      Authors should fully test slider widgets using assistive technologies on devices where touch is a primary input mechanism before considering incorporation into production systems.
    </p>
  </div><img alt=""
          src="{{ '/content-images/wai-aria-practices/img/slider.svg' | relative_url }}"
          class="example-page-example-icon"
        >
   <p>
      Following is an example of a rating input that demonstrates the
      <a href="{{ '/ARIA/apg/patterns/slider/' | relative_url }}">slider design pattern.</a>
      This rating widget employs a slider because the slider pattern supports step values of any size.
      This particular input enables half-star steps.
      A typical five-star rating widget that allows only five possible values could instead be implemented as a
      <a href="{{ '/ARIA/apg/patterns/radiobutton/' | relative_url }}">radio group.</a>
    </p>
    <p>Similar examples include: </p>
    <ul>
      <li><a href="../radio/radio-rating.html">Rating Radio Group Example</a>: Radio group that provides input for a five-star rating scale.</li>
      <li><a href="slider-color-viewer.html">Color Viewer Slider Example</a>: Basic  horizontal sliders that illustrate setting numeric values for a color picker.</li>
      <li><a href="slider-temperature.html">Vertical Temperature Slider Example</a>: Demonstrates using <code>aria-orientation</code> to specify vertical orientation and <code>aria-valuetext</code> to communicate unit of measure for a temperature input.</li>
      <li><a href="slider-seek.html">Media Seek Slider Example</a>: Horizontal slider that demonstrates using <code>aria-valuetext</code> to communicate current and maximum values of time in media to make the values easy to understand for assistive technology users by converting the total number of seconds to minutes and seconds.</li>
      <li><a href="multithumb-slider.html">Horizontal Multi-Thumb Slider Example</a>: Demonstrates using sliders with two thumbs to provide inputs for  numeric ranges, such as for searching in a price range.</li>
    </ul>
    <section>
      <div class="example-header">
        <h2 id="ex_label">Example</h2>
      </div>
      <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
      <div id="ex1">
        <div id="id-rating-label" class="label">Rating</div>

        <div id="id-rating"
            class="rating-slider"
            role="slider"
            tabindex="0"
            aria-valuemin="0"
            aria-valuenow="0"
            aria-valuemax="5"
            aria-valuetext="no stars"
            aria-labelledby="id-rating-label">

          

          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="224" height="48">
            <defs>
              <g id="star">
                <polygon points="2.0,13.4 11.7,20.5 8.0,31.1 17.7,24.8 27.4,31.9 23.7,20.5 33.4,13.4 21.4,13.4 17.7,2.0 14.0,13.4"></polygon>
              </g>
              <g id="fill-left">
                <polygon points="2.0,13.4 11.7,20.5 8.0,31.1 17.7,24.8 17.7,2.0 14.0,13.4"></polygon>
              </g>
            </defs>
            <rect class="focus-ring" x="2" y="2" width="212" height="44" rx="5"></rect>
            <g class="star-1 star-2 star-3 star-4 star-5">
              <use class="star" xlink:href="#star" x="10" y="7"></use>
              <use class="fill-left" xlink:href="#fill-left" x="10" y="7"></use>
            </g>
            <g class="star-2 star-3 star-4 star-5">
              <use class="star" xlink:href="#star" x="50" y="7"></use>
              <use class="fill-left" xlink:href="#fill-left" x="50" y="7"></use>
            </g>
            <g class="star-3 star-4 star-5">
              <use class="star" xlink:href="#star" x="90" y="7"></use>
              <use class="fill-left" xlink:href="#fill-left" x="90" y="7"></use>
            </g>
            <g class="star-4 star-5">
              <use class="star" xlink:href="#star" x="130" y="7"></use>
              <use class="fill-left" xlink:href="#fill-left" x="130" y="7"></use>
            </g>
            <g class="star-5">
              <use class="star" xlink:href="#star" x="170" y="7"></use>
              <use class="fill-left" xlink:href="#fill-left" x="170" y="7"></use>
            </g>
          </svg>
        </div>
      </div>
      <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
    </section>

    <section>
      <h2>Accessibility Features</h2>
      <ul>
        <li>
          To ensure assistive technology users correctly perceive the maximum slider value, this example uses the <code>aria-valuetext</code> property to communicate both the current and maximum values.
          However, since repeating the maximum value every time the slider value changes is potentially distracting, the maximum value is included in <code>aria-valuetext</code> only when the slider is initialized and when the thumb loses keyboard focus.
        </li>
        <li>To highlight the interactive nature of the rating stars, a focus ring appears around the group of stars when the thumb has focus.</li>
        <li>
          To ensure the borders of the stars and focus ring have sufficient contrast with the background when high contrast settings invert colors, the color of the borders are synchronized with the color of the text content.
          For example, the color of the star borders is set to match the foreground color of  high contrast mode text by specifying the CSS <code>currentcolor</code> value for the <code>stroke</code> property of each inline SVG <code>polygon</code> element.
          To enable the high contrast background color to be the used as the contrasting color when a star is not fully or partially filled, the <code>fill-opacity</code> attribute of the <code>polygon</code> is set to zero.
          If specific colors were used to specify the <code>stroke</code> and <code>fill</code> properties, the color of these elements would remain the same in high contrast mode, which could lead to insufficient contrast between them and their background or even make them invisible if their color were to match the high contrast mode background.
          <br>Note: The SVG element needs to have the CSS <code>forced-color-adjust</code> property set to the value <code>auto</code> for the <code>currentcolor</code> value to be updated in high contrast modes.
          Some browsers do not use <code>auto</code> for the default value.
        </li>
      </ul>
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
          <tr data-test-id="key-right-arrow">
            <th><kbd>Right Arrow</kbd></th>
            <td>Increases slider one half star.</td>
          </tr>
          <tr data-test-id="key-up-arrow">
            <th><kbd>Up Arrow</kbd></th>
            <td>Increases slider one half star.</td>
          </tr>
          <tr data-test-id="key-left-arrow">
            <th><kbd>Left Arrow</kbd></th>
            <td>Decreases slider one half star.</td>
          </tr>
          <tr data-test-id="key-down-arrow">
            <th><kbd>Down Arrow</kbd></th>
            <td>Decreases slider one half star.</td>
          </tr>
          <tr data-test-id="key-page-up">
            <th><kbd>Page Up</kbd></th>
            <td>Increases slider value multiple steps. In this slider, jumps one star.</td>
          </tr>
          <tr data-test-id="key-page-down">
            <th><kbd>Page Down</kbd></th>
            <td>Decreases slider value multiple steps. In this slider, jumps one star.</td>
          </tr>
          <tr data-test-id="key-home">
            <th><kbd>Home</kbd></th>
            <td>Sets slider to its minimum value, no stars.</td>
          </tr>
          <tr data-test-id="key-end">
            <th><kbd>End</kbd></th>
            <td>Sets slider to its maximum value, five stars.</td>
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
          <tr data-test-id="slider-role">
            <th scope="row">
              <code>slider</code>
            </th>
            <td></td>
            <td>
              <code>div</code>
            </td>
            <td>
              <ul>
                <li>Identifies the element as a slider.</li>
                <li>Set on the <code>div</code> that represents the movable thumb because it is the operable element that controls the slider value.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="slider-tabindex">
            <td></td>
            <th scope="row">
              <code>tabindex="0"</code>
            </th>
            <td>
              <code>div</code>
            </td>
            <td>Includes the slider thumb in the page tab sequence.</td>
          </tr>
          <tr data-test-id="aria-valuemax">
            <td></td>
            <th scope="row">
              <code>aria-valuemax="5"</code>
            </th>
            <td>
              <code>div</code>
            </td>
            <td>Specifies the maximum value of the slider.</td>
          </tr>
          <tr data-test-id="aria-valuemin">
            <td></td>
            <th scope="row">
              <code>aria-valuemin="0"</code>
            </th>
            <td>
              <code>div</code>
            </td>
            <td>Specifies the minimum value of the slider.</td>
          </tr>
          <tr data-test-id="aria-valuenow">
            <td></td>
            <th scope="row">
              <code>aria-valuenow="NUMBER"</code>
            </th>
            <td>
              <code>div</code>
            </td>
            <td>Indicates the current value of the slider.</td>
          </tr>
          <tr data-test-id="aria-valuetext">
            <td></td>
            <th scope="row">
              <code>aria-valuetext="STRING"</code>
            </th>
            <td>
              <code>div</code>
            </td>
            <td>
              <ul>
                <li>A string value that provides a user-friendly name for the current value of the slider -- the number of stars and half stars.</li>
                <li>When initialized, and when the slider loses focus, the string also includes the maximum value of five stars, e.g., <q>3 of 5 stars</q>.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="aria-labelledby">
            <td></td>
            <th scope="row">
              <code>aria-labelledby="IDREF"</code>
            </th>
            <td>
              <code>div</code>
            </td>
            <td>Refers to the element containing the name of the slider.</td>
          </tr>
          <tr data-test-id="svg-aria-hidden">
            <td></td>
            <th scope="row"><code>aria-hidden="true"</code></th>
            <td><code>svg</code></td>
            <td>Removes the SVG elements from the accessibility tree to prevent assistive technologies from presenting them as elements separate from the slider.</td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h2>Javascript and CSS Source Code</h2>
      <ul id="css_js_files">
        <li>CSS: <a href="css/slider-rating.css" type="text/css">slider-rating.css</a></li>
        <li>Javascript: <a href="js/slider-rating.js" type="text/javascript">slider-rating.js</a></li>
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
