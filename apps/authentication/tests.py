from unittest import skip

from django.conf import settings
from django.core.urlresolvers import reverse
from django.test import TestCase
from django.test.utils import override_settings
from rest_framework.test import APITestCase


class HTTPGetRootTestCase(TestCase):
    def setUp(self):
        pass

    @skip  # Skip until fixed PIPELINE test working properly
    def test_get_root_expect_http_200(self):
        pipeline_settings = settings.PIPELINE
        pipeline_settings['PIPELINE_ENABLED'] = False
        with override_settings(PIPELINE_SETTINGS=pipeline_settings):
            url = reverse('microauth_authentication:index')
            response = self.client.get(url)
            self.assertEqual(200, response.status_code, 'Expect root view to load without issues.')


class APIGetRootTestCase(APITestCase):
    def setUp(self):
        pass

    def test_get_api_user_list_expect_http_200(self):
        url = reverse('microauth_api:user-list')
        response = self.client.get(url)

        self.assertEqual(200, response.status_code)
