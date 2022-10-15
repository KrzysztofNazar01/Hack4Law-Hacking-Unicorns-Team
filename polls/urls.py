from django.urls import path

from . import views



urlpatterns = [
    path('', views.home, name='home'),
    path('form/', views.form, name='upload'),
    path('form/<str:id>/', views.details, name='details'),
    path('courtsinfo', views.courtsInfo, name='courtsinfo'),
]

