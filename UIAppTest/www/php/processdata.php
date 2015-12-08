<?php
	// include('smmedasefile.php');
	DEFINE('DB_USER', 'theFuture');
	DEFINE('DB_PSWD', '12345');
	DEFINE('DB_HOST', 'localhost');
	DEFINE('DB_NAME', 'theFutureAppdb');

	$resultsArray =array();

	$dbconnect = mysqli_connect(DB_HOST, DB_USER, DB_PSWD, DB_NAME); //url path to connect to the database
	

	switch ($_GET['value']) {
		case 'addProfCompany':
			# code...
			if(!$result = $dbconnect->prepare("CALL prc_add_smme(?,?,?,?,?,?)"))
			{
				echo $dbconnect->error;

			}
			
			$result = $dbconnect->prepare("CALL prc_add_smme(?,?,?,?,?,?)");
			

			if(!$result->bind_param("ssssss",$_GET['com_ref_nos'], $_GET['com_names'], $_GET['com_acc_nos'], $_GET['com_emails'], $_GET['com_contacts'],$_GET['com_categorys'])) {
		
				echo $dbconnect->error;
			}

			if(!$result->execute())
			{
				echo $dbconnect->error;
			}

			// $result->bind_param($com_ref_no, $com_name, $com_acc_no, $com_email,$com_contact, $com_category, $tblDoctor_doctor_id);

			break;

		case 'addService':
			# code...
			if(!$result = $dbconnect->prepare("CALL proc_ins_service(?,?,?,?)"))
			{
				echo $dbconnect->error;

			}
			
			$result = $dbconnect->prepare("CALL proc_ins_service(?,?,?,?)");

			

			if(!$result->bind_param("ssss",$_GET['serv_name'], $_GET['serv_field'], $_GET['serv_category'], $_GET['serv_timeSelect'])) {
		
				echo $dbconnect->error;
			}

			if(!$result->execute())
			{
				echo $dbconnect->error;
			}

			// $result->bind_param($com_ref_no, $com_name, $com_acc_no, $com_email,$com_contact, $com_category, $tblDoctor_doctor_id);

			break;

		case 'viewService':

			if(!$result = $dbconnect->prepare("CALL proc_getAll_services()"))
			{
				echo $dbconnect->error;
			}

			$result = $dbconnect->prepare("CALL proc_getAll_services()");

			if(!$result->execute())
			{
				echo $dbconnect->error;
			}

			$result->bind_result($serv_id, $serv_name, $serv_desc, $serv_category, $serv_duration,$tblSMME_smme_id);

			while($result->fetch()) 
			{
				# code...
				array_push($resultsArray,  array(
							'service_id'=>$serv_id,
							'service_name'=>$serv_name,
							'description'=>$serv_desc,
							'service_category'=>$serv_category,
							'service_duration'=>$serv_duration,
							'tblSMME_smme_id'=>$tblSMME_smme_id));
			}
			echo json_encode($resultsArray);

			break;	

		case 'viewAllSMME':

			if(!$result = $dbconnect->prepare("CALL proc_retriveAll_smme()"))
			{
				echo $dbconnect->error;
			}



			$result = $dbconnect->prepare("CALL proc_retriveAll_smme()");

			if(!$result->execute())
			{
				echo $dbconnect->error;
			}

			$result->bind_result($smmeID, $ref_no, $smme_name, $acc_no, $email,$contact,$desc, $docID);

			while($result->fetch()) 
			{
				# code...
				array_push($resultsArray,  array(
							'smme_id'=>$smmeID,
							'refence_no'=>$ref_no,
							'name'=>$smme_name,
							'account_no'=>$acc_no,
							'email'=>$email,
							'contact_no'=>$contact,
							'category'=>$desc,
							'tblDoctor_doctor_id'=>$docID));
			}
			echo json_encode($resultsArray);
			break;				
			
		default:
			# code...
			break;
	}	
?>