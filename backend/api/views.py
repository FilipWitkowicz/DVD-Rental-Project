from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import CassetteSerializer, MovieSerializer
from .models import Cassette, Movie, Event
from django.contrib.auth.models import User
import json


@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/',
            'method': 'GET',
            'body': None,
            'description': ''
        },
    ]
    return Response(routes)


@api_view(['GET'])
def getCassettes(request):
    notes = Cassette.objects.all()
    serializer = CassetteSerializer(notes, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
def getCassette(request, pk):
    note = Cassette.objects.get(id=pk)
    serializer = CassetteSerializer(note, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getMovies(request):
    notes = Movie.objects.all()
    serializer = MovieSerializer(notes, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
def getMovie(request, pk):
    note = Movie.objects.get(id=pk)
    serializer = MovieSerializer(note, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def rentMovie(request):
    info = json.loads(request.body.decode("utf-8"))
    # { 'user_id': 1, 'cassette_id': 1 }
    user = User.objects.get(id=info['user_id'])
    cassette = Cassette.objects.get(id=info['cassette_id'])
    cassette.status = 2
    cassette.renter = user
    cassette.save()
    event = Event.objects.create(
        status=2,
        cassette=cassette,
        renter=user
    )
    event.save()

    return Response(
        status=200,
        content=bytes('{"status": "%s"}'
        % ("Movie rented successfully"),'UTF-8'),
        content_type="application/json",
    )

@api_view(['POST'])
def returnMovie(request):
    info = json.loads(request.body.decode("utf-8"))
    # { 'user_id': 1, 'cassette_id': 1 }
    user = User.objects.get(id=info['user_id'])
    cassette = Cassette.objects.get(id=info['cassette_id'])
    cassette.status = 1
    cassette.renter = None
    cassette.save()
    event = Event.objects.create(
        status=1,
        cassette=cassette,
        renter=user
    )
    event.save()

    return Response(
        status=200,
        content=bytes('{"status": "%s"}'
        % ("Movie returned successfully"),'UTF-8'),
        content_type="application/json",
    )


