from rest_framework.permissions import BasePermission


class AllowAnyCreateAllowSelfUpdate(BasePermission):

    def has_object_permission(self, request, view, obj):
        if not request.user.is_authenticated():
            return False
        if not obj.id:
            return True

        try:
            return request.user == obj.user
        except AttributeError:
            # Newly created users where obj actually is user
            return request.user == obj
