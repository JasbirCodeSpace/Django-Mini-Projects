from django.urls import path

urlpatterns = [
	path('SimpleMail',views.SendSimpleEmail,name="Mail"),
]