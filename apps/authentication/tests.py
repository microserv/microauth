from django.conf import settings
from django.core.urlresolvers import reverse
from django.test import TestCase
from django.test.utils import override_settings


class HTTPGetRootTestCase(TestCase):
    def setUp(self):
        pass

    def test_get_root_expect_http_200(self):
        pipeline_settings = settings.PIPELINE
        pipeline_settings['PIPELINE_ENABLED'] = False
        with override_settings(PIPELINE_SETTINGS=pipeline_settings):
            url = reverse('microauth_authentication:index')
            response = self.client.get(url)
            self.assertEqual(200, response.status_code, 'Expect root view to load without issues.')
