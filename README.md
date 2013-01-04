#Meteor Pagination

Not too much going on here.
Here is a basic example of how to do pagination in Meteor.

1. You publish data via Meteor Publish. The trick is that Meteor.Publish can take arguments form the Client and this is how we will get it working
2. You Meteor.autosubscribe on the Client, so that every time Meteor.Publish publishes more data - our local collection gets reactively updated.
3. Use Session variable to store page number (as well as anything else you want to store)

Make sure that on the server you check for the fact that the argument from the Client is coming, because for some reason the first time the Template is rendered and the request is sent, Session variable has not been initialized yet, so the argument "n" on the server is Null and thus {limit: n} doesn't do the trick.

Have fun!