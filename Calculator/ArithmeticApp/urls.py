from django.urls import path
from . import views

urlpatterns = [
	path('',views.home,name=''),
	path('ArithmeticCalc',views.Arithmetic,name='ArithmeticCalc')

]