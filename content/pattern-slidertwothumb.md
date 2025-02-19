---
# This is a generated file
title: "Slider (Multi-Thumb)"
ref: /ARIA/apg/patterns/slidertwothumb/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/patterns/slidertwothumb/

sidebar: true



# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---


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
const addBodyClass = "pattern-page";
const enableSidebar = true;
if (addBodyClass) document.body.classList.add(addBodyClass);
if (enableSidebar) document.body.classList.add('has-sidebar');
</script>
    
<div>
<section class="widget" id="slidertwothumb"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
      <p>
        A multi-thumb slider is a <a href="{{ '/ARIA/apg/patterns/slider/' | relative_url }}">slider</a>
        with two or more thumbs that each set a value in a group of related values.
        For example, in a product search, a two-thumb slider could be used to enable users to set the minimum and maximum price limits for the search.
        In many two-thumb sliders, the thumbs are not allowed to pass one another, such as when the slider sets the minimum and maximum values for a range.
        For example, in a price range selector, the maximum value of the thumb that sets the lower end of the range is limited by the current value of the thumb that sets the upper end of the range.
        Conversely, the minimum value of the upper end thumb is limited by the current value of the lower end thumb.
        However, in some multi-thumb sliders, each thumb sets a value that does not depend on the other thumb values.
      </p>
      <div class="warning" id="issue-container-generatedID-24"><div role="heading" class="warning-title marker" id="h-warning-0" aria-level="4"><span>Warning</span></div><p class="">
        Some users of touch-based assistive technologies may experience difficulty utilizing widgets that implement this slider pattern because the gestures their assistive technology provides for operating sliders may not yet generate the necessary output.
        To change the slider value, touch-based assistive technologies need to respond to user gestures for increasing and decreasing the value by synthesizing key events.
        This is a new convention that may not be fully implemented by some assistive technologies.
        Authors should fully test slider widgets using assistive technologies on devices where touch is a primary input mechanism before considering incorporation into production systems.
      </p></div>

      <section class="notoc examples-section"><img alt="" 
            src="{{ '/content-images/wai-aria-practices/img/slidertwothumb.svg' | relative_url }}"
          ><div class="header-wrapper"><h2 id="example-5" tabindex="-1">Example</h2></div>
        
        <p><a href="../../example-index/slider/slider-multithumb.html">Multi-Thumb Slider Examples</a>: Demonstrates a two-thumb slider for picking a price range for a hotel reservation.</p>
      </section>

      <section id="slidertwothumb_kbd_interaction" class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction-17" tabindex="-1">Keyboard Interaction</h2></div>
        
        <ul>
          <li>Each thumb is in the page tab sequence and has the same keyboard interaction as a <a href="{{ '/ARIA/apg/patterns/slider/#slider_kbd_interaction' | relative_url }}">single-thumb slider</a>.</li>
          <li>
            The tab order remains constant regardless of thumb value and visual position within the slider.
            For example, if the value of a thumb changes such that it moves past one of the other thumbs, the tab order does not change.
          </li>
        </ul>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="wai-aria-roles-states-and-properties-18" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2></div>
        
        <ul>
          <li>Each element serving as a focusable slider thumb has role <a class="role-reference" href="https://w3c.github.io/aria/#slider">slider</a>.</li>
          <li>Each slider element has the <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuenow">aria-valuenow</a> property set to a decimal value representing the current value of the slider.</li>
          <li>Each slider element has the <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuemin">aria-valuemin</a> property set to a decimal value representing the minimum allowed value of the slider.</li>
          <li>Each slider element has the <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuemax">aria-valuemax</a> property set to a decimal value representing the maximum allowed value of the slider.</li>
          <li>When the range (e.g. minimum and/or maximum value) of another slider is dependent on the current value of a slider, the values of <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuemin">aria-valuemin</a> or <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuemax">aria-valuemax</a> of the dependent sliders are updated when the value changes.</li>
          <li>
          If a value of <code>aria-valuenow</code> is not user-friendly, e.g., the day of the week is represented by a number, the
          <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuetext">aria-valuetext</a>
          property is set to a string that makes the slider value understandable, e.g., "Monday".
          </li>
          <li>
            If a slider has a visible label, it is referenced by
            <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> on the slider element.
            Otherwise, the slider element has a label provided by
            <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.
          </li>
          <li>
            If a slider is vertically oriented, it has <a class="property-reference" href="https://w3c.github.io/aria/#aria-orientation">aria-orientation</a> set to <code>vertical</code>.
            The default value of <code>aria-orientation</code> for a slider is <code>horizontal</code>.
          </li>
        </ul>
      </section>
    </section>
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
