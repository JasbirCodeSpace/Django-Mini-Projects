from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def BMI(request):
	formData = request.POST
	print(formData)
	if not formData:
		return render(request,'index.html')
	else:
		BMI = 0
		Category = ""
		if formData['choice'] == 'english':
			weight = float(formData['weight_lbs']);
			height_ft = [int(s) for s in formData['height_ft'].split() if s.isdigit()][0]
			height_inch = [int(s) for s in formData['height_inch'].split() if s.isdigit()][0]
			height = float(height_ft) * 12 + float(height_inch);
			BMI = (weight / pow(height, 2)) * 703;
		else :
			weight = float(formData['weight_kg']);
			height = float(formData['height_cm']) / 100;
			BMI = (weight / pow(height, 2));
		if BMI < 18.5:
			Category = 'Underweight'

		elif BMI >= 18.5 and BMI <25:
	 		Category = 'Normal weight'

		elif BMI >= 25 and BMI <30:
			Category = 'Overweight'

		elif BMI >= 30:
	 		Category = 'Obese'

		return render(request,'index.html',{'BMI':format(BMI,'.2f'),'Category':Category})
