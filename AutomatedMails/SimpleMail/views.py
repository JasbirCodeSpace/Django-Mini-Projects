from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.core.mail import send_mail
import sys
from .models import ContactDetail
from django.core import serializers
# Create your views here.

def SimpleMail(request):
	return render(request,'index.html')

def getContacts(request):
	contacts = ContactDetail.objects.all()
	json = serializers.serialize('json', contacts)
	return HttpResponse(json, content_type='application/json')


def SendSimpleEmail(request):
	param = request.POST
	if not param:
		return JsonResponse({'status':0})
	try:
		if not param['email']:
			response = send_mail(param['subject'],param['message'],"shikhawat.jasbir@gmail.com",[])
			return JsonResponse({'status':response})	
		else:
			
			response = send_mail(param['subject'],param['message'],"shikhawat.jasbir@gmail.com",[param['email']])
			return JsonResponse({'status':response})
	except:
		print(sys.exc_info()[0])
		return JsonResponse({'status':-1})
