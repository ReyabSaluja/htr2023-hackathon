from rest_framework import serializers
from .models import CustomFeedback, Teacher, Student, Classroom, StudentClassroom, StudentFeedback

class CustomFeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomFeedback
        fields = '__all__'

class TeacherSerializer(serializers.ModelSerializer):
    feedbacks = CustomFeedbackSerializer(many=True)

    class Meta:
        model = Teacher
        fields = '__all__'

class StudentSerializer(serializers.ModelSerializer):
    received_feedback = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Student
        fields = '__all__'

class ClassroomSerializer(serializers.ModelSerializer):
    students = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Classroom
        fields = '__all__'

class StudentClassroomSerializer(serializers.ModelSerializer):
    student = StudentSerializer()

    class Meta:
        model = StudentClassroom
        fields = '__all__'

class StudentFeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentFeedback
        fields = '__all__'
