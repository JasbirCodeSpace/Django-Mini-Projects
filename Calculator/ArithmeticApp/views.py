from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def Arithmetic(request):
	input1 = int(request.POST['input1'])
	input2 = int(request.POST['input2'])
	opeartor = int(request.POST['opeartor'])
	return format(eval(input1+opeartor+input2),'.2f')
def home(request):
	return render(request,'index.html')
