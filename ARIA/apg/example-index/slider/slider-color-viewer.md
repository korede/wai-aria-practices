---
# This is a generated file
title: "Color Viewer Slider Example"
ref: /ARIA/apg/example-index/slider/slider-color-viewer

github:
  repository: w3c/aria-practices
  branch: main
  path: examples/slider/slider-color-viewer.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/example-index/slider/slider-color-viewer

sidebar: true

footer: "          <div class='example-page-footer'>            <p><a href='https://github.com/w3c/aria-practices/projects/3'>View issues related to this example</a></p>            <p>Page last updated: 16 May 2022</p>          </div>        "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link rel="stylesheet" type="text/css" href="css/slider-color-viewer.css" />
<script src="js/slider-color-viewer.js" type="text/javascript"></script>


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
      Following is an example of a color viewer that demonstrates the
      <a href="{{ '/ARIA/apg/patterns/slider/' | relative_url }}">slider design pattern.</a>
      Change the background of the color view box by adjusting the sliders for red, green, and blue values.
      The HEX and RGB values of the chosen color are displayed by the color view box.
    </p>
    <p>Similar examples include: </p>
    <ul>
      <li><a href="slider-temperature.html">Vertical Temperature Slider Example</a>: Demonstrates using <code>aria-orientation</code> to specify vertical orientation and <code>aria-valuetext</code> to communicate unit of measure for a temperature input.</li>
      <li><a href="slider-rating.html">Rating Slider Example</a>: Horizontal slider that demonstrates using <code>aria-valuetext</code> to communicate current and maximum value of a rating input for a five star rating scale.</li>
      <li><a href="slider-seek.html">Media Seek Slider Example</a>: Horizontal slider that demonstrates using <code>aria-valuetext</code> to communicate current and maximum values of time in media to make the values easy to understand for assistive technology users by converting the total number of seconds to minutes and seconds.</li>
      <li><a href="multithumb-slider.html">Horizontal Multi-Thumb Slider Example</a>: Demonstrates using sliders with two thumbs to provide inputs for  numeric ranges, such as for searching in a price range.</li>
    </ul>
    <section>
       <div class="example-header">
          <h2 id="ex_label">Example</h2>
       </div>
          <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
          <div id="ex1">
            <div class="color-viewer-sliders" role="group" aria-labelledby="id-color-viewer">
              <h3 id="id-color-viewer">Color Viewer</h3>

              <div id="id-red" class="color-slider-label">Red</div>
              <div class="color-slider red"
                  role="slider"
                  tabindex="0"
                  aria-valuemin="0"
                  aria-valuenow="128"
                  aria-valuemax="255"
                  aria-labelledby="id-red">

                

                <svg width="0" height="0" aria-hidden="true">
                  <text class="value" x="0" y="0">128</text>
                  <rect class="rail"  x="0" y="0" rx="0" width="0" height="0"></rect>
                  <rect class="fill"  x="0" y="0" rx="0" width="0" height="0"></rect>
                  <rect class="thumb" x="0" y="0" rx="0" width="0" height="0"></rect>
                  <rect class="focus" x="0" y="0" rx="0" width="0" height="0"></rect>
                </svg>
              </div>

              <div id="id-green" class="color-slider-label">Green</div>
              <div class="color-slider green"
                  role="slider"
                  tabindex="0"
                  aria-valuemin="0"
                  aria-valuenow="128"
                  aria-valuemax="255"
                  aria-labelledby="id-green">

                

                <svg width="0" height="0" aria-hidden="true">
                  <text class="value" x="0" y="0">128</text>
                  <rect class="rail"  x="0" y="0" rx="0" width="0" height="0"></rect>
                  <rect class="fill"  x="0" y="0" rx="0" width="0" height="0"></rect>
                  <rect class="thumb" x="0" y="0" rx="0" width="0" height="0"></rect>
                  <rect class="focus" x="0" y="0" rx="0" width="0" height="0"></rect>
                </svg>
              </div>

              <div id="id-blue" class="color-slider-label">Blue</div>
              <div class="color-slider blue"
                  role="slider"
                  tabindex="0"
                  aria-valuemin="0"
                  aria-valuenow="128"
                  aria-valuemax="255"
                  aria-labelledby="id-blue">

                

                <svg width="0" height="0" aria-hidden="true">
                  <text class="value" x="0" y="0">128</text>
                  <rect class="rail"  x="0" y="0" rx="0" width="0" height="0"></rect>
                  <rect class="fill"  x="0" y="0" rx="0" width="0" height="0"></rect>
                  <rect class="thumb" x="0" y="0" rx="0" width="0" height="0"></rect>
                  <rect class="focus" x="0" y="0" rx="0" width="0" height="0"></rect>
                </svg>
              </div>

              <h4>Color View Box</h4>
              <div class="color-info">
                <div class="color-box"></div>
                <label>
                  Color (HEX):
                  <input type="text" readonly class="color-value-hex" value="">
                </label>
                <label>
                  Color (RGB):
                  <input type="text" readonly class="color-value-rgb" value="">
                </label>
              </div>
            </div>
          </div>
          <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
    </section>

    <section>
      <h2>Accessibility Features</h2>
      <ul>
        <li>To help assistive technology users understand that the color viewer is made of a group of three sliders, the sliders are wrapped in a <code>group</code> labeled by the heading that labels the color viewer.</li>
        <li>The placement of the slider value above the thumb makes it easier for users with low vision   to see the current value while dragging the thumb.</li>
        <li>To highlight the interactive nature of the thumb, the focus ring is drawn around the thumb and the value.</li>
        <li>
          To ensure the borders of the slider rail, thumb and focus ring have sufficient contrast with the background when high contrast settings invert colors, the CSS <code>currentcolor</code> value for the <code>stroke</code> property is used for the SVG <code>rect</code> elements to synchronize the border color with text content.
          If specific colors were used to specify the <code>stroke</code> property, the color of these elements would remain the same in high contrast mode, which could lead to insufficient contrast between them and their background or even make them invisible if their color were to match the high contrast mode background.
          NOTE: The SVG elements need to be inline to use <code>currentcolor</code>.
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
            <td>Increases slider value one step.</td>
          </tr>
          <tr data-test-id="key-up-arrow">
            <th><kbd>Up Arrow</kbd></th>
            <td>Increases slider value one step.</td>
          </tr>
          <tr data-test-id="key-left-arrow">
            <th><kbd>Left Arrow</kbd></th>
            <td>Decreases slider value one step.</td>
          </tr>
          <tr data-test-id="key-down-arrow">
            <th><kbd>Down Arrow</kbd></th>
            <td>Decreases slider value one step.</td>
          </tr>
          <tr data-test-id="key-page-up">
            <th><kbd>Page Up</kbd></th>
            <td>Increases slider value multiple steps. In this slider, jumps ten steps.</td>
          </tr>
          <tr data-test-id="key-page-down">
            <th><kbd>Page Down</kbd></th>
            <td>Decreases slider value multiple steps. In this slider, jumps ten steps.</td>
          </tr>
          <tr data-test-id="key-home">
            <th><kbd>Home</kbd></th>
            <td>Sets slider to its minimum value.</td>
          </tr>
          <tr data-test-id="key-end">
            <th><kbd>End</kbd></th>
            <td>Sets slider to its maximum value.</td>
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
          <tr data-test-id="group-role">
            <th scope="row"><code>group</code></th>
            <td></td>
            <td><code>div</code></td>
            <td>
              <ul>
                <li>Identifies the <code>div</code> as a group.</li>
                <li>The group and its accessible name inform assistive technology users that the three sliders are related to one another and serve the purpose of choosing a color.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="group-aria-labelledby">
            <td></td>
            <th scope="row"><code>aria-labelledby="IDREF"</code></th>
            <td><code>div</code></td>
            <td>Refers to the  heading element that provides the accessible name for the group.</td>
          </tr>
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
          <tr data-test-id="tabindex">
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
              <code>aria-valuemax="255"</code>
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
            <td>Removes the SVG elements from the accessibility tree.  Some assistive technologies will describe the SVG elements, unless they are explicitly hidden.</td>
          </tr>
        </tbody>
      </table></div>
    </section>

  <section>
        <h2>Javascript and CSS Source Code</h2>
        <ul id="css_js_files">
          <li>CSS: <a href="css/slider-color-viewer.css" type="text/css">slider-color-viewer.css</a></li>
          <li>Javascript: <a href="js/slider-color-viewer.js" type="text/javascript">slider-color-viewer.js</a></li>
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
