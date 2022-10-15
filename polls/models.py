from django.db import models

# Create your models here.
from django.db import models
from django.forms import ModelForm, forms

from django.db import models

class Question(models.Model):
    name = models.CharField(max_length=50, default="")
    file = models.FileField(upload_to='polls/files')
    prosecutor_name = models.CharField(max_length=50, default="")
    prosecutor_surname = models.CharField(max_length=50, default="")
    prosecutor_address = models.CharField(max_length=50, default="")
    prosecutor_pesel = models.CharField(max_length=50, default="")
    prosecutor_parent_name = models.CharField(max_length=50, default="")
    prosecutor_parent_surname = models.CharField(max_length=50, default="")
    prosecutor_parent_pesel = models.CharField(max_length=50, default="")
    defendant_name = models.CharField(max_length=50, default="")
    defendant_surname = models.CharField(max_length=50, default="")
    defendant_address = models.CharField(max_length=50, default="")

