$(document).ready(function() {
	//console.log(all_hotels);
	//add();
	var page1Html = '<div id="pushContent"><ul id="hotel-ul">My Hotel<li></li></ul><ul id="rest-ul">My restaurants</ul><ul id="things-ul">My Things To Do</ul></div>';
	$('#itny').html(page1Html);
	var count = 0;
	var $itineraryArr = [page1Html,page1Html,page1Html];
	$('#add').on("click",function(){
		//add();
		count++;
		if(count === 3) return;
		if (count ===1)	$('#day2').show();
		if (count===2) $('#day3').show();
	});

	$('.day-btn').on("click",function(){
		//console.log($(this).val());
		if($(this).val() === "1") {
			$("#day-title span").text('Day 1');
			$('#itny div').replaceWith($itineraryArr[0]);

			$("#day3").removeClass("current-day");
			$("#day2").removeClass("current-day");
			$("#day1").addClass("current-day");

		} else if ($(this).val() ==="2") {
			$("#day-title span").text('Day 2');
			$('#itny div').replaceWith($itineraryArr[1]);


			$("#day3").removeClass("current-day");
			$("#day2").addClass("current-day");
			$("#day1").removeClass("current-day");
			



		} else if ($(this).val() ==="3"){
			$("#day-title span").text('Day 3');
			$('#itny div').replaceWith($itineraryArr[2]);

			$("#day3").addClass("current-day");
			$("#day2").removeClass("current-day");
			$("#day1").removeClass("current-day");
		}
	});

	$('.remove').on("click", function(){
		if ($("#day-title span").text() === 'Day 3'){
			$('#day3').hide();
			$("#day-title span").text('Day 2');
			count = 1;



			$('#itny div').replaceWith($itineraryArr[2]);



		}else if ($("#day-title span").text() === 'Day 2'){
			$('#day2').hide();
			$("#day-title span").text('Day 1');
			count = 0;

			$('#itny div').replaceWith($itineraryArr[1]);

			
		}
	});
	$('#hotel-btn').on("click", function(){
		var $hotelVal = $('#hotel').val();
		$hotelVal = '<li>'+$hotelVal+'<button class="btn btn-xs btn-danger remove btn-circle delete">x</button></li>';
		
		
		


		$('#hotel-ul li').replaceWith($hotelVal);

		pushContent($itineraryArr);
	})

	$('#rest-btn').on("click", function(){
		var $restaurantVal = $('#restaurants').val();

		var $isIn = false;
		$('#itny').find('li').each(function(key, element){
			console.log('ARE WE IN?', element.innerHTML)
			if($(element).text()===$restaurantVal){
				 $isIn = true;
				 alert('You already added that restaurant');
			}

		});
		if(!$isIn){

			


			$restaurantVal = $('#restaurants').val();
			$restaurantVal = '<li>'+$restaurantVal+'<button class="btn btn-xs btn-danger remove btn-circle delete">x</button></li>';
			$('#rest-ul').append($restaurantVal);

			pushContent($itineraryArr);
		}


	});

		$('#things-btn').on("click", function(){
		var $thingsVal = $('#things').val();

		var $isIn = false;
		$('#itny').find('li').each(function(key, element){
			console.log('ARE WE IN?', element.innerHTML)
			if($(element).text()===$thingsVal){
				 $isIn = true;
				 alert('You are already doing that');
			}

		});
		if(!$isIn){
			$thingsVal = $('#things').val();
			$thingsVal = '<li>'+$thingsVal+'<button class="btn btn-xs btn-danger remove btn-circle delete">x</button></li>';

			$('#things-ul').append($thingsVal);

			pushContent($itineraryArr);
		}


	});
		$("ul").on("click", ".delete", function(){
			console.log('the parent', $(this).parent());
			$(this).parent().remove();
		});
	
		
});

function pushContent(arr){
	if ($("#day-title span").text() === 'Day 1')
			arr[0] = $('#itny').html();
		else if ($("#day-title span").text() === 'Day 2')
			arr[1] = $('#itny').html();
		else if ($("#day-title span").text() === 'Day 3')
			arr[2] = $('#itny').html();

		console.log(arr[2]);
}

// function add(){
// 	$('#itny').html('<ul>My Hotel</ul><ul>My restaurants</ul><ul>My Things To Do</ul>');
// }