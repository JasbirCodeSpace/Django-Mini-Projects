from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def CurrencyHome(request):
	render(request,'Currency.html')

def CurrencyCalc(request):
	return HttpResponse(2)

