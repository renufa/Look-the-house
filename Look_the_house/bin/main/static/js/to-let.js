//manage active menu
switch (menu) {
case 'About':
	$('#about').addClass('active');
	break;
	
case 'Login':
	$('#login').addClass('active');
	break;
case 'Registration':
	$('#registration').addClass('active');
	break;
	
case 'AddServices':
	$('#addservices').addClass('active');
	break;
	
case 'View-Services':
	$('#viewservices').addClass('active');
	break;
case 'Manage-View-Services':
	$('#manageviewservices').addClass('active');
	break;

	
default:
	     if (menu='Home') {
			
		$('#home').addClass('active');
	     }
		break;
	
}


//adding a pre loader

var preloader=$('.preLoader');
if (preloader.length) {
	
setTimeout(function(){

	$('.preLoader').fadeOut("slow");
	
},2000);

}



var table=$('#viewServices');

if(table.length){

	var jsonUrl=jsonurl;
	

	 table.DataTable({
  lengthMenu:[[30,73,-1],['30 files','73 files','All']],
  pageLength:30,
  ajax:{
	  url:jsonUrl,
	  dataSrc : ''
	 
	  
  },
  columns : [
	  {
		  data:'id',
		  mRender:function(data){
			  				
			  var str='';
				var id=data;	
		
					if (userRole=='ADMIN') {
							
			  return id;
			
			  
		  }else {
			return str;
		}
	  }
	  },
	  {
		data:'vCode',
		mRender:function(data){
			var str='';
			
			str+='<video src="videos/'+data+'.mp4" id="vsvideo" type="video/mp4"  controls></video>';
			return str;
			
			
			
		}
	  
	  },
		 {
			data:'iCode',
			mRender:function(data){
				var str='';
				
				str+='<img src="images/'+data+'.jpg" id="vsimg" >';
				return str;
				
				
				
			}
		
		
	  },
	  {
		  
		  data:'id',
		  mRender:function(data){
			  				
			  var str='';
			
						
			  str+='<a href="/map?id='+data+'" id="gmapjs" class="btn btn-primary"><span class="glyphicon glyphicon-map-marker ">Google Maps</span></a>';
                	return str;
					
		  }
		  
	  }
	  ,
	  {
		  data:'rentType'
		 
		  
		  
	  },
	  {
		  data:'country'
		 
	  },
	  {
		  data:'district'
		 
	  },
	  {
		  data:'subDistrict'
		 
	  },
	  {
		  data:'detailsAddress'
		 
	  },
	  {
		  data:'serviceDescription'
		 
	  },
	  {
		  data:'contact'
		 
	  }
	  ,
	  {
		  
		  data:'lastModifiedDate'
		 
		 
	  }
	  ,
	  {
		  data:'id',
		  mRender:function(data){
			  				
			  var str='';
					
		
					if (userRole=='ADMIN') {
						
			  str+='<a href="/updateAddservice?id='+data+'" id="editTrauncate" class="btn btn-primary"><span class="glyphicon glyphicon-pencil"></span></a>';
			    
			  str+='<button id="editTrauncate" class="btn btn-primary tag_cnt btn btn-danger"  onclick="showServiceModal('+data+')" type="button" value="1"><span class="glyphicon glyphicon-trash"></span></button>';
				return str;
					}if (userRole=='USER') {
						  str+='<a href="/showUpdateWordByUser?id='+data+'" id="editTrauncate" class="btn btn-primary"><span class="glyphicon glyphicon-pencil"></span></a>';
				             
						return str;
					}
											
			  return str;
			
			  
		  }
		 
	  }
  ]
	
	
	
	
});
} 








//alert message
var alert=$('.alert');
if(alert.length){
	setTimeout(function(){
		
		alert.fadeOut("slow");
		
		
	},15000);
	
}

/*bootstrap modal*/
/*for tutor*/
function showServiceModal(data)
{
   //you can do anything with data, or pass more data to this function. i set this data to modal header for example
	 $('.serviceDeleteByAdmin').attr('href','/delete?id='+data);
	$("#myServiceModal .serviceDeleteId").html(data)
   $("#myServiceModal").modal();
}



