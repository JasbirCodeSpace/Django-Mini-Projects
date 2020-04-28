from django.urls import path
from . import views

urlpatterns = [
	path('',views.SimpleMail,name=""),
	path('getContacts',views.getContacts,name="getContacts"),
	path('SendMail',views.SendSimpleEmail,name="Mail"),
]