from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.core.mail import send_mail
import sys
# Create your views here.

def SimpleMail(request):
	return render(request,'index.html')

def SendSimpleEmail(request):
	param = request.POST
	print(param)
	if not param:
		return JsonResponse({'status':0})
	try:
		response = send_mail(param['subject'],param['message'],"shikhawat.jasbir@gmail.com",[param['email']])
		print(response)
		return JsonResponse({'status':response})
	except:
		print(sys.exc_info()[0])
		return JsonResponse({'status':-1})
