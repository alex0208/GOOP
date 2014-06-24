angular.module('goopApp').factory('cachedClasses', function(ClassResource){
	var cachedClasses;

	return {
		query: function(){
			if(!cachedClasses)
				cachedClasses = ClassResource.query();
			return cachedClasses;
		}
	}
})