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

- What is an environment variable and what are they used for?

- What is TDD? What are some benefits and drawbacks?

- What is the value of using JSONSchema for validation?

- What are some ways to decide which code to test?

- What are some differences between Web Sockets and HTTP?

- Did you prefer using Flask over Express? Why or why not (there is no right 
  answer here --- we want to see how you think about technology)?
