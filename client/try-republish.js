Session.set('currentPage', 1);

Meteor.autosubscribe(function () {
  Meteor.subscribe("lists", Session.get('currentPage'));
});

Template.hello.things = function() {
    return Lists.find();
};

Template.hello.events = {
  'click #publishMore' : function () {
      Session.set('currentPage', Session.get('currentPage')+1);
  }
};