from django.db import models

# Create your models here.
from django.db import models
from django.forms import ModelForm, forms

from django.db import models

class Question(models.Model):
    id = models.CharField(max_length=50, default="", primary_key=True)

    court_city = models.CharField(max_length=50, default="")
    court_department = models.CharField(max_length=50, default="")
    court_address = models.CharField(max_length=50, default="")

    prosecutor_name_surname = models.CharField(max_length=50, default="")
    prosecutor_address = models.CharField(max_length=50, default="")
    prosecutor_pesel = models.CharField(max_length=50, default="")
    prosecutor_parent_name = models.CharField(max_length=50, default="")
    prosecutor_parent_surname = models.CharField(max_length=50, default="")
    prosecutor_parent_pesel = models.CharField(max_length=50, default="")

    defendant_name_surname = models.CharField(max_length=50, default="")
    defendant_address = models.CharField(max_length=50, default="")

    wps = models.CharField(max_length=50, default="")

    lawsuit_1_defendant_name_and_surname = models.CharField(max_length=50, default="")
    lawsuit_1_prosecutor_name_and_surname = models.CharField(max_length=50, default="")
    lawsuit_1_prosecutor_birth = models.CharField(max_length=50, default="")
    lawsuit_1_prosecutor_price = models.CharField(max_length=50, default="")
    lawsuit_1_alimony_date_end = models.CharField(max_length=50, default="")
    lawsuit_2_alimony_price = models.CharField(max_length=50, default="")
    lawsuit_2_alimony_date_end = models.CharField(max_length=50, default="")
    lawsuit_3_attachment_title = models.CharField(max_length=50, default="")  # ????
    lawsuit_4_other_details = models.CharField(max_length=100, default="")
    lawsuit_5_name = models.CharField(max_length=50, default="")
    lawsuit_5_surname = models.CharField(max_length=50, default="")
    lawsuit_5_address = models.CharField(max_length=50, default="")
    lawsuit_6_field = models.CharField(max_length=50, default="")

    justification_parent_1 = models.CharField(max_length=50, default="")
    justification_parent_2 = models.CharField(max_length=50, default="")
    justification_birth_date = models.CharField(max_length=50, default="")
    justification_birth_address = models.CharField(max_length=50, default="")

    prosecutor_living_with = models.CharField(max_length=50, default="")

    living_cost_electricity = models.CharField(max_length=50, default="")
    living_cost_water_and_garbage = models.CharField(max_length=50, default="")
    living_cost_taxes = models.CharField(max_length=50, default="")
    living_cost_gas = models.CharField(max_length=50, default="")
    living_cost_heating = models.CharField(max_length=50, default="")

    livelihood_child_cost_food = models.CharField(max_length=50, default="")
    livelihood_child_cost_cosmetics = models.CharField(max_length=50, default="")
    livelihood_child_cost_clothes = models.CharField(max_length=50, default="")
    livelihood_child_cost_medicine = models.CharField(max_length=50, default="")
    livelihood_child_cost_doctors = models.CharField(max_length=50, default="")
    livelihood_child_cost_games = models.CharField(max_length=50, default="")
    livelihood_child_cost_leisure_activity = models.CharField(max_length=50, default="")
    livelihood_child_cost_holidays = models.CharField(max_length=50, default="")
    livelihood_child_cost_other = models.CharField(max_length=50, default="")

    accommodation_maintenance_cost = models.CharField(max_length=50, default="")

    other_needed_information = models.CharField(max_length=200, default="")

    attachment = models.FileField(upload_to='polls/files', default="")  # zip file is the best option

# class User(models.Model):
#     name = models.CharField(max_length=50)
#     email = models.CharField(max_length=50)
