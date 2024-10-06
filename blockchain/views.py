from django.shortcuts import render
from django.http import JsonResponse, HttpResponse

# Create your views here.
def say_hello(request):
    # Check if the request method is GET
    if request.method == 'GET':
        message = {
            "message": "Hello World"
        }
        # Return the JSON response
        return JsonResponse(message)
    else:
        return JsonResponse({"error": "Invalid request method."}, status=400)
    # return HttpResponse("Hello")
