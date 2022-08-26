from django.contrib import admin
from django.urls import path, re_path
from accounts.views import get_profile
urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/users/(?P<id>[0-9]+)$', get_profile)
]
