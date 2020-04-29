from django.urls import path
from . import views

urlpatterns = [
	path('',views.SimpleMail,name=""),
	path('SimpleMail',views.SimpleMail,name="SimpleMail"),
	path('getContacts',views.getContacts,name="getContacts"),
	path('SendMail',views.SendEmail,name="SendMail"),
	path('BulkMail',views.BulkMail,name="BulkMail")
]