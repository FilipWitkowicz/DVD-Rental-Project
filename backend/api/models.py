from django.db import models
# from django.contrib.auth.models import AbstractUser


# Create your models here.

# class User(AbstractUser):
#     name = models.CharField(max_length=200, null=True)
#     email = models.EmailField(unique=True, null=True)


class Movie(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    publish_date = models.IntegerField()


class Cassette(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    if_rented = models.BooleanField(default=False)
    # renter = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
