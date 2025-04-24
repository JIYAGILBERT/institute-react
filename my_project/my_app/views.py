from django.shortcuts import render
from.models import course
from.serializers import courseSerializer
from rest_framework import viewsets

# Create your views here.

class courseViewset(viewsets.ModelViewSet):
    queryset=course.objects.all()
    serializer_class=courseSerializer
