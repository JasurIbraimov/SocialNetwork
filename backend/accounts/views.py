from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Profile
from .serializers import *

@api_view(['GET'])
def get_profile(request, id):
    if request.method == 'GET':
        profile = Profile.objects.get(id=id)
        serializer = ProfileSerializer(profile, context={'request': request})
        return Response({'data': serializer.data })