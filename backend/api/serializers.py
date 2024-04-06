from rest_framework.serializers import ModelSerializer
from .models import Cassette, Movie


class CassetteSerializer(ModelSerializer):
    class Meta:
        model = Cassette
        fields = '__all__'

class MovieSerializer(ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'

# class UserSerializer(ModelSerializer):
#     class Meta:
#         model = User
#         fields = '__all__'