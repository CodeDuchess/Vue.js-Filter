	
   
var app = new Vue({
	el: '#app',
  
  data() {
    return {
      apiRequests:[],
      search: '',
      filterText: '',
    }
  },
  
  // Filter for Displaying blogs
  computed: {
    filteredBlogs() {
    	console.log(this.search, this.filterText, this.apiRequests);
      return this.apiRequests.filter((apiRequest) => {
      	let regexp = new RegExp(`(?=.*${this.filterText})(?=.*${this.search})`, 'g');
				return apiRequest.title.match(regexp);
      })
    }
  },
  
  // Getting data from API
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {
      this.apiRequests = data.body.slice(0,5);
      console.log(data);
    })
  },
  
  methods: {
  	filter(event) {
    	this.filterText = event.target.checked ? event.target.value : '';
    }
  }
  
})
