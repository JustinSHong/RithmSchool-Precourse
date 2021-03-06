// Given the following HTML:

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Document</title>
// </head>
// <body>
//     <div class="header">
//     </div>
//     <section id="container">
//         <ul>
//             <li class="first">one</li>
//             <li class="second">two</li>
//             <li class="third">three</li>
//         </ul>
//         <ol>
//             <li class="first">one</li>
//             <li class="second">two</li>
//             <li class="third">three</li>
//         </ol>
//     </section>
//     <div class="footer">
//     </div>
// </body>
// </html>

// Write the code necessary to do the following:

// Select the section with an id of container without using querySelector.

    var container = document.getElementById('container');

// Select the section with an id of container using querySelector.

    var container = document.querySelector('#container');

// Select all of the list items with a class of "second".

    var second = document.querySelectorAll('.second');
    var second = document.getElementsByClassName('second');

// Select a list item with a class of third, but only the list item inside of the ol tag.

    document.querySelector("ol .third");

// Give the section with an id of container the text "Hello!".

    var newP = document.createElement('p');
    newP.innerText = 'Hello!';
    var container = document.getElementById('container');
    container.appendChild(newP);

// Add the class main to the div with a class of footer.

    var footer = document.querySelector('.footer');
    footer.classList.add('main');

    footer.className += "main";

// Remove the class main on the div with a class of footer.

    footer.classList.remove('main');

// Create a new li element.

    var li = document.createElement('li');

// Give the li the text "four".

    li.innerText = 'four';

// Append the li to the ul element.

    var ul = document.querySelector('ul');
    ul.appendChild(li);

// Loop over all of the lis inside the ol tag and give them a background color of "green".

    var lis = document.getElementsByTagName('li');
    for (let i = 0; i < lis.length; i++) {
        lis[i].style.backgroundColor = 'green';
    }

// Remove the div with a class of footer.

    var footer = document.querySelector('.footer');
    footer.remove();


