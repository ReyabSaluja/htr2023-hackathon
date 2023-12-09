from django.urls import path
from . import views
from .views import MyTokenObtainPairView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from .views import (
    sign_up_view,
    login_view,
    classrooms_view,
    create_classroom_view,
    classroom_view,
    update_profile_view
)

urlpatterns = [
	path("", view=views.get_routes, name="home"),

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
	
	path("sign-up/", view=views.sign_up_view, name="sign-up"),
	path("login/", view=views.login_view, name="login"),
	path("classrooms/", view=views.classrooms_view, name="classrooms"),
	path("classrooms/create/", view=views.create_classroom_view, name="create_classroom"),
	path("classrooms/<int:pk>/", view=views.classroom_view, name="classroom"),
	path('profile/', update_profile_view, name='profile'),
]