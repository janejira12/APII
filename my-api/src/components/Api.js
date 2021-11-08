import $ from 'jquery';

var data = {
    resource_id: '48039a2a-2f01-448c-b2a2-bb0d541dedcd', // the resource id
    limit: 5, // get 5 results
    q: 'jones' // query for 'jones'
  };
  $.ajax({
    url: 'https://opend.data.go.th/get-ckan/datastore_search',
    data: data,
    dataType: 'jsonp',
    success: function(data) {
      alert('Total results found: ' + data.result.total)
    }
  });