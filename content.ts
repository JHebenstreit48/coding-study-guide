// // content.ts
// const htmlListItems = `
//  <li>
//             <span class="emphasis">Hypertext Markup Language (HTML)</span> is one of the three cornerstone languages
//             used in web development.
//           </li>

//           <li>
//             <span class="emphasis">HTML</span> is used to create the <span class="emphasis">structure</span> of a
//             webpage.
//           </li>

//           <li>
//             It is made up of <span class="emphasis">elements</span> which work together to provide content and the basic
//             framework for all pages on
//             the web.
//           </li>

//           <li>
//             There are multiple types of elements including: <span class="emphasis">text, image, header, and list</span>.
//           </li>

//           <li>
//             <span class="emphasis">Elements</span> are also used to <span class="emphasis">divide</span> the <span
//               class="emphasis">content</span> on the page and to <span class="emphasis">describe</span> the <span
//               class="emphasis">content</span> to <span class="emphasis">browsers</span> and other developers.
//           </li>

//           <li>
//             Common types of <span class="emphasis">elements</span> used to <span class="emphasis">divide content</span>
//             are: <span class="emphasis">meta-related, content division, and semantic elements</span>.
//           </li>

//           <li>

//             The following element contains information or <span class="emphasis">metadata</span> that helps the <span
//               class="emphasis">browser</span> to <span class="emphasis">render</span> the page correctly.

//             <ol>
//               <li type="i">
//                 <pre class="code"><code>&lt;head&gt;</code></pre>
//               </li>
//             </ol>

//           </li>

//           <li>
//             The <span class="emphasis">(body)</span> element represents the <span class="emphasis">visible
//               content</span> shown to the <span class="emphasis">user</span>.
//           </li>

//           <li>
//             Any content we want the <span class="emphasis">end user</span> to see and <span
//               class="emphasis">interact</span> with must be placed inside the <span class="emphasis">"body"</span>
//             element.
//           </li>

//           <li>
//             The "<span class="emphasis">DOCTYPE html</span>" at the top of the page is considered a "<span
//               class="emphasis">declaration</span>".
//           </li>

//           <li>
//             <span class="emphasis">"Declarations"</span> are used to tell the browser what document type it should
//             expect when opened.
//           </li>

//           <li>
//             <span class="emphasis">"DOCTYPE"</span> is <span class="emphasis">NOT</span> <span id="case-sense">case
//               sensitive</span>, but <span class="emphasis">HTML</span> elements <span class="emphasis">are</span>.
//           </li>

//           <li>
//             "Metadata" is data about the webpage that the browser uses to effectively serve our webpage to users.
//           </li>

//           <li>
//             "Metadata" is not typically seen by users.
//           </li>

//           <li>
//             The "style" element defines the CSS styles associated with a website.
//           </li>

//           <li>
//             The "base" element defines the URL for a webpage.
//           </li>

//           <li>
//             The "meta" element defines metadata such as the character set, description, keywords, author, and viewport.
//           </li>

//           <li>
//             The "script" element embeds client-side scripts in the HTML document
//           </li>

//           <li>
//             The <span class="emphasis">character set</span> element, sets the character encoding.

//             <ol>

//               <li type="i">

//                 <pre class="code"><code>charset</code></pre>

//               </li>

//             </ol>

//           </li>

//           <li>
//             When the following attribute is set, the page will be in English.

//             <ol>

//               <li type="i">

//                 <pre class="code"><code>lang="en"</code></pre>

//               </li>

//             </ol>

//           </li>

//           <li>

//             The following element sets an HTTP header for content.

//             <ol>

//               <li type="i">

//                 <pre class="code"><code>http-equiv</code></pre>

//               </li>

//             </ol>

//           </li>

//           <li>
//             The "viewport" element sets the default view for our webpage.
//           </li>

//           <li>
//             The "section" element divides content up into more organized sections based on thematic content.
//           </li>

//           <li>
//             The "class" attribute is used to define one or more classnames for an element.
//           </li>

//           <li>
//             The "id" attribute is a way to identify elements and select them.
//           </li>

//           <li>
//             Using the "ul" tag, creates an "unordered list" of items. This is a bulleted list.
//           </li>

