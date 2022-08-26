from django.db import models
from django.contrib.auth.models import User
class Profile(models.Model):
    user = models.OneToOneField(to=User, on_delete=models.CASCADE, related_name="user")
    location = models.CharField(max_length=200, blank=True, null=True)
    birthday = models.DateField(null=True, blank=True)
    about = models.TextField(null=True, blank=True, max_length=500)
    website_url = models.URLField(null=True, blank=True, max_length=500)
    github_url = models.URLField(null=True, blank=True, max_length=500)
    avatar = models.ImageField( default="no-image.png", blank=True, null=True, upload_to="users/")
    joined_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"