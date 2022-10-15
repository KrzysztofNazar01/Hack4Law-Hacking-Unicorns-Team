from django.forms import ModelForm

from django import forms
from .models import Question

class UploadForm(ModelForm):
    prosecutor_name = forms.CharField(label="małoletni: imię")
    prosecutor_surname = forms.CharField(label="małoletni: nazwisko")
    prosecutor_address = forms.CharField(label="małoletni: adres")
    prosecutor_pesel = forms.CharField(label="małoletni: pesel")
    prosecutor_parent_name = forms.CharField(label="rodzic: imię")
    prosecutor_parent_surname = forms.CharField(label="rodzic: nazwisko")
    prosecutor_parent_pesel = forms.CharField(label="rodzic: pesel")
    defendant_name = forms.CharField(label="pozwany: imię")
    defendant_surname = forms.CharField(label="pozwany: nazwisko")
    defendant_address = forms.CharField(label="pozwany: adres")
    file = forms.FileField()
    class Meta:
        model = Question
        fields = ['prosecutor_name',
                  'prosecutor_surname',
                  'prosecutor_address',
                  'prosecutor_pesel',
                  'prosecutor_parent_name',
                  'prosecutor_parent_surname',
                  'prosecutor_parent_pesel',
                  'defendant_name',
                  'defendant_surname',
                  'defendant_address',
                  'file'
                  ]

    def __init__(self, *args, **kwargs):
        super(UploadForm, self).__init__(*args, **kwargs)
        self.fields['prosecutor_name'].widget.attrs.update({'class': 'nameClass'})
        self.fields['file'].widget.attrs.update({'class': 'fileClass'})