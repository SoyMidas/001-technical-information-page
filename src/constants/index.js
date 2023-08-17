export const SectionsData = [
    {
        id: "whatIsCss",
        title: "What is CSS?",
        content: `Like HTML, CSS is not a programming language. It's not a markup language
        either. CSS is a style sheet language. CSS is what you use to selectively
        style HTML elements.`,

    },
    {
        id: "basics",
        title: "Basics",
        content: `We will break down the CSS code that pertains to red paragraph text, in order to comprehend its functionality. The entire arrangement is referred to as a ruleset (aka a rule). Take note of the designations of the distinct components:
        In order to make adjustments to multiple property values within a single ruleset, list them out separated by semicolons, as demonstrated in the following example:`,
        img: {
            src: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/css-declaration-small.png",
            alt: "CSS p declaration color red"
        }
    },
    {
        id: "prerequisites",
        title: "Prerequisites",
        list: {
            1: `Basic familiarity with using computers and using the Web passively(i.e.looking at it, consuming the content.)`,
            2: `A basic work environment set up, as detailed in Installing basic software, and an understanding of how to create and manage files, as detailed in Dealing with files.`,
            3: `Basic familiarity with HTML, as discussed in the Introduction to HTML module.`
        }
    },
    {
        id: "applyingCssToHtml",
        title: "Applying CSS to HTML",
        content: `First, let's examine three methods of applying CSS to a document: with an external stylesheet, with an internal stylesheet, and with inline styles.`,
        sections: [
            {
                title: "External stylesheet",
                content: `An external stylesheet contains CSS in a separate file with a .css extension. This is the most common and useful method of bringing CSS to a document. You can link a single CSS file to multiple web pages, styling all of them with the same CSS stylesheet. In the Getting started with CSS, we linked an external stylesheet to our web page.`
            },
            {
                title: "Internal stylesheet",
                content: "An internal stylesheet resides within an HTML document. To create an internal stylesheet, you place CSS inside a <style> element contained inside the HTML <head>."
            },
            {
                title: "Inline styles",
                content: "Inline styles inline styles are CSS declarations that affect a single HTML element, contained within a style attribute"
            },
        ]
    },
    {
        id: "howDoesCssActuallyWork?",
        title: "How does CSS actually work?",
        content: "When a browser displays a document, it must combine the document's content with its style information. It processes the document in a number of stages, which we've listed below. Bear in mind that this is a very simplified version of what happens when a browser loads a webpage, and that different browsers will handle the process in different ways. But this is roughly what happens.",
        list: {
            1: 'The browser loads the HTML (e.g. receives it from the network).',
            2: "It converts the HTML into a DOM (Document Object Model). The DOM represents the document in the computer's memory. The DOM is explained in a bit more detail in the next section.",
            3: "The browser then fetches most of the resources that are linked to by the HTML document, such as embedded images, videos, and even linked CSS! JavaScript is handled a bit later on in the process, and we won't talk about it here to keep things simpler."
            , 4: `The browser parses the fetched CSS, and sorts the different rules by their selector types into different "buckets", e.g. element, class, ID, and so on. Based on the selectors it finds, it works out which rules should be applied to which nodes in the DOM, and attaches style to them as required (this intermediate step is called a render tree).`,
            5: "The render tree is laid out in the structure it should appear in after the rules have been applied to it.",
            6: "The visual display of the page is shown on the screen (this stage is called painting)."
        }
    },
    {
        id: "aboutTheDom",
        title: "About the DOM",
        content: `A DOM has a tree-like structure. Each element, attribute, and piece of text in the markup language becomes a DOM node in the tree structure. The nodes are defined by their relationship to other DOM nodes. Some elements are parents of child nodes, and child nodes have siblings.

        Understanding the DOM helps you design, debug and maintain your CSS because the DOM is where your CSS and the document's content meet up. When you start working with browser DevTools you will be navigating the DOM as you select items in order to see which rules apply.`
    },
    {
        id: "introductionToCssLayout",
        title: "Introduction to CSS layout",
        content: "CSS page layout techniques allow us to take elements contained in a web page and control where they're positioned relative to the following factors: their default position in normal layout flow, the other elements around them, their parent container, and the main viewport/window. The page layout techniques we'll be covering in more detail in this module are:",
        list: {
            1: "Normal flow",
            2: "The display property",
            3: "Flexbox",
            4: "Grid",
            5: "Floats",
            6: "Positioning",
            7: "Table layout",
            8: "Multiple-column layout"
        },
        sections: [
            {
                title: undefined,
                content: "Each technique has its uses, advantages, and disadvantages. No technique is designed to be used in isolation. By understanding what each layout method is designed for you'll be in a good position to understand which method is most appropriate for each task."
            }
        ]
    },
    {
        id: "normalFlow",
        title: "Normal flow",
        content: "Normal flow is how the browser lays out HTML pages by default when you do nothing to control page layout.",
        list: {
            1: "The display property — Standard values such as block, inline or inline- block can change how elements behave in normal flow, for example, by making a block- level element behave like an inline - level element(see Types of CSS boxes for more information).We also have entire layout methods that are enabled via specific display values, for example, CSS Grid and Flexbox, which alter how child elements are laid out inside their parents.",
            2: "Floats — Applying a float value such as left can cause block - level elements to wrap along one side of an element, like the way images sometimes have text floating around them in magazine layouts.",
            3: "The position property — Allows you to precisely control the placement of boxes inside other boxes.static positioning is the default in normal flow, but you can cause elements to be laid out differently using other values, for example, as fixed to the top of the browser viewport.",
            4: "Table layout — Features designed for styling parts of an HTML table can be used on non - table elements using display: table and associated properties.",
            5: "Multi - column layout — The Multi - column layout properties can cause the content of a block to layout in columns, as you might see in a newspaper."
        }
    },
    {
        id: "theDisplayProperty",
        title: "The display property",
        sections: [
            {
                title: undefined,
                content: "The main methods for achieving page layout in CSS all involve specifying values for the display property. This property allows us to change the default way something displays. Everything in normal flow has a default value for display; i.e., a default way that elements are set to behave. For example, the fact that paragraphs in English display one below the other is because they are styled with display: block. If you create a link around some text inside a paragraph, that link remains inline with the rest of the text, and doesn't break onto a new line. This is because the <a> element is display: inline by default."
            },
            {
                title: undefined,
                content: "You can change this default display behavior. For example, the <li> element is display: block by default, meaning that list items display one below the other in our English document. If we were to change the display value to inline they would display next to each other, as words would do in a sentence. The fact that you can change the value of display for any element means that you can pick HTML elements for their semantic meaning without being concerned about how they will look. The way they look is something that you can change."
            },
            {
                title: undefined,
                content: "In addition to being able to change the default presentation by turning an item from block to inline and vice versa, there are some more involved layout methods that start out as a value of display. However, when using these you will generally need to invoke additional properties. The two values most important for our discussion of layout are display: flex and display: grid."
            }
        ]
    },
    {
        id: "flexbox",
        title: "Flexbox",
        content: "Flexbox is the short name for the Flexible Box Layout CSS module, designed to make it easy for us to lay things out in one dimension — either as a row or as a column. To use flexbox, you apply display: flex to the parent element of the elements you want to lay out; all its direct children then become flex items. We can see this in a simple example.",
        sections: [
            {
                title: "Setting display: flex",
                content: "The HTML markup below gives us a containing element with a class of wrapper, inside of which are three <div> elements. By default these would display as block elements, that is, below one another in our English language document."
            },
            {
                title: undefined,
                content: "However, if we add display: flex to the parent, the three items now arrange themselves into columns. This is due to them becoming flex items and being affected by some initial values that flexbox sets on the flex container. They are displayed in a row because the property flex-direction of the parent element has an initial value of row. They all appear to stretch in height because the property align-items of their parent element has an initial value of stretch. This means that the items stretch to the height of the flex container, which in this case is defined by the tallest item. The items all line up at the start of the container, leaving any extra space at the end of the row."
            },
            {
                title: "Setting the flex property",
                content: "In addition to properties that can be applied to a flex container, there are also properties that can be applied to flex items. These properties, among other things, can change the way that items flex, enabling them to expand or contract according to available space."
            },
            {
                title: undefined,
                content: "As a simple example, we can add the flex property to all of our child items, and give it a value of 1. This will cause all of the items to grow and fill the container, rather than leaving space at the end. If there is more space then the items will become wider; if there is less space they will become narrower. In addition, if you add another element to the markup, the other items will all become smaller to make space for it; the items all together continue taking up all the space."
            }
        ]
    },
    {
        id: "gridLayout",
        title: "Grid Layout",
        content: "While flexbox is designed for one-dimensional layout, Grid Layout is designed for two dimensions — lining things up in rows and columns.",
        sections: [
            {
                title: "Setting display: grid",
                content: "Similar to flexbox, we enable Grid Layout with its specific display value — display: grid. The below example uses similar markup to the flex example, with a container and some child elements. In addition to using display: grid, we also define some row and column tracks for the parent using the grid-template-rows and grid-template-columns properties respectively. We've defined three columns, each of 1fr, as well as two rows of 100px. We don't need to put any rules on the child elements; they're automatically placed into the cells our grid's created."
            },
            {
                title: "Placing items on the grid",
                content: "Once you have a grid, you can explicitly place your items on it, rather than relying on the auto-placement behavior seen above. In the next example below, we've defined the same grid, but this time with three child items. We've set the start and end line of each item using the grid-column and grid-row properties. This causes the items to span multiple tracks."
            },
            {
                title: undefined,
                content: "The rest of this guide covers other layout methods that are less important for the main layout of your page, but still help to achieve specific tasks. By understanding the nature of each layout task you will soon find that when you look at a particular component of your design, the type of layout most suitable for it will often be clear."
            }
        ]
    }
]