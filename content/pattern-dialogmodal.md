---
# This is a generated file
title: "Dialog (Modal)"
ref: /ARIA/apg/patterns/dialogmodal/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/patterns/dialogmodal/

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
<section class="widget" id="dialog_modal"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
      <p>
        A <a href="https://w3c.github.io/aria/#dialog" class="role-reference">dialog</a> is a window overlaid on either the primary window or another dialog window.
        Windows under a modal dialog are inert.
        That is, users cannot interact with content outside an active dialog window.
        Inert content outside an active dialog is typically visually obscured or dimmed so it is difficult to discern,
        and in some implementations, attempts to interact with the inert content cause the dialog to close.
      </p>
      <p>
        Like non-modal dialogs, modal dialogs contain their tab sequence.
        That is, <kbd>Tab</kbd> and <kbd>Shift + Tab</kbd> do not move focus outside the dialog.
        However, unlike most non-modal dialogs, modal dialogs do not provide means for moving keyboard focus outside the dialog window without closing the dialog.
      </p>
      <p>
        The <a href="https://w3c.github.io/aria/#alertdialog" class="role-reference">alertdialog</a> role is a special-case dialog role
        designed specifically for dialogs that divert users' attention to a brief, important message.
        Its usage is described in the <a href="{{ '/ARIA/apg/patterns/alertdialog/' | relative_url }}">alert dialog design pattern.</a>
      </p>

      <section class="notoc examples-section"><img alt="" 
            src="{{ '/content-images/wai-aria-practices/img/dialogmodal.svg' | relative_url }}"
          ><div class="header-wrapper"><h2 id="examples-3" tabindex="-1">Examples</h2></div>
        
        <ul>
          <li><a href="../../example-index/dialog-modal/dialog.html">Modal Dialog Example</a>: Demonstrates multiple layers of modal dialogs with both small and large amounts of content.</li>
          <li><a href="../../example-index/dialog-modal/datepicker-dialog.html">Date Picker Dialog Example</a>: Demonstrates a dialog containing a calendar grid for choosing a date.</li>
        </ul>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction-7" tabindex="-1">Keyboard Interaction</h2></div>
        
        <p>In the following description, the term <q>tabbable element</q> refers to any element with a <code>tabindex</code> value of zero or greater. Note that values greater than 0 are strongly discouraged.</p>
        <ul>
          <li>When a dialog opens, focus moves to an element inside the dialog. See notes below regarding initial focus placement.</li>
          <li><kbd>Tab</kbd>:
            <ul>
              <li>Moves focus to the next tabbable element inside the dialog.</li>
              <li>If focus is on the last tabbable element inside the dialog, moves focus to the first tabbable element inside the dialog. </li>
            </ul>
          </li>
          <li><kbd>Shift + Tab</kbd>:
            <ul>
              <li>Moves focus to the previous tabbable element inside the dialog.</li>
              <li>If focus is on the first tabbable element inside the dialog, moves focus to the last tabbable element inside the dialog.</li>
            </ul>
          </li>
        <li><kbd>Escape</kbd>: Closes the dialog.</li>
        </ul>
        <div class="note" role="note" id="issue-container-generatedID-6"><div role="heading" class="note-title marker" id="h-note-6" aria-level="5"><span>Note</span></div><ol class="">
          <li>When a dialog opens, focus moves to an element contained in the dialog. Generally, focus is initially set on the first focusable element. However, the most appropriate focus placement will depend on the nature and size of the content. Examples include:
            <ul>
              <li>
                If the dialog content includes semantic structures, such as lists, tables, or multiple paragraphs, that need to be perceived in order to easily understand the content, i.e., if the content would be difficult to understand when announced as a single unbroken string, then it is advisable to add <code>tabindex="-1"</code> to a static element at the start of the content and initially focus that element.
                This makes it easier for assistive technology users to read the content by navigating the semantic structures.
                Additionally, it is advisable to omit applying <code>aria-describedby</code> to the dialog container in this scenario.
              </li>
              <li>If content is large enough that focusing the first interactive element could cause the beginning of content to scroll out of view,
                it is advisable to add <code>tabindex="-1"</code> to a static element at the top of the dialog, such as the dialog title or first paragraph, and initially focus that element.
              </li>
              <li>
                If a dialog contains the final step in a process that is not easily reversible, such as deleting data or completing a financial transaction,
                it may be advisable to set focus on the least destructive action, especially if undoing the action is difficult or impossible.
                The <a href="{{ '/ARIA/apg/patterns/alertdialog/' | relative_url }}">Alert Dialog Pattern</a> is often employed in such circumstances.
              </li>
              <li>
                If a dialog is limited to interactions that either provide additional information or continue processing,
                it may be advisable to set focus to the element that is likely to be most frequently used, such as an <q>OK</q> or <q>Continue</q> button.
              </li>
            </ul>
          </li>
          <li>
            When a dialog closes, focus returns to the element that invoked the dialog unless either:
            <ul>
              <li>The invoking element no longer exists. Then, focus is set on another element that provides logical work flow.</li>
              <li>The work flow design includes  the following conditions that can occasionally make focusing a different element a more logical choice:
                <ol>
                  <li>It is very unlikely users need to immediately re-invoke the dialog.</li>
                  <li>The task completed in the dialog is directly related to a subsequent step in the work flow.</li>
                </ol>
                For example, a grid has an associated toolbar with a button for adding rows.
                the Add Rows button opens a dialog that prompts for the number of rows.
                After the dialog closes, focus is placed in the first cell of the first new row.
              </li>
            </ul>
          </li>
          <li>It is strongly recommended that the tab sequence of all dialogs include a visible element with role <code>button</code> that closes the dialog, such as  a close icon or cancel button.</li>
        </ol></div>
      </section>

      <section id="dialog_roles_states_props" class="notoc"><div class="header-wrapper"><h2 id="wai-aria-roles-states-and-properties-7" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2></div>
        
        <ul>
          <li>The element that serves as the dialog container has a role of <a href="https://w3c.github.io/aria/#dialog" class="role-reference">dialog</a>.</li>
          <li>All elements required to operate the dialog are descendants of the element that has role <code>dialog</code>.</li>
          <li>The dialog container element has <a href="https://w3c.github.io/aria/#aria-modal" class="property-reference">aria-modal</a> set to <code>true</code>.</li>
          <li>The dialog has either:
            <ul>
              <li>A value set for the
              <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a>
              property that refers to a visible dialog title.</li>
              <li>A label specified by <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.</li>
            </ul>
          </li>
          <li>
            Optionally, the <a href="https://w3c.github.io/aria/#aria-describedby" class="property-reference">aria-describedby</a> property
            is set on the element with the <code>dialog</code> role to indicate which element or elements in the dialog contain content that describes the primary purpose or message of the dialog.
            Specifying descriptive elements enables screen readers to announce the description along with the dialog title and initially focused element when the dialog opens, which is typically helpful only when the descriptive content is simple and can easily be understood without structural information.
            It is advisable to omit specifying <code>aria-describedby</code> if the dialog content includes semantic structures, such as lists, tables, or multiple paragraphs, that need to be perceived in order to easily understand the content, i.e., if the content would be difficult to understand when announced as a single unbroken string.
          </li>
        </ul>
        <div class="note" role="note" id="issue-container-generatedID-7"><div role="heading" class="note-title marker" id="h-note-7" aria-level="5"><span>Note</span></div><ul class="">
          <li>
            Because marking a dialog modal by setting
            <a href="https://w3c.github.io/aria/#aria-modal" class="property-reference">aria-modal</a>
            to <code>true</code> can prevent users of some assistive technologies from perceiving content outside the dialog,
            users of those technologies will experience severe negative ramifications if a dialog is marked modal but does not behave as a modal for other users.
            So, mark a dialog modal <strong>only when both:</strong>
            <ol>
              <li>Application code prevents all users from interacting in any way with content outside of it.</li>
              <li>Visual styling obscures the content outside of it.</li>
            </ol>
          </li>
          <li>
            The <code>aria-modal</code> property introduced by ARIA 1.1 replaces
            <a href="https://w3c.github.io/aria/#aria-hidden" class="state-reference">aria-hidden</a>
            for informing assistive technologies that content outside a dialog is inert.
            However, in legacy dialog implementations where <code>aria-hidden</code> is used to make content outside a dialog inert for assistive technology users, it is important that:
            <ol>
              <li><code>aria-hidden</code> is set to <code>true</code> on each element containing a portion of the inert layer.</li>
              <li>The dialog element is not a descendant of any element that has <code>aria-hidden</code> set to <code>true</code>.</li>
            </ol>
          </li>
        </ul></div>
      </section>
    </section>
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
