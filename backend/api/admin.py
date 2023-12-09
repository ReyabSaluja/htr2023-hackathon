from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from .models import *

# Register your models here.

# Define an inline admin descriptor for Teacher model
# Allows edits to the model on the same page as a parent model
class UserProfileInline(admin.StackedInline):
    model = Teacher
    can_delete = False

# Define a new User admin
class UserAdmin(BaseUserAdmin):
    inlines = [UserProfileInline]

# Re-register UserAdmin
admin.site.unregister(User)
admin.site.register(User, UserAdmin)

# Register all models
admin.site.register(CustomFeedback)
admin.site.register(StudentFeedback)
admin.site.register(Teacher)
admin.site.register(Classroom)
admin.site.register(Student)
admin.site.register(StudentClassroom)
