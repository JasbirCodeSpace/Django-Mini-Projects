$(document).ready(function () {
	$('#age').attr('required', 'required');
	$('#height_ft').attr('required', 'required');
	$('#height_inch').attr('required', 'required');
	$('#weight_lbs').attr('required', 'required');
	$('#height_cm').removeAttr("required");
	$('#weight_kg').removeAttr("required");
	$('#choice').change(function () {
		$choice = $(this).val();
		if ($choice == "english") {
			$('.height_ft').show('fast');
			$('.height_cm').hide('fast');
			$('.weight_lbs').show('fast');
			$('.weight_kg').hide('fast');

			$('#height_ft').attr('required', 'required');
			$('#height_inch').attr('required', 'required');
			$('#weight_lbs').attr('required', 'required');
			$('#height_cm').removeAttr("required");
			$('#weight_kg').removeAttr("required");
		} else if ($choice == "metric") {
			$('.height_ft').hide('fast');
			$('.height_cm').show('fast');
			$('.weight_lbs').hide('fast');
			$('.weight_kg').show('fast');
			$('#weight_kg').attr('required', 'required');
			$('#height_cm').attr('required', 'required');
			$('#height_ft').removeAttr("required");
			$('#height_inch').removeAttr("required");
			$('#weight_lbs').removeAttr("required");
		}
	})

	// $("form").submit(function (e) {
	// 	e.preventDefault();
	// 	var BMI = 0;
	// 	var formData = $('form').serializeArray();
	// 	var data = [];
	// 	$.each(formData, function () {
	// 		data[this.name] = this.value;
	// 	});

	// 	if (data['choice'] == "english") {
	// 		let weight = parseFloat(data['weight_lbs']);
	// 		let height = parseFloat(data['height_ft']) * 12 + parseFloat(data['height_inch']);
	// 		BMI = (weight / Math.pow(height, 2)) * 703;

	// 	} else if (data['choice'] == "metric") {
	// 		let weight = parseFloat(data['weight_kg']);
	// 		let height = parseFloat(data['height_cm'] / 100);
	// 		BMI = (weight / Math.pow(height, 2));

	// 	}
	// 	if (BMI < 18.5) {
	// 		$('#category').html('Underweight')

	// 	} else if (BMI >= 18.5 && BMI <=24.9) {
	// 		$('#category').html('Normal weight')

	// 	} else if (BMI >= 25 && BMI <= 29.9) {
	// 		$('#category').html('Overweight')

	// 	} else if (BMI >= 30) {
	// 		console.log(BMI)
	// 		$('#category').html('Obese')

	// 	}
	// 	$('#result').html(BMI.toFixed(2));
	// 	$('.result').show();


	// });


})