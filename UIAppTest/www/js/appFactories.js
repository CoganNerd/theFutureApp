
angular.module('profileApp').factory('AddServiceFactory',['$http','$q', function($http, $q){
	
	return{

		addService : function(name,field,category,duration){

			var action = 'addService';
			var url = './php/processdata.php';
			var profile_promises = $q.defer();

			$http.get(url,{params:{value:action, serv_name:name, serv_field:field ,serv_category:category , serv_timeSelect:duration}})
			.success(function(response)
			{
				profile_promises.resolve(response);

			}).error(function(response){

				profile_promises.reject();

			});
			return profile_promises;
		}	

	}

}]);


angular.module('profileApp').factory('AddCompanyFactory',['$http','$q', function($http, $q){
	

	return{
		
		addCompany : function(ref_nos,name,acc_nos,emails,contacts,categorys){

			var action = 'addProfCompany';
			var url = './php/processdata.php';
			var com_promises = $q.defer();

			$http.get(url,{params:{value:action, com_ref_nos:ref_nos, com_names:name, com_acc_nos:acc_nos, com_emails:emails, com_contacts:contacts, com_categorys:categorys}})
			.success(function(response)
			{
				com_promises.resolve(response);

			}).error(function(response){

				com_promises.reject();

			});
			return com_promises;
		}	

	}

}]);


angular.module('profileApp').factory('ViewSMMEFactory',['$http','$q', function($http, $q){

	return{
		
		getAllSmme : function(){

			var action = 'viewAllSMME';

			var deferred = $q.defer();
			var url = './php/processdata.php';

			$http.get(url,{params:{value:action}}).then(function(data)
			{
				deferred.resolve(data);

			});

			return deferred.promise;
		}	

	}		
			
}]);

// angular.module('profileApp').factory('ViewServiceFactory',['$http','$q', function($http, $q){
	

// 	return{
		
// 		viewServices : function(){

// 			var action = 'viewService';
// 			var deferred = $q.defer();
// 			var url = './php/processdata.php';

// 			$http.get(url,{params:{value:action}})
// 			.success(function(data)
// 			{
// 				deferred.resolve(data);

// 			});

// 			this.getServices = function(){

// 				return deferred.promise;
// 			}
// 		}	
// 	}

// }]);


angular.module('profileApp').factory('AddServiceFactory',['$http','$q', function($http, $q){
	
	return{

		addService : function(name,field,category,duration){

			var action = 'addService';
			var url = './php/processdata.php';
			var profile_promises = $q.defer();

			$http.get(url,{params:{value:action, serv_name:name, serv_field:field ,serv_category:category , serv_timeSelect:duration}})
			.success(function(response)
			{
				profile_promises.resolve(response);

			}).error(function(response){

				profile_promises.reject();

			});
			return profile_promises;
		}	

	}

}]);


angular.module('profileApp').factory('AddCompanyFactory',['$http','$q', function($http, $q){
	

	return{
		
		addCompany : function(ref_nos,name,acc_nos,emails,contacts,categorys){

			var action = 'addProfCompany';
			var url = './php/processdata.php';
			var com_promises = $q.defer();

			$http.get(url,{params:{value:action, com_ref_nos:ref_nos, com_names:name, com_acc_nos:acc_nos, com_emails:emails, com_contacts:contacts, com_categorys:categorys}})
			.success(function(response)
			{
				com_promises.resolve(response);

			}).error(function(response){

				com_promises.reject();

			});
			return com_promises;
		}	

	}

}]);