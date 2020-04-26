from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def Arithmetic(request):
	input1 = request.POST['input1']
	input2 = request.POST['input2']
	oper = request.POST['oper']
	print(request.POST)
	return HttpResponse(format(eval(input1+oper+input2),'.2f'))
def ArithmeticHome(request):
	return render(request,'Arithmetic.html')
