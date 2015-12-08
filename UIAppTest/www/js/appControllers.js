
 //Creating a controller that define an application here ...

profileApp.controller('profileCtrl',['$scope','AddCompanyFactory',function($scope, AddCompanyFactory) {

		$scope.addCompanyProf = function(){

			
			var ref_no = $scope.com_ref_no;
			var name = $scope.com_name;
			var account = $scope.com_acc_no;
			var email = $scope.com_email;
			var contact = $scope.com_contact;
			var category = $scope.com_description;


		 	var addComPromise = AddCompanyFactory.addCompany(ref_no, name, account, email, contact, category);

		   	addComPromise.then(function(data){
		   		alert('Successfully');
 				console(result);


		   	}).error(function(data){

		   		alert('failed');
 				console(result);

		   	});
		};
	   
}]);

profileApp.controller('fieldController',['$scope','AddServiceFactory',function($scope, AddServiceFactory) {
	 		   
	 	var servicePromise;

		$scope.addServ = function(){

			var serv_name = $scope.serv_name;

			var serv_category = $scope.category;

			var serv_field = $scope.field;

			var serv_timeSelect = $scope.timeSelect;


		 	servicePromise = AddServiceFactory.addService(serv_name, serv_field, serv_category, serv_timeSelect);

		   // 	servicePromise.then(function(data){
		   // 		alert('Successfully');
 				// console(result);


		   // 	}).error(function(data){

		   // 		alert('failed');
 				// console(result);

		   // 	});
		}
	   
}]);

profileApp.controller('viewSMMEController',['$scope','ViewSMMEFactory',function($scope, ViewSMMEFactory) {

	var viewSMMEPromise = ViewSMMEFactory.getAllSmme();
	console.log(viewSMMEPromise);
	
	 viewSMMEPromise.then(function(data){

	 	 $scope.smmes = data.data;
	 	 console.log($scope.smmes);
	 	
	 });

}]);








    