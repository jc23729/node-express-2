### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

JWT, or JSON Web Token, is a safe and secure method of transmitting information between parties, such as between server and client.

- What is the signature portion of the JWT?  What does it do?

The signature portion of the JWT is the encoded header and payload that have been "signed". This is used to verify that the JWT wasn't tampered with between sender and recipient.

- If a JWT is intercepted, can the attacker see what's inside the payload?

Yes, the payload can be viewed by de-encoding it from base-64.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
Make request with username/password to AJAX login route
Server authenticates & returns token in JSON
Token is encoded & signed with open standard, “JSON Web Token”
Front-end JavaScript receives token & stores (in var or localStorage)
For every future request, browser sends token in request
Server gets token from request & validates token

- Compare and contrast unit, integration and end-to-end tests.
Unit testing is testing a single function or functionality, end to end tests are testing the user experience as if you were a user using the site. 

- What is a mock? What are some things you would mock?

A mock is an object that simulates the behavior of an external object. Something you might mock is a call to an external API.


- What is continuous integration?
Continuous Integration is the practice of regularly merging small code changes that are known to work rather than waiting to merge large code blocks at the end of a development cycle.

- What is an environment variable and what are they used for?
An environment variable is a dynamic "object" on a computer, containing an editable value, which may be used by one or more software programs in Windows. Environment variables help programs know what directory to install files in, where to store temporary files, and where to find user profile settings

- What is TDD? What are some benefits and drawbacks?

TDD is Test-driven Development, which is the practice of making tests for your code before you even write it so that at first everything fails and as you write code, you get everything to pass. Some benefits are that you know that everything you are writing is being tested, but it is also very time consuming and planning-intensive compared to other methods of testing.

- What is the value of using JSONSchema for validation?
JSONSchema is valuable for making sure that your JSON API is receiving data appropriate to your database. It gives the ability to catch bad data up front, before it is sent to the database.

- What are some ways to decide which code to test?
Testing is subjective to some extent, but you should test often as your building, if your doing proffessional production I would do end to end test because it is a product that is going out into the market. 

- What are some differences between Web Sockets and HTTP?
Some major differences between web sockets and HTTP are that HTTP is stateless while web sockets are stateful, meaning that data persists beyond a request/response cycle. Communication with web sockets is also bi-direction, meaning that the server can communicate with the front end directly.

- Did you prefer using Flask over Express? Why or why not (there is no right 
  answer here --- we want to see how you think about technology)?

I personally disliked flask, felt their wasn't enough information out there besides the course, also felt that we should have just mastered javascript instead of learning python and flask, etc. First year hires are not going to be using python, it is for machine learning and data science which requires a degree. It honestly should have been optional. 