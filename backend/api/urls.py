from django.urls import path
from . import views


urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('cassette/', views.getCassettes, name="cassettes"),
    path('cassette/<str:pk>', views.getCassette, name="cassette"),
    path('movie/', views.getMovies, name="movies"),
    path('movie/<str:pk>', views.getMovie, name="movie"),
    path('rent/', views.rentMovie, name="rent"),
    path('return/', views.returnMovie, name="return"),
]