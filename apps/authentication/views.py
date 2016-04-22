# from django.shortcuts import render

# Create your views here.
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
@login_required()
def verify(request, *args, **kwargs):
    return JsonResponse({'msg': 'kek'})
