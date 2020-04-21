from django.urls import path
from . import views

urlpatterns = [
	path('',views.BMI,name="BMI")
]