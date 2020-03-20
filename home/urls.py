from django.urls import path
from home.views import homeView

urlpatterns = [
    path('', homeView)
]