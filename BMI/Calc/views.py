from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def BMI(request):
	formData = request.POST
	if not formData:
		return render(request,'index.html')
	else:
		return render(request,'index.html')