//           <li>
//             Using the "ol" tag, creates an "ordered list". This is a numbered list.
//           </li>

//           <li>
//             Using the "li" tag, creates a "list item" for an unordered or ordered list.
//           </li>

//           <li>
//             If you put the following code in the HTML file it will block the
//             password from being viewed as it is typed.

//             <ol>

//               <li type="i">

//                 <pre class="code"><code>input type="password</code></pre>

//               </li>

//             </ol>
//           </li>
// `;

// const cssListItems = `
// <li>
//             <span class="emphasis">CSS</span> stands for "<span class="emphasis">Cascading Style Sheets</span>".
//           </li>

//           <li>
//             CSS defines how webpage content is presented to users.
//           </li>

//           <li>
//             For example it defines things such as: webpage colors, aesthetics, visual, layout, and organization.
//           </li>

//           <li>
//             The three ways to style a webpage using CSS are: inline CSS, internal CSS, and external CSS.
//           </li>

//           <li>
//             When using an external CSS style sheet. You use a link element to link the HTML page to a separate CSS file.
//           </li>

//           <li>
//             When using "external CSS", the link is placed between the HTML files "head" elements.
//           </li>

//           <li>
//             A "margin" indicates how much space we want around the outside of an element.
//           </li>

//           <li>
//             A "padding" indicates how much space we want around the content inside an element.
//           </li>

//           <li>
//             The "." that precedes the "card" designates this as a class selector.
//           </li>

//           <li>
//             Any HTML element assigned to the class will gain whatever property assignments you defined in your CSS code.
//           </li>

//           <li>
//             The "bow-shadow" CSS property adds shadow effects around the elements frame.
//           </li>

//           <li>
//             Each box consists of margins outside the element, and the element's "borders, padding, and content." This is
//             sometimes referred to as the "CSS box model."
//           </li>

//           <li>
//             When trying to center something on a page, such as text or an image. It is best to use the
//             <span class="emphasis">max-width</span> and <span class="emphasis">min-width</span> commands in addition to
//             the <span class="emphasis">width</span>
//             command if you want to really get more precise.
//           </li>
// `;

// const gitListItems = ` 
//         <li>
//           The "<span class="emphasis">git status</span>": command <span class="emphasis">checks</span> what <span
//             class="emphasis">branch</span> we are <span class="emphasis">currently</span> on.
//         </li>

//         <li>
//           The "<span class="emphasis">git checkout -b branch-name</span>": command <span class="emphasis">creates</span>
//           a <span class="emphasis">new</span> branch and <span class="emphasis">switches</span> to it.
//         </li>

//         <li>
//           The <span class="emphasis">git add .</span> command is used to stage <span class="emphasis">all changes</span>
//           <span id="git-add-1">(new and modified files)</span> in the <span class="emphasis">current directory</span>
//           and <span class="emphasis">subdirectories</span>.
//         </li>

//         <li>
//           The <span class="emphasis">git add -A</span> command (<span class="emphasis">"A"</span> stands for <span
//             class="emphasis">"all"</span>) stages <span class="emphasis">all changes</span> in the entire working
//           directory (<span id="git-add-2">new files, modified files, and deletions</span>).
//         </li>

//         <li>
//           The "-m": flag to associate a message with our commit.
//         </li>

//         <li>
//           The <span class="emphasis">git branch -b branch name</span> command creates a branch, but does not check you
//           out to it.
//         </li>
// `;

// function appendHtmlContent() {
//   const htmlList = document.querySelector('.card:nth-of-type(1) .list-items');
//   if (htmlList) {
//     htmlList.innerHTML += htmlListItems;
//   }
// }
// function appendCssContent() {
//     const cssList = document.querySelector('.card:nth-of-type(2) .list-items');
//     if (cssList) {
//       cssList.innerHTML += cssListItems;
//     }
//   }

//   function appendGitContent() {
//     const gitList = document.querySelector('.card:nth-of-type(3) .list-items');
//     if (gitList) {
//       gitList.innerHTML += gitListItems;
//     }
//   }

// document.addEventListener('DOMContentLoaded', appendHtmlContent);
// document.addEventListener('DOMContentLoaded', appendCssContent);
// document.addEventListener('DOMContentLoaded', appendGitContent);