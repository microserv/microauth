from django.core.urlresolvers import reverse
from django.test import TestCase


class HTTPGetRootTestCase(TestCase):
    def setUp(self):
        pass

    def test_get_root_expect_http_200(self):
        url = reverse('microauth_authentication:index')
        response = self.client.get(url)
        self.assertEqual(200, response.status_code, 'Expect root view to load without issues.')
