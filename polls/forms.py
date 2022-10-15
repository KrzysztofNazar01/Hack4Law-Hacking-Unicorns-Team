from django.forms import ModelForm

from django import forms
from .models import Question


class UploadForm(ModelForm):
    id = forms.CharField(label="id")
    
    court_city = forms.CharField()
    court_department = forms.CharField()
    court_address = forms.CharField()
    
    prosecutor_name_surname = forms.CharField()
    prosecutor_address = forms.CharField()
    prosecutor_pesel = forms.CharField()
    prosecutor_parent_name_surname = forms.CharField()
    prosecutor_parent_pesel = forms.CharField()
    defendant_name_surname = forms.CharField()
    defendant_address = forms.CharField()

    wps = forms.CharField()

    lawsuit_1_defendant_name_and_surname = forms.CharField()
    lawsuit_1_prosecutor_name_and_surname = forms.CharField()
    lawsuit_1_prosecutor_birth = forms.CharField()
    lawsuit_1_alimony_date_end = forms.CharField()
    lawsuit_2_alimony_price = forms.CharField()
    lawsuit_2_alimony_date_end = forms.CharField()
    lawsuit_3_attachment_title = forms.CharField()  # ????
    lawsuit_4_other_details = forms.CharField()
    lawsuit_5_name_surname = forms.CharField()
    lawsuit_5_address = forms.CharField()
    lawsuit_6_field = forms.CharField()

    justification_parent_1 = forms.CharField()
    justification_parent_2 = forms.CharField()
    justification_birth_date = forms.CharField()
    justification_birth_address = forms.CharField()

    prosecutor_living_with = forms.CharField()

    living_cost_electricity = forms.CharField()
    living_cost_water_and_garbage = forms.CharField()
    living_cost_taxes = forms.CharField()
    living_cost_gas = forms.CharField()
    living_cost_heating = forms.CharField()

    livelihood_child_cost_food = forms.CharField()
    livelihood_child_cost_cosmetics = forms.CharField()
    livelihood_child_cost_clothes = forms.CharField()
    livelihood_child_cost_medicine = forms.CharField()
    livelihood_child_cost_doctors = forms.CharField()
    livelihood_child_cost_games = forms.CharField()
    livelihood_child_cost_leisure_activity = forms.CharField()
    livelihood_child_cost_holidays = forms.CharField()
    livelihood_child_cost_other = forms.CharField()

    accommodation_maintenance_cost = forms.CharField()

    other_needed_information = forms.CharField()
    
    attachment = forms.FileField()  # zip file is the best option

    class Meta:
        model = Question
        fields = ['id',

                  'court_city',
                  'court_department',
                  'court_address',

                  'prosecutor_name_surname',
                  'prosecutor_address',
                  'prosecutor_pesel',
                  'prosecutor_parent_name_surname',
                  'prosecutor_parent_pesel',
                  'defendant_name_surname',
                  'defendant_address',

                  'wps',
                  'lawsuit_1_defendant_name_and_surname',
                  'lawsuit_1_prosecutor_name_and_surname',
                  'lawsuit_1_prosecutor_birth',
                  'lawsuit_1_alimony_date_end',
                  'lawsuit_2_alimony_price',
                  'lawsuit_2_alimony_date_end',
                  'lawsuit_3_attachment_title',
                  'lawsuit_4_other_details',
                  'lawsuit_5_name_surname',
                  'lawsuit_5_address',
                  'lawsuit_6_field',

                  'justification_parent_1',
                  'justification_parent_2',
                  'justification_birth_date',
                  'justification_birth_address',

                  'prosecutor_living_with',

                  'living_cost_electricity',
                  'living_cost_water_and_garbage',
                  'living_cost_taxes',
                  'living_cost_gas',
                  'living_cost_heating',

                  'livelihood_child_cost_food',
                  'livelihood_child_cost_cosmetics',
                  'livelihood_child_cost_clothes',
                  'livelihood_child_cost_medicine',
                  'livelihood_child_cost_doctors',
                  'livelihood_child_cost_games',
                  'livelihood_child_cost_leisure_activity',
                  'livelihood_child_cost_holidays',
                  'livelihood_child_cost_other',
                  'accommodation_maintenance_cost',

                  'other_needed_information',

                  'attachment'
                  ]

# for styling
#     def __init__(self, *args, **kwargs):
#         super(UploadForm, self).__init__(*args, **kwargs)
#         self.fields['prosecutor_name'].widget.attrs.update({'class': 'nameClass'})
#         self.fields['file'].widget.attrs.update({'class': 'fileClass'})
