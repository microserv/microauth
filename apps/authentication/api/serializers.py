from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    email = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True)

    class Meta(object):
        model = User
        fields = ('username', 'email', 'password', 'first_name', 'last_name', 'get_full_name')
