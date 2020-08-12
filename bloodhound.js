// constructs the suggestion engine
var states = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace, limit: 30,
  // `states` is an array of state names defined in "The Basics"
  local: $.map(states, function(state) { return { value: state }; })
});

// kicks off the loading/processing of `local` and `prefetch`
states.initialize();

$('#bloodhound .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 3,

},
{
  name: 'states',
  displayKey: 'value',
  // `ttAdapter` wraps the suggestion engine in an adapter that
  // is compatible with the typeahead jQuery plugin
  source: states.ttAdapter()
});