import sys
from urllib import request
import json
from django.core.management import call_command
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
    try:
        obj = Question.objects.get(pk=id)
        data = serializers.serialize('json', [obj, ])
        struct = json.loads(data)
        data = json.dumps(struct[0])
        return HttpResponse(data, content_type='application/json')
    except:
        struct = {"error_message": "wrong form id"}
        data = json.dumps(struct)
        return HttpResponse(data, content_type='application/json')


def courtsInfo(request):
    f = open('courtsInfo.json')
    struct = json.load(f)
    courtsJson = json.dumps(struct)
    return HttpResponse(courtsJson, content_type='application/json')
