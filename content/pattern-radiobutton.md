---
# This is a generated file
title: "Radio Group"
ref: /ARIA/apg/patterns/radiobutton/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/patterns/radiobutton/

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
<section class="widget" id="radiobutton"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
      <p>
        A radio group is a set of checkable buttons, known as radio buttons, where no more than one of
        the buttons can be checked at a time.
        Some implementations may initialize the set with all buttons in the unchecked state in order to
        force the user to check one of the buttons before moving past a certain point in the workflow.
      </p>

      <section class="notoc examples-section"><img alt="" 
            src="{{ '/content-images/wai-aria-practices/img/radiobutton.svg' | relative_url }}"
          ><div class="header-wrapper"><h2 id="examples-10" tabindex="-1">Examples</h2></div>
        
        <ul>
          <li><a href="../../example-index/radio/radio.html">Radio Group Example Using Roving tabindex</a></li>
          <li><a href="../../example-index/radio/radio-activedescendant.html">Radio Group Example Using aria-activedescendant</a></li>
          <li><a href="../../example-index/radio/radio-rating.html">Rating Radio Group Example</a>: Radio group that provides input for a five-star rating scale.</li>
        </ul>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction-15" tabindex="-1">Keyboard Interaction</h2></div>
        
        <section class="notoc"><div class="header-wrapper"><h3 id="for-radio-groups-not-contained-in-a-toolbar">For Radio Groups Not Contained in a Toolbar</h3></div>
          
          <p>
            This section describes the keyboard interaction implemented for most radio groups.
            For the special case of a radio group nested inside a <a href="{{ '/ARIA/apg/patterns/toolbar/' | relative_url }}">toolbar</a>, use the keyboard interaction described in the following section.
          </p>
          <ul>
            <li>
              <kbd>Tab</kbd> and <kbd>Shift + Tab</kbd>:
              Move focus into and out of the radio group.
              When focus moves into a radio group :
              <ul>
                <li>If a radio button is checked, focus is set on the checked button.</li>
                <li>If none of the radio buttons are checked, focus is set on the first radio
                  button in the group.</li>
              </ul>
            </li>
            <li><kbd>Space</kbd>: checks the focused radio button if it is not already checked.</li>
            <li>
              <kbd>Right Arrow</kbd> and <kbd>Down Arrow</kbd>: move focus to the next radio button in
              the group, uncheck the previously focused button, and check the newly focused button. If
              focus is on the last button, focus moves to the first button.
            </li>
            <li>
              <kbd>Left Arrow</kbd> and <kbd>Up Arrow</kbd>: move focus to the previous radio button
              in the group, uncheck the previously focused button, and check the newly focused button.
              If focus is on the first button, focus moves to the last button.
            </li>
          </ul>
          <div class="note" role="note" id="issue-container-generatedID-20"><div role="heading" class="note-title marker" id="h-note-20" aria-level="6"><span>Note</span></div><p class="">
            The initial focus behavior described above differs slightly from the behavior
            provided by some browsers for native HTML radio groups. In some browsers, if none of the
            radio buttons are selected, moving focus into the radio group with <kbd>Shift+Tab</kbd> will place focus on the last radio button
            instead of the first radio button.
          </p></div>
        </section>
        <section class="notoc"><div class="header-wrapper"><h3 id="for-radio-group-contained-in-a-toolbar">For Radio Group Contained in a Toolbar</h3></div>
          
          <p>
            Because arrow keys are used to navigate among elements of a toolbar and the <kbd>Tab</kbd> key moves focus in and out of a toolbar, when a radio group is nested inside a toolbar, the keyboard interaction of the radio group is slightly different from that of a radio group that is not inside of a toolbar.
            For instance, users need to be able to navigate among all toolbar elements, including the radio buttons, without changing which radio button is checked.
            So, when navigating through a radio group in a toolbar with arrow keys, the button that is checked does not change.
            The keyboard interaction of a radio group nested in a toolbar is as follows.
          </p>
          <ul>
            <li><kbd>Space</kbd>: If the focused radio button is not checked, unchecks the currently checked radio button and checks the focused radio button. Otherwise, does nothing.</li>
            <li><kbd>Enter</kbd> (optional): If the focused radio button is not checked, unchecks the currently checked radio button and checks the focused radio button. Otherwise, does nothing.</li>
            <li><kbd>Right Arrow</kbd>:
              <ul>
                <li>When focus is on a radio button and that radio button is <strong>not</strong> the last radio button in the radio group, moves focus to the next radio button.</li>
                <li>When focus is on the last radio button in the radio group and that radio button is <strong>not</strong> the last element in the toolbar, moves focus to the next element in the toolbar.</li>
                <li>When focus is on the last radio button in the radio group and that radio button is also the last element in the toolbar, moves focus to the first element in the toolbar.</li>
              </ul>
            </li>
            <li><kbd>Left Arrow</kbd>:
              <ul>
                <li>When focus is on a radio button and that radio button is <strong>not</strong> the first radio button in the radio group, moves focus to the previous radio button.</li>
                <li>When focus is on the first radio button in the radio group and that radio button is <strong>not</strong> the first element in the toolbar, moves focus to the previous element in the toolbar.</li>
                <li>When focus is on the first radio button in the radio group and that radio button is also the first element in the toolbar, moves focus to the last element in the toolbar.</li>
              </ul>
            </li>
            <li>
              <kbd>Down Arrow</kbd> (optional): Moves focus to the next radio button in the radio group.
              If focus is on the last radio button in the radio group, moves focus to the first radio button in the group.
            </li>
            <li>
              <kbd>Up Arrow</kbd> (optional): Moves focus to the previous radio button in the radio group.
              If focus is on the first radio button in the radio group, moves focus to the last radio button in the group.
            </li>
          </ul>
          <div class="note" role="note" id="issue-container-generatedID-21"><div role="heading" class="note-title marker" id="h-note-21" aria-level="6"><span>Note</span></div><p class="">
            Radio buttons in a toolbar are frequently styled in a manner that appears more like toggle buttons.
            For an example, See the <a href="../../example-index/toolbar/toolbar.html">Simple Editor Toolbar Example</a>
          </p></div>
        </section>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="wai-aria-roles-states-and-properties-16" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2></div>
        
        <ul>
          <li>
            The radio buttons are contained in or owned by an element with role
            <a href="https://w3c.github.io/aria/#radiogroup" class="role-reference">radiogroup</a>.
          </li>
          <li>
            Each radio button element has role
            <a href="https://w3c.github.io/aria/#radio" class="role-reference">radio</a>.
          </li>
          <li>
            If a radio button is checked, the <code>radio</code> element has
            <a href="https://w3c.github.io/aria/#aria-checked" class="state-reference">aria-checked</a>
            set to <code>true</code>. If it is not checked, it has
            <a href="https://w3c.github.io/aria/#aria-checked" class="state-reference">aria-checked</a>
            set to <code>false</code>.
          </li>
          <li>
            Each <code>radio</code> element is labelled by its content, has a visible label
            referenced by
            <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a>,
            or has a label specified with
            <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.
          </li>
          <li>
            The <code>radiogroup</code> element has a visible label referenced by
            <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a>
            or has a label specified with
            <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.
          </li>
          <li>
            If elements providing additional information about either the radio group or each radio
            button are present, those elements are referenced by the <code>radiogroup</code> element
            or <code>radio</code> elements with the
            <a href="https://w3c.github.io/aria/#aria-describedby" class="property-reference">aria-describedby</a>
            property.
          </li>
        </ul>
      </section>
    </section>
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
