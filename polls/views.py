from urllib import request

from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import redirect


def index(request):
    return HttpResponse("glowna strona")


def home(request):
    return render(request, "alimony_view_1.html")


from .forms import UploadForm


def form(request):
    if request.POST:
        form = UploadForm(request.POST, request.FILES)
        print(request.FILES['attachment'])
        if form.is_valid():
            form.save()
            return redirect(home)
    return render(request, 'upload.html', {'form': UploadForm})


import json
from django.core import serializers
from .models import Question


def details(request, id):
    obj = Question.objects.get(pk=id)
    data = serializers.serialize('json', [obj, ])
    struct = json.loads(data)
    data = json.dumps(struct[0])
    return HttpResponse(data, content_type='application/json')
