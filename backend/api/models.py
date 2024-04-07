from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Statuses(models.IntegerChoices):
        RETURNED = 1, "RETURNED"
        RENTED = 2, "RENTED"

class Movie(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    publish_date = models.IntegerField()


class Cassette(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    status = models.IntegerField(choices=Statuses.choices)
    renter = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)

class Event(models.Model):
    status = models.IntegerField(choices=Statuses.choices)
    time = models.DateTimeField(auto_now_add=True, db_index=True)
    cassette = models.ForeignKey(Cassette, on_delete=models.SET_NULL, blank=True, null=True)
    renter = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)