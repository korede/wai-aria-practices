---
# This is a generated file
title: "Tree View"
ref: /ARIA/apg/patterns/treeview/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/patterns/treeview/

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
<section class="widget" id="TreeView"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
      <p>
        A tree view widget presents a hierarchical list.
        Any item in the hierarchy may have child items, and items that have children may be expanded or collapsed to show or hide the children.
        For example, in a file system navigator that uses a tree view to display folders and files,
        an item representing a folder can be expanded to reveal the contents of the folder, which may be files, folders, or both.
      </p>
      <p>Terms for understanding tree views include:</p>
      <dl>
        <dt>Node</dt>
        <dd>An item in a tree. </dd>
        <dt>Root Node</dt>
        <dd>Node at the base of the tree; it may have one or more child nodes but does not have a parent node.</dd>
        <dt>Child Node</dt>
        <dd>Node that has a parent; any node that is not a root node is a child node.</dd>
        <dt>End Node</dt>
        <dd>Node that does not have any child nodes; an end node may be either a root node or a child node.</dd>
        <dt>Parent Node</dt>
        <dd>Node with one or more child nodes. It can be open (expanded) or closed (collapsed).</dd>
        <dt>Open Node</dt>
        <dd>Parent node that is expanded so its child nodes are visible.</dd>
        <dt>Closed Node</dt>
        <dd>Parent node that is collapsed so the child nodes are not visible.</dd>
      </dl>
      <p>
        When using a keyboard to navigate a tree, a visual keyboard indicator informs the user which node is focused.
        If the tree allows the user to choose just one item for an action, then it is known as a single-select tree.
        In some implementations of single-select tree, the focused item also has a selected state; this is known as selection follows focus.
        However, in multi-select trees, which enable the user to select more than one item for an action, the selected state is always independent of the focus.
        For example, in a typical file system navigator, the user can move focus to select any number of files for an action, such as copy or move.
        It is important that the visual design distinguish between items that are selected and the item that has focus.
        For more details, see <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_focus_vs_selection' | relative_url }}">this description of differences between focus and selection</a>
        and <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_selection_follows_focus' | relative_url }}">Deciding When to Make Selection Automatically Follow Focus</a>.
      </p>

      <section class="notoc examples-section"><img alt="" 
            src="{{ '/content-images/wai-aria-practices/img/treeview.svg' | relative_url }}"
          ><div class="header-wrapper"><h2 id="examples-15" tabindex="-1">Examples</h2></div>
        
        <ul>
          <li>
            <a href="../../example-index/treeview/treeview-1/treeview-1a.html">File Directory Treeview Example Using Computed Properties</a>:
            A file selector tree that demonstrates browser support for automatically computing <code>aria-level</code>, <code>aria-posinset</code> and <code>aria-setsize</code> based on DOM structure.
          </li>
          <li>
            <a href="../../example-index/treeview/treeview-1/treeview-1b.html">File Directory Treeview Example Using Declared Properties</a>:
            A file selector tree that demonstrates how to explicitly define values for <code>aria-level</code>, <code>aria-posinset</code> and <code>aria-setsize</code>.
          </li>
          <li>
            <a href="../../example-index/treeview/treeview-navigation.html">Navigation Treeview Example</a>:
            A tree that provides navigation to a set of web pages and demonstrates browser support for automatically computing <code>aria-level</code>, <code>aria-posinset</code> and <code>aria-setsize</code> based on DOM structure.
          </li>
        </ul>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction-24" tabindex="-1">Keyboard Interaction</h2></div>
        
        <p>For a vertically oriented tree:</p>
        <ul>
          <li> When a single-select tree receives focus:
            <ul>
              <li>If none of the nodes are selected before the tree receives focus, focus is set on the first node.</li>
              <li>If a node is selected before the tree receives focus, focus is set on the selected node. </li>
            </ul>
          </li>
          <li>When a multi-select tree receives focus:
            <ul>
              <li>If none of the nodes are selected before the tree receives focus, focus is set on the first node.</li>
              <li>If one or more nodes are selected before the tree receives focus, focus is set on the first selected node.</li>
            </ul>
          </li>
          <li><kbd>Right arrow</kbd>:
            <ul>
              <li>When focus is on a closed node, opens the node; focus does not move.</li>
              <li>When focus is on a open node, moves focus to the first child node.</li>
              <li>When focus is on an end node, does nothing.</li>
            </ul>
           </li>
          <li><kbd>Left arrow</kbd>:
            <ul>
              <li>When focus is on an open node, closes the node.</li>
              <li>When focus is on a child node that is also either an end node or a closed node, moves focus to its parent node.</li>
              <li>When focus is on a root node that is also either an end node or a closed node, does nothing.</li>
            </ul>
           </li>
          <li><kbd>Down Arrow</kbd>: Moves focus to the next node that is focusable without opening or closing a node.</li>
          <li><kbd>Up Arrow</kbd>: Moves focus to the previous node that is focusable without opening or closing a node.</li>
          <li><kbd>Home</kbd>: Moves focus to the first node in the tree without opening or closing a node.</li>
          <li><kbd>End</kbd>: Moves focus to the last node in the tree that is focusable without opening a node.</li>
          <li><kbd>Enter</kbd>: activates a node, i.e., performs its default action. For parent nodes, one possible default action is to open or close the node. In single-select trees where selection does not follow focus (see note below), the default action is typically to select the focused node.</li>
          <li>Type-ahead is recommended for all trees, especially for trees with more than 7 root nodes:
            <ul>
              <li>Type a character: focus moves to the next node with a name that starts with the typed character.</li>
              <li>Type multiple characters in rapid succession: focus moves to the next node with a name that starts with the string of characters typed.</li>
            </ul>
          </li>
          <li><kbd>*</kbd> (Optional): Expands all siblings that are at the same level as the current node.</li>
          <li><strong>Selection in multi-select trees:</strong>
          Authors may implement either of two interaction models to support multiple selection: a recommended model that does not require the user to hold a modifier key, such as <kbd>Shift</kbd> or <kbd>Control</kbd>, while navigating the list
          or an alternative model that does require modifier keys to be held while navigating in order to avoid losing selection states.
            <ul>
              <li>Recommended selection model -- holding a modifier key while moving focus is not necessary:
                <ul>
                  <li><kbd>Space</kbd>: Toggles the selection state of the focused node.</li>
                  <li><kbd>Shift + Down Arrow</kbd> (Optional): Moves focus to and toggles the selection state of the next node.</li>
                  <li><kbd>Shift + Up Arrow</kbd> (Optional): Moves focus to and toggles the selection state of the previous node.</li>
                  <li><kbd>Shift + Space</kbd> (Optional): Selects contiguous nodes from the most recently selected node to the current node.</li>
                  <li><kbd>Control + Shift + Home</kbd> (Optional): Selects the node with focus and all nodes up to the first node. Optionally, moves focus to the first node.</li>
                  <li><kbd>Control + Shift + End</kbd> (Optional): Selects the node with focus and all nodes down to the last node. Optionally, moves focus to the last node.</li>
                  <li><kbd>Control + A</kbd> (Optional): Selects all nodes in the tree. Optionally, if all nodes are selected, it can also unselect all nodes.</li>
                </ul>
              </li>
              <li>Alternative selection model -- Moving focus without holding the <kbd>Shift</kbd> or <kbd>Control</kbd> modifier unselects all selected nodes except for the focused node:
                <ul>
                  <li><kbd>Shift + Down Arrow</kbd>: Moves focus to and toggles the selection state of the next node.</li>
                  <li><kbd>Shift + Up Arrow</kbd>: Moves focus to and toggles the selection state of the previous node.</li>
                  <li><kbd>Control + Down Arrow</kbd>: Without changing the selection state, moves focus to the next node.</li>
                  <li><kbd>Control + Up Arrow</kbd>: Without changing the selection state, moves focus to the previous node.</li>
                  <li><kbd>Control + Space</kbd>: Toggles the selection state of the focused node.</li>
                  <li><kbd>Shift + Space</kbd> (Optional): Selects contiguous nodes from the most recently selected node to the current node.</li>
                  <li><kbd>Control + Shift + Home</kbd> (Optional): Selects the node with focus and all nodes up to the first node. Optionally, moves focus to the first node.</li>
                  <li><kbd>Control + Shift + End</kbd> (Optional): Selects the node with focus and all nodes down to the last node. Optionally, moves focus to the last node.</li>
                  <li><kbd>Control + A</kbd> (Optional): Selects all nodes in the tree. Optionally, if all nodes are selected, it can also unselect all nodes.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <div class="note" role="note" id="issue-container-generatedID-31"><div role="heading" class="note-title marker" id="h-note-29" aria-level="5"><span>Note</span></div><ol class="">
          <li>DOM focus (the active element) is functionally distinct from the selected state. For more details, see <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_focus_vs_selection' | relative_url }}">this description of differences between focus and selection.</a></li>
          <li>
            The <code>tree</code> role supports the <a class="property-reference" href="https://w3c.github.io/aria/#aria-activedescendant">aria-activedescendant</a> property,
            which provides an alternative to moving DOM focus among <code>treeitem</code> elements when implementing keyboard navigation.
            For details, see <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_focus_activedescendant' | relative_url }}">Managing Focus in Composites Using aria-activedescendant</a>.
          </li>
          <li>
            In a single-select tree, moving focus may optionally unselect the previously selected node and select the newly focused node.
            This model of selection is known as "selection follows focus".
            Having selection follow focus can be very helpful in some circumstances and can severely degrade accessibility in others.
            For additional guidance, see <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_selection_follows_focus' | relative_url }}">Deciding When to Make Selection Automatically Follow Focus</a>.
          </li>
          <li>If selecting or unselecting all nodes is an important function, implementing separate controls for these actions, such as buttons for "Select All" and "Unselect All", significantly improves accessibility.</li>
        <li>
            If the nodes in a tree are arranged horizontally:
            <ol>
              <li><kbd>Down Arrow</kbd> performs as <kbd>Right Arrow</kbd> is described above, and vice versa.</li>
              <li><kbd>Up Arrow</kbd> performs as <kbd>Left Arrow</kbd> is described above, and vice versa.</li>
            </ol>
          </li>
        </ol></div>
      </section>

      <section id="tree_roles_states_props" class="notoc"><div class="header-wrapper"><h2 id="wai-aria-roles-states-and-properties-25" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2></div>
        
        <ul>
          <li>All tree nodes are contained in or owned by an element with role <a class="role-reference" href="https://w3c.github.io/aria/#tree">tree</a>.</li>
          <li>Each element serving as a tree node has role <a class="role-reference" href="https://w3c.github.io/aria/#treeitem">treeitem</a>.</li>
          <li>Each root node is contained in the element with role <code>tree</code> or referenced by an <a href="https://w3c.github.io/aria/#aria-owns" class="property-reference">aria-owns</a> property set on the <code>tree</code> element.</li>
          <li>Each parent node contains or owns an element with role <a class="role-reference" href="https://w3c.github.io/aria/#group">group</a>.</li>
          <li>Each child node is contained in or owned by an element with role <a class="role-reference" href="https://w3c.github.io/aria/#group">group</a> that is contained in or owned by the node that serves as the parent of that child.</li>
          <li>
            Each element with role <code>treeitem</code> that serves as a parent node has <a class="property-reference" href="https://w3c.github.io/aria/#aria-expanded">aria-expanded</a>
            set to <code>false</code> when the node is in a closed state and set to <code>true</code> when the node is in an open state.
            End nodes do not have the <code>aria-expanded</code> attribute because, if they were to have it, they would be incorrectly described to assistive technologies as parent nodes.
          </li>
          <li>
            If the tree supports selection of more than one node, the element with role <code>tree</code> has <a class="property-reference" href="https://w3c.github.io/aria/#aria-multiselectable">aria-multiselectable</a> set to <code>true</code>.
            Otherwise, <code>aria-multiselectable</code> is either set to <code>false</code> or the default value of <code>false</code> is implied.
          </li>
          <li>
            The selection state of each selectable node is indicated with either <a href="https://w3c.github.io/aria/#aria-selected" class="state-reference">aria-selected</a> or <a href="https://w3c.github.io/aria/#aria-checked" class="state-reference">aria-checked</a>:
            <ul>
              <li>
                If the selection state is indicated with <code>aria-selected</code>, then <code>aria-checked</code> is not specified for any nodes.
                Alternatively, if the selection state is indicated with <code>aria-checked</code>, then <code>aria-selected</code> is not specified for any nodes.
                See notes below regarding considerations for which property to use and for details of the unusual conditions that might allow for both properties in the same tree.
              </li>
              <li>
                If any nodes are selected, each selected node has either <a href="https://w3c.github.io/aria/#aria-selected" class="state-reference">aria-selected</a> or <a href="https://w3c.github.io/aria/#aria-checked" class="state-reference">aria-checked</a> set to <code>true</code>.
                No more than one node is selected at a time if the element with role <code>tree</code> does <em>not</em> have <a class="property-reference" href="https://w3c.github.io/aria/#aria-multiselectable">aria-multiselectable</a> set to <code>true</code>.
              </li>
              <li>
                All nodes that are selectable but not selected have either <a href="https://w3c.github.io/aria/#aria-selected" class="state-reference">aria-selected</a> or <a href="https://w3c.github.io/aria/#aria-checked" class="state-reference">aria-checked</a> set to <code>false</code>.
              </li>
              <li>
                If the tree contains nodes that are not selectable, neither <a href="https://w3c.github.io/aria/#aria-selected" class="state-reference">aria-selected</a> nor <a href="https://w3c.github.io/aria/#aria-checked" class="state-reference">aria-checked</a> is present on those nodes.
              </li>
              <li>
                Note that except in trees where selection follows focus, the selected state is distinct from focus.
                For more details, see <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_focus_vs_selection' | relative_url }}">this description of differences between focus and selection</a> and <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_selection_follows_focus' | relative_url }}">Deciding When to Make Selection Automatically Follow Focus</a>.
              </li>
            </ul>
          </li>
          <li>The element with role <code>tree</code> has either a visible label referenced by <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> or a value specified for <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.</li>
          <li>If the complete set of available nodes is not present in the DOM due to dynamic loading as the user moves focus in or scrolls the tree, each node has <a href="https://w3c.github.io/aria/#aria-level" class="property-reference">aria-level</a>, <a href="https://w3c.github.io/aria/#aria-setsize" class="property-reference">aria-setsize</a>, and <a href="https://w3c.github.io/aria/#aria-posinset" class="property-reference">aria-posinset</a> specified.</li>
          <li>
            If the <code>tree</code> element is horizontally oriented, it has <a href="https://w3c.github.io/aria/#aria-orientation" class="property-reference">aria-orientation</a>
            set to <code>horizontal</code>.
            The default value of <code>aria-orientation</code> for a tree is <code>vertical</code>.
          </li>
        </ul>
        <div class="note" role="note" id="issue-container-generatedID-32"><div role="heading" class="note-title marker" id="h-note-30" aria-level="5"><span>Note</span></div><ol class="">
          <li>Some factors to consider when choosing whether to indicate selection with <code>aria-selected</code> or <code>aria-checked</code> are:
            <ul>
              <li>
                Some design systems use <code>aria-selected</code> for single-select widgets and <code>aria-checked</code> for multi-select widgets.
                In the absence of factors that would make an alternative convention more appropriate, this is a recommended convention.
              </li>
              <li>
                The language of instructions and the appearance of the interface might suggest one attribute is more appropriate than the other.
                For instance, do instructions say to <q>select</q> items? Or, is the visual indicator of selection a check mark?
              </li>
              <li>It is important to adopt a consistent convention for selection models across a site or app.</li>
            </ul>
          </li>
          <li>
            Conditions that would permit a tree to include both <code>aria-selected</code> and <code>aria-checked</code> are extremely rare.
            It is strongly recommended to avoid designing a tree widget that would have the need for more than one type of state.
            If both states were to be used within a tree, all the following conditions need to be satisfied:
            <ul>
              <li>The meaning and purpose of <code>aria-selected</code> is different from the meaning and purpose of <code>aria-checked</code> in the user interface.</li>
              <li>The user interface makes the meaning and purpose of each state apparent.</li>
              <li>The user interface provides a separate method for controlling each state.</li>
            </ul>
          </li>
          <li>
            If <a href="https://w3c.github.io/aria/#aria-owns" class="property-reference">aria-owns</a> is set on the tree container to include elements that are not DOM children of the container,
            those elements will appear in the reading order in the sequence they are referenced and after any items that are DOM children.
            Scripts that manage focus need to ensure the visual focus order matches this assistive technology reading order.
          </li>
        </ol></div>
      </section>
    </section>
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
