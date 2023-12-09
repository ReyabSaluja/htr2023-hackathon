from django.db import models
from django.contrib.auth.models import User

class FeedbackChoices(models.IntegerChoices):
    NEEDS_IMPROVEMENTS = -2
    SATISFACTORY = -1
    GOOD = 1
    EXCELLENT = 2

GRADE_CHOICES = (
    ('JK', 'Junior Kindergarten'),
    ('SK', 'Senior Kindergarten'),
    ('1', 'Grade 1'),
    ('2', 'Grade 2'),
    ('3', 'Grade 3'),
    ('4', 'Grade 4'),
    ('5', 'Grade 5'),
    ('6', 'Grade 6'),
    ('7', 'Grade 7'),
    ('8', 'Grade 8'),
    ('9', 'Grade 9'),
    ('10', 'Grade 10'),
    ('11', 'Grade 11'),
    ('12', 'Grade 12'),
)

REPORT_FREQUENCY_CHOICES = (
    ("D", "Daily"),
    ("W", "Weekly"),
    ("M", "Monthly"),
)

class CustomFeedback(models.Model):
    name = models.CharField(max_length=40)
    value = models.IntegerField(choices=FeedbackChoices.choices)

class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    instant_alert = models.BooleanField()
    report_frequency = models.CharField(choices=REPORT_FREQUENCY_CHOICES, max_length=1)
    feedbacks = models.ManyToManyField(CustomFeedback)

class Student(models.Model):
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=60)
    grade_level = models.CharField(choices=GRADE_CHOICES, max_length=2)
    parent_first_name = models.CharField(max_length=40)
    parent_last_name = models.CharField(max_length=60)
    parent_email = models.EmailField()

    received_feedback = models.ManyToManyField('StudentFeedback', blank=True)

class Classroom(models.Model):
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    grade_level = models.CharField(choices=GRADE_CHOICES, max_length=2)
    students = models.ManyToManyField(Student, through='StudentClassroom')
    course_name = models.CharField(max_length=100)
    
    def get_students(self):
        return self.students.all()

class StudentClassroom(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    classroom = models.ForeignKey(Classroom, on_delete=models.CASCADE)
    score = models.IntegerField()

class StudentFeedback(models.Model):
    name = models.CharField(max_length=20)
    date = models.DateField(auto_now_add=True)
    value = models.IntegerField(choices=FeedbackChoices.choices)