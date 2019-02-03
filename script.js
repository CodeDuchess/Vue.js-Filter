<script src="https://cdn.jsdelivr.net/npm/vue@2.5.22/dist/vue.js"></script>  
<script>
	
    var vm = new Vue({
	el:  "#jobs",
	data: {
        // declare message with an empty value
           message: ''
           },
        template: '<div>{{ message }}</div>'
        })
		jobs: [
			{ name: "Hardware Engineer", category: "Tech" },
			{ name: "Budget Analyst", category: "Accounting" },
			{ name: "Content Strategist", category: "Marketing" },
			{ name: "Business Development Manager", category: "Sales" },
			{ name: "Network Administrator", category: "Tech" },
			{ name: "Risk Analyst", category: "Accounting" },
			{ name: "Social Media Specialist", category: "Marketing" },
			{ name: "Territory Account Manager", category: "Sales" },
			{ name: "Scrum Master", category: "Tech" }
		],
		selectedCategory: "All"
	},

    	computed: {
		filteredJobs: function() {
			var vm = this;
			var category = vm.selectedCategory;
			
			if(category === "All") {
				return vm.jobs;
			} else {
				return vm.jobs.filter(function(job) {
					return job.category === category;
				});
			}
		}
	}
});
     </script>
   </body>
</html>
