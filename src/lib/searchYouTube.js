var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
	// dataFilter: function(data) {return data.items;},
  data: {
		 key: options.key, //window.YOUTUBE_API_KEY
		 q: options.query,
		 part: 'snippet',
     maxResults: options.max,
     type: 'video',
     videoEmbeddable: true

	 },
    success: function (data) {
      callback(data.items);
      // console.log('message received');
      console.log(data);
    },
    error: function (data) {
     console.log ('ajax not going through')
  }})
};


window.searchYouTube = searchYouTube;
