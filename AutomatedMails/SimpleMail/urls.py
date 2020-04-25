from django.urls import path
from . import views

urlpatterns = [
	path('',views.SimpleMail,name=""),
	path('SendMail',views.SendSimpleEmail,name="Mail"),
]