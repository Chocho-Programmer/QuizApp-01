from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.QuizHome.as_view(), name="home"),
    path('quizselect/', views.QuizSelect.as_view(), name="quizselect"),
    path('quiz/', views.Quiz.as_view(), name="quiz"),
    path('settings/', views.QuizSettings.as_view(), name="settings"),
    path('about/', views.QuizAbout.as_view(), name="about"),
    path('notification/', views.QuizNotification.as_view(), name="notification"),

]