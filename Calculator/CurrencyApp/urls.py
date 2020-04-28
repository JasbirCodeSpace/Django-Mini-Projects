from django.urls import path
from . import views

urlpatterns = [
	path('Currency',views.CurrencyHome,name='Currency'),
	path('CurrencyCalc',views.CurrencyCalc,name='CurrencyCalc')
]