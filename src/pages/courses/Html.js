export const htmlContent = {
  name: "HTML",
  description: "Master HTML - The Foundation of Web Development",
  lessonsCount: 6,
  lessons: [
    {
      id: 1,
      title: "Introduction & Basics",
      icon: "📚",
      content: "1.1 What is HTML?\nHTML (HyperText Markup Language) is the standard markup language used to create the structure of web pages. It uses a series of elements and tags to tell the browser how to display content.\n1.2 Why is it used?\nIt is used to define the skeleton of a website, organizing text, images, and links into a readable format. It also provides the foundation that allows CSS and JavaScript to add styling and interactivity.\n1.3 Basic HTML Structure```\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Page Title</title>\n</head>\n<body>\n  <h1>This is a Heading</h1>\n  <p>This is a paragraph.</p>\n</body>\n</html>```1.4 Key Elements Explained\n<!DOCTYPE html>: Defines that this document is an HTML5 document.\n<html>: The root element that wraps all content on the entire page.\n<head>: Contains \"meta\" information about the page (like the title), which isn't shown to the user.\n<body>: Contains all the visible content, such as headings, paragraphs, and images.\n1.5 Common HTML Elements|||\nElement|Name|Description|Example\n<h1> to <h6>|Headings|Defines the hierarchy of titles (h1 is the most important).|<h1>Main Title</h1>\n<p>|Paragraph|Defines a block of text.|<p>This is a text.</p>\n<button>|Button|Defines a clickable button for user interaction.|<button>Click Me</button>\n<ul> / <li>|List|Creates an unordered (bulleted) list and list items.|<ul><li>Item</li></ul>\n<div>|Division|A container used to group sections of content.|<div>...</div>\n<span>|Span|An inline container used to style specific parts of text.|<span>Highlight</span>\n|||"
    },

    {
      id: 2,
      title: "Links & Navigation",
      icon: "🔗",
      content: `2.1 What is a Link? 
A link (or hyperlink) is a clickable element that connects one web resource to another. When you click a link, the browser loads the destination URL. It can be text, an image, or any other HTML element.
2.2 The Link Tag
The <a> (anchor) tag is used to create links.|||
Tag|Attribute|Purpose|Example
<a>|href|Defines the destination URL.|<a href="page.html">Click Here</a>
<a>|target="_blank"|Opens the link in a new tab.|<a href="url" target="_blank">Open New</a>
<a>|href="mailto:"|Creates an email link.|<a href="mailto:info@site.com">Email Us</a>
|||
2.3 What is Navigation?
Navigation refers to a set of links grouped together to help users move through the different sections of a website. It is the "menu" of your web application.
2.4 The Navigation Tag
The <nav> tag is a container used specifically for major navigation blocks.|||
Tag|Description|Typical Usage
<nav>|A semantic wrapper for navigation links.|Groups the main menu links.
<ul> / <li>|Used inside <nav> to list links.|Creates a structured list of menu items.|||
2.5 Lists
An HTML list is a structural element used to group related items into a clear, organized format using bullets, numbers, or terms.
Types of Lists:|||
List Type|Tag|Marker Type|Professional Use Case
Unordered|<ul>|Bullets|Navigation menus, feature lists.
Ordered|<ol>|Numbers/Letters|Procedural steps, Top 10 rankings.
Description|<dl>|None|Glossaries, FAQ sections, name-value pairs.
|||
Example:\`\`\`
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
\`\`\``
    },
    {
      id: 3,
      title: "Images & Multimedia",
      icon: "🖼️",
      content: `3.1 HTML Images
Images are used to improve the design and the appearance of a web page. The <img> tag is an empty tag, meaning it contains attributes only and does not have a closing tag.|||
Tag|Key Attributes|Purpose|Example
<img>|src, alt|Embeds an image in the document.|<img src="logo.png" alt="Company Logo">
<figure>|N/A|Groups an image and a caption.|<figure>...</figure>
<figcaption>|N/A|Defines a caption for a <figure> element.|<figcaption>Figure 1</figcaption>
|||
Example:\`\`\`
<a href="https://www.google.com" target="_blank">Search on Google</a>
\`\`\`
3.2 HTML Multimedia
Multimedia refers to content like audio, video, and animations. Modern HTML provides native tags to play these files without needing extra plugins.|||
Element|Description|Example
<video>|Embeds video content; uses controls attribute for play/pause.|<video src="vid.mp4" controls></video>
<audio>|Embeds sound content; uses controls for user interaction.|<audio src="music.mp3" controls></audio>
<iframe>|Used to embed an external page or a YouTube video.|<iframe src="https://www.youtube.com/embed/xyz"></iframe>
|||
Example:\`\`\`
<img src="logo.png" alt="Company Logo" width="200">
\`\`\`
`
    },
    {
      id: 4,
      title: "Tables, Frames & Forms",
      icon: "📋",
      content: `4.1 Table:
An HTML table is defined with the <table> tag. It is primarily used to display tabular data (like financial reports or schedules) in a way that is easy for users to scan and for search engines to index.
**Basic Table Structure:**
To create a table, you use a combination of these three core tags:
<table>: The main container that wraps the entire grid.
<tr>: Represents a Table Row; every row starts here.
<td>: Represents Table Data; these are the individual cells that hold the content.
**Example:**\`\`\`
<table border="1">
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>
\`\`\`
4.2 Forms:
An HTML form is defined using the <form> element. It is the standard way to handle user interactions such as logging in, registering accounts, searching for content, or sending feedback.
**Basic Form Tags**
<form>: The container that wraps all input elements and defines where the data should be sent (using the action attribute).
<input>: The most common form element. Depending on the type attribute, it can be a text box, checkbox, radio button, or a "Submit" button.
<label>: A descriptive tag for an input. Clicking the label focuses the input field, which is a professional standard for accessibility.
<button>: Triggers the submission of the collected data.
**Example:**\`\`\`
<form action="/submit_data">
  <label for="name">Name:</label>
  <input type="text" id="name" name="user_name">
  
  <button type="submit">Submit</button>
</form>
\`\`\`
4.3 Frame :
A Frame is an HTML element used to divide a browser window into multiple sections, where each section can load a separate HTML document independently.
**Frame Tags:**
<frameset>: The container used to organize the window into rows or columns.
<frame>: Defines the specific HTML file that will open in each section of the frameset.
<noframes>: Provides alternative content for browsers that do not support frames.
**Example:**\`\`\`
<html>
<frameset cols="25%,75%">
  <frame src="menu.html">
  <frame src="main_content.html">
  
  <noframes>
    <body>Your browser does not support frames.</body>
  </noframes>
</frameset>
</html>
\`\`\`
`
    },
    {
      id: 5,
      title: "Semantic HTML & HTML Attributes",
      icon: "🏗️",
      content: `5.1 Semantic HTML :
A semantic element clearly describes its purpose to both the browser and the developer. For example, a tag like <header> tells the browser "this is the top section," whereas a non-semantic tag like <div> tells the browser nothing about its content.
Common Semantic Tags:|||
Tag|Purpose
<header>|Defines a header for a document or a section (usually contains a logo or title).
<nav>|Defines a set of navigation links.
<main>|Specifies the unique, primary content of the document.
<section>|Defines a specific thematic grouping of content.
<article>|Defines independent, self-contained content (like a blog post or news story).
<footer>|Defines a footer for a document (usually contains copyright or contact info).
|||
**Example:**\`\`\`
<header>
  <h1>My Tutorial</h1>
</header>
<nav>
  <a href="#">Home</a> | <a href="#">Lessons</a>
</nav>
<main>
  <article>
    <h2>What is Semantics?</h2>
    <p>It is using tags that describe their meaning.</p>
  </article>
</main>
<footer>
  <p>&copy; 2026 Education Site</p>
</footer>
\`\`\`
5.2 HTML Attributes
Attributes provide additional information about an element and are always placed in the opening tag.|||
Attribute|Purpose|Example
class|Specifies one or more class names for an element (used for CSS).|<div class="menu">
id|Specifies a unique id for an element.|<h1 id="top">
style|Adds inline CSS styles to an element.|<p style="color:red;">
title|Adds extra information shown as a "tooltip" when hovering.|<span title="More Info">
lang|Declares the language of the webpage (important for SEO).|<html lang="en">
|||
**Example:**\`\`\`
<h2 id="lesson-header" style="color: navy;">Understanding Attributes</h2>

<p class="content-text" title="Note from W3Schools">
  Attributes are placed in the opening tag.
</p>

<img src="html_logo.png" alt="HTML5 Logo" width="100">
\`\`\`
`
    }
  ]
};
