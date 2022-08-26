from django.contrib import admin
from django.urls import path, re_path
from accounts.views import get_profile
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/users/(?P<id>[0-9]+)$', get_profile)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
