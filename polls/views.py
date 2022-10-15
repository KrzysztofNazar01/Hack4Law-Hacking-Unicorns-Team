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
        print(request.FILES['file'])
        if form.is_valid():
            form.save()
            return redirect(home)
    return render(request, 'upload.html', {'form': UploadForm})
