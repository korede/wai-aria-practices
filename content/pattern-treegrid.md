---
# This is a generated file
title: "Treegrid"
ref: /ARIA/apg/patterns/treegrid/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/patterns/treegrid/

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
<section class="widget" id="treegrid"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
        <p>
          A <a href="https://w3c.github.io/aria/#treegrid" class="role-reference">treegrid</a> widget presents a hierarchical data grid consisting of tabular information that is editable or interactive.
          Any row in the hierarchy may have child rows, and rows with children may be expanded or collapsed to show or hide the children.
          For example, in a <code>treegrid</code> used to display messages and message responses for a e-mail discussion list, messages with responses would be in rows that can be expanded to reveal the response messages.
        </p>
      <p>
        In a treegrid both rows and cells are focusable.  Every row and cell contains a focusable element or is itself focusable, regardless of whether individual cell content is editable or interactive.
        There is one exception: if column header cells do not provide functions, such as sort or filter, they do not need to be focusable.
        One reason it is important for all cells to be able to receive or contain keyboard focus is that screen readers will typically be in their application reading mode, rather than their document reading mode, when users are interacting with the grid.
        While in application mode, a screen reader user hears only focusable elements and content that labels focusable elements.
        So, screen reader users may unknowingly overlook elements contained in a <code>treegrid</code> that are either not focusable or not used to label a column or row.
      </p>
      <p>
        When using a keyboard to navigate a <code>treegrid</code>, a visual keyboard indicator informs the user which row or cell is focused.
        If the <code>treegrid</code> allows the user to choose just one item for an action, then it is known as a single-select <code>treegrid</code>, and the item with focus also has a selected state.
        However, in multi-select <code>treegrid</code>s, which enable the user to select more than one row or cell for an action, the selected state is independent of the focus.
        For example, in a hierarchical e-mail discussion grid, the user can move focus to select any number of rows for an action, such as delete or move.
        It is important that the visual design distinguish between items that are selected and the item that has focus.
        For more details, see <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_focus_vs_selection' | relative_url }}">this description of differences between focus and selection.</a>
      </p>

      <section class="notoc examples-section"><img alt="" 
            src="{{ '/content-images/wai-aria-practices/img/treegrid.svg' | relative_url }}"
          ><div class="header-wrapper"><h2 id="examples-16" tabindex="-1">Examples</h2></div>
        
        <ul>
          <li>
            <a href="../../example-index/treegrid/treegrid-1.html">E-mail Inbox <code>treegrid</code> Example</a>: A treegrid for navigating an e-mail inbox that demonstrates three keyboard navigation models -- rows first, cells first, and cells only.
          </li>
        </ul>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction-25" tabindex="-1">Keyboard Interaction</h2></div>
        
        <p>
          The following keys provide <code>treegrid</code> navigation by moving focus among rows and cells of the grid.
          Implementations of <code>treegrid</code> make these key commands available when an element in the grid has received focus, e.g., after a user has moved focus to the grid with <kbd>Tab</kbd>.
          Moving focus into the grid may result in the first cell or the first row being focused.
          Whether focus goes to a cell or the row depends on author preferences and whether row focus is supported, since some <code>treegrid</code>s may not provide focus to rows.
        </p>
        <ul>
          <li> <kbd>Enter</kbd>: If cell-only focus is enabled and focus is on the first cell with the <code>aria-expanded</code> property, opens or closes the child rows.,Otherwise, performs the default action for the cell.</li>
          <li><kbd>Tab</kbd>: If the row containing focus contains focusable elements (e.g., inputs, buttons, links, etc.), moves focus to the next input in the row.  If focus is on the last focusable element in the row, moves focus out of the <code>treegrid</code> widget to the next focusable element.</li>
          <li>
            <kbd>Right Arrow</kbd>:
            <ul>
              <li>If focus is on a collapsed row, expands the row.</li>
              <li>If focus is on an expanded row or is on a row that does not have child rows, moves focus to the first cell in the row.</li>
              <li>If focus is on the right-most cell in a row, focus does not move.</li>
              <li>If focus is on any other cell, moves focus one cell to the right.</li>
            </ul>
          </li>
          <li><kbd>Left Arrow</kbd>:
            <ul>
              <li>If focus is on an expanded row, collapses the row.</li>
              <li>If focus is on a collapsed row or on a row that does not have child rows, focus does not move.</li>
              <li>If focus is on the first cell in a row and row focus is supported, moves focus to the row.</li>
              <li>If focus is on the first cell in a row and row focus is not supported, focus does not move.</li>
              <li>If focus is on any other cell, moves focus one cell to the left.</li>
            </ul>
          </li>
          <li>
            <kbd>Down Arrow</kbd>:
            <ul>
              <li>If focus is on a row, moves focus one row down.  If focus is on the last row, focus does not move.</li>
              <li>If focus is on a cell, moves focus one cell down.  If focus is on the bottom cell in the column, focus does not move.</li>
            </ul>
          </li>
          <li>
            <kbd>Up Arrow</kbd>:
            <ul>
              <li>If focus is on a row, moves focus one row up.  If focus is on the first row, focus does not move.</li>
              <li>If focus is on a cell, moves focus one cell up.  If focus is on the top cell in the column, focus does not move.</li>
            </ul>
          </li>
          <li>
            <kbd>Page Down</kbd>:
            <ul>
              <li>If focus is on a row, moves focus down an author-determined number of rows, typically scrolling so the bottom row in the currently visible set of rows becomes one of the first visible rows. If focus is in the last row, focus does not move.</li>
              <li>If focus is on a cell, moves focus down an author-determined number of cells, typically scrolling so the bottom row in the currently visible set of rows becomes one of the first visible rows. If focus is in the last row, focus does not move.</li>
            </ul>
          </li>
          <li>
            <kbd>Page Up</kbd>:
             <ul>
                <li>If focus is on a row, moves focus up an author-determined number of rows, typically scrolling so the top row in the currently visible set of rows becomes one of the last visible rows. If focus is in the first row, focus does not move.</li>
                <li>If focus is on a cell, moves focus up an author-determined number of cells, typically scrolling so the top row in the currently visible set of rows becomes one of the last visible rows. If focus is in the first row, focus does not move.</li>
              </ul>
          </li>
          <li>
            <kbd>Home</kbd>:
             <ul>
                <li>If focus is on a row, moves focus to the first row.  If focus is in the first row, focus does not move.</li>
                <li>If focus is on a cell, moves focus to the first cell in the row. If focus is in the first cell of the row, focus does not move.</li>
              </ul>
          </li>
          <li>
            <kbd>End</kbd>:
             <ul>
                <li>If focus is on a row, moves focus to the last row.  If focus is in the last row, focus does not move.</li>
                <li>If focus is on a cell, moves focus to the last cell in the row. If focus is in the last cell of the row, focus does not move.</li>
              </ul>
          </li>
          <li>
            <kbd>Control + Home</kbd>:
             <ul>
                <li>If focus is on a row, moves focus to the first row.  If focus is in the first row, focus does not move.</li>
                <li>If focus is on a cell, moves focus to the first cell in the column. If focus is in the first row, focus does not move.</li>
              </ul>
          </li>
          <li>
            <kbd>Control + End</kbd>:
             <ul>
                <li>If focus is on a row, moves focus to the last row.  If focus is in the last row, focus does not move.</li>
                <li>If focus is on a cell, moves focus to the last cell in the column. If focus is in the last row, focus does not move.</li>
              </ul>
          </li>
        </ul>
        <div class="note" role="note" id="issue-container-generatedID-33"><div role="heading" class="note-title marker" id="h-note-31" aria-level="5"><span>Note</span></div><ul class="">
          <li>
            When the above <code>treegrid</code> navigation keys move focus, whether the focus is set on an element inside the cell or on the cell depends on cell content.
            See <a href="{{ '/ARIA/apg/patterns/grid/#gridNav_focus' | relative_url }}">Whether to Focus on a Cell or an Element Inside It</a>.
          </li>
          <li>
            While navigation keys, such as arrow keys, are moving focus from cell to cell, they are not available to do something like operate a combobox or move an editing caret inside of a cell.
            If this functionality is needed, see <a href="{{ '/ARIA/apg/patterns/grid/#gridNav_inside' | relative_url }}">Editing and Navigating Inside a Cell</a>.
          </li>
          <li>If navigation functions can dynamically add more rows or columns to the DOM, key events that move focus to the beginning or end of the grid, such as <kbd>control + End</kbd>, may move focus to the last row in the DOM rather than the last available row in the back-end data.</li>
        </ul></div>
        <p>If a treegrid supports selection of cells, rows, or columns, the following keys are commonly used for these functions.</p>
        <ul>
          <li>
            <kbd>Control + Space</kbd>:
            <ul>
              <li>If focus is on a row, selects all cells.</li>
              <li>If focus is on a cell, selects the column that contains the focus.</li>
            </ul>
          </li>
          <li>
            <kbd>Shift + Space</kbd>:
            <ul>
              <li>If focus is on a row, selects the row.</li>
              <li>If focus is on a cell, selects the row that contains the focus. If the treegrid includes a column with checkboxes for selecting rows, this key can serve as a shortcut for checking the box when focus is not on the checkbox.</li>
            </ul>
          </li>
          <li><kbd>Control + A</kbd>: Selects all cells.</li>
          <li>
            <kbd>Shift + Right Arrow</kbd>:
            <ul>
              <li>If focus is on a row, does not change selection.</li>
              <li>if focus is on a cell, extends selection one cell to the right.</li>
            </ul>
          </li>
          <li>
            <kbd>Shift + Left Arrow</kbd>:
            <ul>
              <li>If focus is on a row, does not change selection.</li>
              <li>if focus is on a cell, extends selection one cell to the left.</li>
            </ul>
          </li>
          <li>
            <kbd>Shift + Down Arrow</kbd>:
            <ul>
              <li>If focus is on a row, extends selection to all the cells in the next row.</li>
              <li>If focus is on a cell, extends selection one cell down.</li>
            </ul>
          </li>
          <li>
            <kbd>Shift + Up Arrow</kbd>:
            <ul>
              <li>If focus is on a row, extends selection to all the cells in the previous row.</li>
              <li>If focus is on a cell, extends selection one cell up.</li>
            </ul>
          </li>
        </ul>
        <div class="note" role="note" id="issue-container-generatedID-34"><div role="heading" class="note-title marker" id="h-note-32" aria-level="5"><span>Note</span></div><p class="">See <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_common_conventions' | relative_url }}" class="sec-ref">Key Assignment Conventions for Common Functions</a> for cut, copy, and paste key assignments.</p></div>
      </section>

      <section id="treegrid_roles_states_props" class="notoc"><div class="header-wrapper"><h2 id="wai-aria-roles-states-and-properties-26" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2></div>
        
        <ul>
          <li>The treegrid container has role <a href="https://w3c.github.io/aria/#treegrid" class="role-reference">treegrid</a>. </li>
          <li>Each row container has role <a href="https://w3c.github.io/aria/#row" class="role-reference">row</a> and is either a DOM descendant of or owned by the <code>treegrid</code> element or an element with role <a href="https://w3c.github.io/aria/#rowgroup" class="role-reference">rowgroup</a>. </li>
          <li>Each cell is either a DOM descendant of or owned by a <code>row</code> element and has one of the following roles:
            <ul>
              <li><a href="https://w3c.github.io/aria/#columnheader" class="role-reference">columnheader</a> if the cell contains a title or header information for the column.</li>
              <li><a href="https://w3c.github.io/aria/#rowheader" class="role-reference">rowheader</a> if the cell contains title or header information for the row.</li>
              <li><a href="https://w3c.github.io/aria/#gridcell" class="role-reference">gridcell</a> if the cell does not contain column or row header information.</li>
            </ul>
          </li>
          <li>
            A <code>row</code> that can be expanded or collapsed to show or hide a set of child rows is a parent row.
            Each parent <code>row</code> has the <a class="property-reference" href="https://w3c.github.io/aria/#aria-expanded">aria-expanded</a> state set on either the <code>row</code> element or on a cell contained in the<code>row</code>.
            The <code>aria-expanded</code> state is set to <code>false</code> when the child rows are not displayed and set to <code>true</code> when the child rows are displayed.
            Rows that do not control display of child rows do not have the <code>aria-expanded</code> attribute because, if they were to have it, they would be incorrectly described to assistive technologies as parent rows.
          </li>
          <li>If the treegrid supports selection of more than one row or cell, it is a multi-select treegrid and the element with role <code>treegrid</code> has <a class="property-reference" href="https://w3c.github.io/aria/#aria-multiselectable">aria-multiselectable</a> set to <code>true</code>. Otherwise, it is a single-select treegrid, and <code>aria-multiselectable</code> is either set to <code>false</code> or the default value of <code>false</code> is implied.</li>
          <li>If the treegrid is a single-select treegrid, <a href="https://w3c.github.io/aria/#aria-selected" class="property-reference">aria-selected</a> is set to <code>true</code> on the selected row or cell, and it is not present on any other row or cell in the treegrid.</li>
          <li>if the treegrid is a multi-select treegrid:
          <ul>
          <li>All selected rows or cells have <a href="https://w3c.github.io/aria/#aria-selected" class="state-reference">aria-selected</a> set to <code>true</code>.</li>
          <li>All rows and cells that are not selected have <a href="https://w3c.github.io/aria/#aria-selected" class="state-reference">aria-selected</a> set to <code>false</code>.</li>
          </ul>
          </li>
          <li>
            If there is an element in the user interface that serves as a label for the treegrid, <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> is set on the grid element with a value that refers to the labelling element.
            Otherwise, a label is specified for the grid element using <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.
          </li>
          <li>If the treegrid has a caption or description, <a href="https://w3c.github.io/aria/#aria-describedby" class="property-reference">aria-describedby</a> is set on the grid element with a value referring to the element containing the description.</li>
          <li>If the treegrid provides sort functions, <a href="https://w3c.github.io/aria/#aria-sort" class="property-reference">aria-sort</a> is set to an appropriate value on the header cell element for the sorted column or row as described in the section on <a href="{{ '/ARIA/apg/practices/grid-and-table-properties/' | relative_url }}">grid and table properties</a>. </li>
          <li>
            If the treegrid provides content editing functionality and contains cells that may have edit capabilities disabled in certain conditions, <a href="https://w3c.github.io/aria/#aria-readonly" class="state-reference">aria-readonly</a> is set to <code>true</code> on cells where editing is disabled.
            If edit functions are disabled for all cells, instead of setting <code>aria-readonly</code> to <code>true</code> on every cell, <code>aria-readonly</code> may be set to <code>true</code> on the <code>treegrid</code> element.
            Treegrids that do not provide cell content editing functions do not include the <code>aria-readonly</code> attribute on any of their elements.
          </li>
          <li>
            If there are conditions where some rows or columns are hidden or not present in the DOM, e.g., data is dynamically loaded when scrolling or the grid provides functions for hiding rows or columns, the following properties are applied as described in the section on <a href="{{ '/ARIA/apg/practices/grid-and-table-properties/' | relative_url }}">grid and table properties</a>.
            <ul>
              <li><a href="https://w3c.github.io/aria/#aria-colcount" class="property-reference">aria-colcount</a> or <a href="https://w3c.github.io/aria/#aria-rowcount" class="property-reference">aria-rowcount</a> is set to the total number of columns or rows, respectively. </li>
              <li><a href="https://w3c.github.io/aria/#aria-colindex" class="property-reference">aria-colindex</a> or <a href="https://w3c.github.io/aria/#aria-rowindex" class="property-reference">aria-rowindex</a> is set to the position of a cell within a row or column, respectively. </li>
            </ul>
          </li>
          <li>If the treegrid includes cells that span multiple rows or multiple columns, and if the <code>treegrid</code> role is NOT applied to an HTML <code>table</code> element, then <a href="https://w3c.github.io/aria/#aria-rowspan" class="property-reference">aria-rowspan</a> or <a href="https://w3c.github.io/aria/#aria-colspan" class="property-reference">aria-colspan</a> is applied as described in <a href="{{ '/ARIA/apg/practices/grid-and-table-properties/' | relative_url }}">grid and table properties</a>.</li>
        </ul>
        <div class="note" role="note" id="issue-container-generatedID-35"><div role="heading" class="note-title marker" id="h-note-33" aria-level="5"><span>Note</span></div><ul class="">
          <li>
            A <code>treegrid</code> built from an HTML <code>table</code> that includes cells that span multiple rows or columns must use HTML <code>rowspan</code> and <code>colspan</code> and must not use <code>aria-rowspan</code> or <code>aria-colspan</code>.
          </li>
          <li>
            If rows or cells are included in a treegrid via <a href="https://w3c.github.io/aria/#aria-owns" class="property-reference">aria-owns</a>,
            they will be presented to assistive technologies after the DOM descendants of the <code>treegrid</code> element unless the DOM descendants are also included in the <code>aria-owns</code> attribute.
          </li>
        </ul></div>
      </section>
   </section>
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
