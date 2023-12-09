from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .utils import *

@api_view(["GET"])
def get_routes(request):
	routes = [
		{
			"Endpoint": "/",
			"Method": "GET",
			"Body": {},
			"Description": "Home page."
		},
		{
			"Endpoint": "/classrooms",
			"Method": "GET",
			"Body": {},
			"Description": "Classrooms dashboard."
		},
		{
			"Endpoint": "/signup/",
			"Method": "POST",
			"Body": {
				"username": "string",
				"password": "string",
				"email": "string"
			},
			"Description": "Register a new user with a username, password, and email."
		},
		{
			"Endpoint": "/login/",
			"Method": "POST",
			"Body": {
				"username": "string",
				"password": "string"
			},
			"Description": "Authenticate a user with a username and password."
		},
		{
			"Endpoint": "/classrooms/create/",
			"Method": "POST",
			"Body": {
				"grade_level": "string",
				"students": "Student",
				"course_name": "string",
				"student_score": "char"
			},
			"Description": "Create a class"
		},
		{
			"Endpoint": "/classrooms/:id/",
			"Method": "GET",
			"Body": {},
			"Description": "Retrieve details of a specific class using its ID."
		},
		{
			"Endpoint": "/classrooms/:id/",
			"Method": "POST",
			"Body": {
				"student_id": "integer"
			},
			"Description": "Add a new student to a class using the class ID."
		},
		{
			"Endpoint": "/classrooms/:id/",
			"Method": "PUT",
			"Body": {
				"feedback": "string"
			},
			"Description": "Give feedback to a class using the class ID."
		},
		{
			"Endpoint": "/classrooms/:id/",
			"Method": "PATCH",
			"Body": {
				"goal_updates": "object"
			},
			"Description": "Update every goal for a specific class using its ID."
		},
		{
			"Endpoint": "/profile/",
			"Method": "GET",
			"Body": {},
			"Description": "Retrieve the profile information of the authenticated user."
		},
		{
			"Endpoint": "/profile/",
			"Method": "PUT",
			"Body": {
				"name": "string",
				"bio": "string",
				"location": "string"
			},
			"Description": "Update a user's profile information."
		}
	]

	return Response(routes)

# Signup
@api_view(["POST"])
def sign_up_view(request):
	return sign_up(request)

# Login
@api_view(["POST"])
def login_view(request):
	return login(request)

# Get Classrooms
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def classrooms_view(request):
	return get_classrooms(request)

# Create Classroom
@api_view(["POST"])
def create_classroom_view(request):
    return create_classroom(request)

# Classroom Details
@api_view(["GET", "POST", "PUT", "PATCH"])
def classroom_view(request, pk):
	method = request.method

	if method == "GET":
		return get_classroom(request, pk)
	if method == "POST":
		return add_student(request, pk)
	if method == "PUT":
		return update_student(request, pk)
	if method == "PATCH":
		return update_goal(request, pk)

# User Profile
@api_view(["GET", "PUT"])
def update_profile_view(request):
	method = request.method

	if method == "GET":
		return get_user_profile(request)
	if method == "PUT":
		return update_user_profile(request)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
     serializer_class = MyTokenObtainPairSerializer