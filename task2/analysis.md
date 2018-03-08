Analysis of sample code

I went through the code line by line and answered the questions in the task. Please email me with any questions or feedback. The more the better! :)

Assumptions:
The code uses multiple properties and methods that would only work if previously defined early on in a much larger file e.g. (req.body ,superagent.post, etc.). I am going to assume that every function and variable has been defined the way it was supposed to.

2-4: adding extra variables for invitationBody and shopId seems wasteful given that they are used a handful of times. Even if you make the argument that it improves readability, they should both be const rather than var as they are never updated. 

5: having the url as a variable makes sense as it can mess with the readability of your code and is often manually edited. Still should be a const.

8: I would replace the anonymous function with an arrow function as it saves time and space. Either way works, though.

9: I am not very familiar with the super agent API, however, if the response code is returned as a string, then the condition would never return true.

19: It is confusing to use both the .exec method of providing a callback and the parameter method. Just stick to one for readability

25: array.indexOf always returns a number and therefore is always truthy. It appears that the code is trying to check if the invitation was sent from that shop, in which case the if statement should be: `if(shop.invitations.indexOf(invitationResponse.body.invitationId)>-1)`If I have the wrong interpretation and the code was meant to always return true then it would be faster to just type `shop.invitations.push(invitationResponse.body.invitationId);`

31: Node.js is asynchrounous, by placing the shop.save() here, you create a race condition with all of the other functions. Most of the time you won’t have a problem, but under high load you could end up saving without having made the full changes. I would suggest turning lines 20-30 into a promise then doing .then(shop.save()). 

34: Same as 9



