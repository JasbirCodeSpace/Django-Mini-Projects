from django.urls import path
from . import views

urlpatterns = [
	path('Arithmetic',views.ArithmeticHome,name='Arithmetic'),
	path('ArithmeticCalc',views.Arithmetic,name='ArithmeticCalc')

]