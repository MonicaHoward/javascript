/*
    Do the following steps in this file, and make sure this file is linked to the shopping-list.html file

    

    1. Create three variables that hold references to the following elements &lt;ul&gt; &lt;input&gt; &lt;button&gt; elements.
    
    
    2. Create a function that will run in response to the button being clicked.
    
    
    
    3. Inside the function body, start off by storing the current value of the input element in a variable.
    
    
    
    4. Next, empty the input element by setting its value to an empty string — ''.
    
    
    
    5. Create three new elements — a list item (&lt;li&gt;), &lt;span&gt;, and &lt;button&gt;, and store them in variables.
    
    
    
    6. Append the span and the button as children of the list item.
    
    
    
    7. Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
    
    
    
    8. Append the list item as a child of the list.
    
    
    
    9. Attach an event handler to the delete button, so that when clicked it will delete the entire list item it is inside.
    
    
    
    10. Finally, use the focus() method to focus the input element ready for entering the next shopping list item.

    */

    let ul = document.querySelector('ul');
    let input = document.querySelector('input');
    let button = document.querySelector('button')

    let inputVal = input.value

    button.addEventListener("click", function(){
        
        console.log(inputVal)

        let li = document.createElement('li')
        let span = document.createElement('span')
        let deleteButton = document.createElement('button')

        ul.appendChild(li)
        li.appendChild(span)
        li.appendChild(deleteButton)

        span.textContent = inputVal
        deleteButton.textContent = 'Delete'
        

        input.value =  ''

        deleteButton.addEventListener("click", function(){
            ul.removeChild(li)
            })
    })


   