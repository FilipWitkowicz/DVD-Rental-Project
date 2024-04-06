from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import CassetteSerializer, MovieSerializer
from .models import Cassette, Movie


@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
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


# @api_view(['GET'])
# def getUsers(request):
#     notes = User.objects.all()
#     serializer = UserSerializer(notes, many=True)
#     return Response(serializer.data)
#
#
# @api_view(['GET', 'POST'])
# def getUser(request, pk):
#     note = User.objects.get(id=pk)
#     serializer = UserSerializer(note, many=False)
#     return Response(serializer.data)
