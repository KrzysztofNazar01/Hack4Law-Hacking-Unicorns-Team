from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('alimony', views.alimony, name='alimony'), # alimenty

]



