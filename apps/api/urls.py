from rest_framework.routers import DefaultRouter

from apps.authentication.api import views as authentication_views

router = DefaultRouter()

router.register(r'users', authentication_views.UserViewSet)

urlpatterns = router.urls + []
