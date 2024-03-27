JavaScript DOM (Document Object Model):

DOM, allows JavaScript to access and modify all the elements in an HTML document.

DOM is a standard object model and programming interface for HTML documents. 
DOM is a way to represent the webpage in a structured hierarchical way so that it will be easier for programmers and users to read through the document.

https://media.geeksforgeeks.org/wp-content/uploads/DOM.png

Window Object: Window Object is object of the browser which is always at top of the hierarchy.  It is like an API that is used to set and access all the properties and methods of the browser. It is automatically created by the browser.
Document object: When an HTML document is loaded into a window, it becomes a document object. The ‘document’ object has various properties that refer to other objects which allow access to and modification of the content of the web page. If there is a need to access any element in an HTML page, we always start with accessing the ‘document’ object. Document object is property of window object.
Form Object: It is represented by form tags.
Link Object: It is represented by link tags.
Anchor Object: It is represented by a href tags.
Form Control Elements: Form can have many control elements such as text fields, buttons, radio buttons, checkboxes, etc.


document.getElementByID('Name_of_ID'); // Grabs the element with the id name from the connected HTML file.

document.getElementByClassName('Name_of_class'); Grabs the element with the class name from the connected HTML file.

document.getElementByTagName('Name_of_tag');Grabs the element with the tag name from the connected HTML file.
