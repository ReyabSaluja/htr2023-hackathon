from rest_framework import status
from rest_framework.response import Response

from .models import Classroom, StudentClassroom
from .serializers import ClassroomSerializer, StudentClassroomSerializer

# Placeholder functions
def sign_up(request):
    return Response("Hello from Signup Page")

def login(request):
    return Response("Hello from Account Creation")

def get_classrooms(request):
	user = request.user
	classrooms = Classroom.objects.filter(teacher=user.teacher)
	serializer = ClassroomSerializer(classrooms, many=True)
	
	return Response(serializer.data, status=status.HTTP_200_OK)

def create_classroom(request):
    return Response(f"Create class")

def get_classroom(request, pk):
	user = request.user
	classroom = Classroom.objects.filter(teacher=user.teacher).get(id=pk)

	serializer = ClassroomSerializer(classroom, many=False)
	students_classroom_serializer = StudentClassroomSerializer(StudentClassroom.objects.filter(classroom=classroom), many=True)

	response_data = {
		'classroom': serializer.data,
		'students_classroom': students_classroom_serializer.data,
	}

	# Return the combined data in a JSON response
	return Response(response_data, status=status.HTTP_200_OK)

def add_student(request, id):
    return Response(f"Hello from Add Student to Class {id}")

def update_student(request, id):
    return Response(f"Hello from Give Feedback to Class {id}")

def update_goal(request, id):
    return Response(f"Hello from Update Class Goals for {id}")

def get_user_profile(request):
    return Response("Hello from User Profile")

def update_user_profile(request):
    return Response("Hello from Update User Profile")