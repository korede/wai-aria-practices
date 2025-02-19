---
# This is a generated file
title: "Meter"
ref: /ARIA/apg/patterns/meter/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/patterns/meter/

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
<section class="widget" id="meter"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
      <p>
        A <a class="role-reference" href="https://w3c.github.io/aria/#meter">meter</a> is a graphical display of a numeric value that varies within a defined range.
        For example, a meter could be used to depict a device's current battery percentage or a car's fuel level.
      </p>
      <div class="note" role="note" id="issue-container-generatedID-19"><div role="heading" class="note-title marker" id="h-note-19" aria-level="4"><span>Note</span></div><ul class="">
        <li>A <code>meter</code> should not be used to represent a value like the current world population since it does not have a meaningful maximum limit.</li>
        <li>
          The <code>meter</code> should not be used to indicate progress, such as loading or percent completion of a task.
          To communicate progress, use the <a href="https://w3c.github.io/aria/#progressbar" class="role-reference">progressbar</a> role instead.
        </li>
      </ul></div>

      <section class="notoc examples-section"><img alt="" 
            src="{{ '/content-images/wai-aria-practices/img/meter.svg' | relative_url }}"
          ><div class="header-wrapper"><h2 id="example-4" tabindex="-1">Example</h2></div>
        
        <p><a href="../../example-index/meter/meter.html">Meter Example</a></p>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction-14" tabindex="-1">Keyboard Interaction</h2></div>
        
        <p>Not applicable.</p>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="wai-aria-roles-states-and-properties-15" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2></div>
        
        <ul>
          <li>The element serving as the meter has a role of <a class="role-reference" href="https://w3c.github.io/aria/#meter">meter</a>.</li>
          <li>The meter has <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuenow">aria-valuenow</a> set to a decimal value between <code>aria-valuemin</code> and <code>aria-valuemax</code> representing the current value of the meter.</li>
          <li>The meter has <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuemin">aria-valuemin</a> set to a decimal value less than <code>aria-valuemax</code>.</li>
          <li>The meter has <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuemax">aria-valuemax</a> set to a decimal value greater than <code>aria-valuemin</code>.</li>
          <li>
            Assistive technologies often present <code>aria-valuenow</code> as a percentage.
            If conveying the value of the meter only in terms of a percentage would not be user friendly, the <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuetext">aria-valuetext</a> property is set to a string that makes the meter value understandable.
            For example, a battery meter value might be conveyed as <code>aria-valuetext="50% (6 hours) remaining"</code>.
          </li>
          <li>If the meter has a visible label, it is referenced by <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> on the element with role <code>meter</code>. Otherwise, the element with role <code>meter</code> has a label provided by <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.</li>
        </ul>
      </section>
    </section>
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
