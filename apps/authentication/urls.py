from django.conf.urls import url
from django.views.generic import TemplateView

from apps.authentication.views import verify

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='authentication/index.html'), name='index'),
    url(r'verify/$', verify, name='token-verify')
]
