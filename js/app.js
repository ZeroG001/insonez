(function($){
	function indexOfRegex(arr, regex) {
		for (i = 0; i < arr.length; i++) {
			if(arr[i].match(regex)) {
				return i;
			}
		}

		return false
	}

	$('.tabular--tabs  li').click(function() {
		re = /tab\d+/i;

		$listItemClass = $this().attr("class");
		$listItemClass = $listItemClass.split(" ");
		classIndex = indexOfRegex($listItemClass, re);
		tabClass = "." + $listItemClass[classIndex];

		$('.tabular--tabs li').removeClass("active");
		$('.tabular--tab-content div').removeClass("active");

		$this.addClass("active");
		$('.tabular--tab-content ' + tabClass).addClass("active");
		
	});

})(jQuery)