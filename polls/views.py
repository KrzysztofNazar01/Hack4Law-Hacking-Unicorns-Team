from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse


def index(request):
    return HttpResponse("glowna strona")


def alimony(request):
    return render(request, "alimony_view_1.html")
