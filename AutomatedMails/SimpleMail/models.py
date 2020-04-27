from django.db import models

# Create your models here.


class ContactDetail(models.Model):
	Name =  models.CharField(max_length=100)
	EmailId = models.EmailField()

		