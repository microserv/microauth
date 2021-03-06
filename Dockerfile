FROM 128.no:8080/backend-comm
MAINTAINER Pål Karlsrud <paal@128.no>

ENV BASE_DIR /var/microauth

RUN apk-install python3 nodejs nginx
RUN git clone https://github.com/microserv/microauth ${BASE_DIR}

RUN cp ${BASE_DIR}/microauth.ini /etc/supervisor.d/
RUN curl -o /etc/supervisor.d/nginx.ini https://128.no/f/nginx.ini

RUN cp ${BASE_DIR}/microauth.conf /etc/nginx/conf.d/
RUN curl -o /etc/nginx/nginx.conf https://128.no/f/nginx.conf

WORKDIR ${BASE_DIR}
RUN npm install .
RUN virtualenv -p python3 /var/microauth/venv
ENV PATH ${BASE_DIR}/venv/bin:$PATH

RUN pip install -r requirements.txt
RUN pip install gunicorn
RUN python manage.py migrate

WORKDIR ${BASE_DIR}/apps/authentication/static/js/
RUN npm install .

ENV PATH ${BASE_DIR}/node_modules/.bin:$PATH
ENV PATH ${BASE_DIR}/apps/authentication/static/js/node_modules/.bin:$PATH

ENV SERVICE_NAME microauth

WORKDIR ${BASE_DIR}
RUN python manage.py collectstatic --noinput
RUN echo "from django.contrib.auth.models import User; User.objects.create_superuser('admin', 'myemail@example.com', 'aStupidDefaultPasswordYouShouldChange')" | python manage.py shell
RUN echo "from oauth2_provider.models import Application; Application(1, '7ejsN0VfIW1QxYal0fnD74WWU5jOVSRtfI5MSmE9', 1, 'https://despina.128.no/connect/microauth/callback', 'public', 'authorization-code', 'UmaQLODH2DLwpebEn5s0eTmrf5xOcdH5ZgG0lYGrUk2AlcQQEP3uK8QZRyyxqKUxNAh7HNhna1FXCer2ltTzUxkOqSGt11Y7S69gPwlgqLPK4DgcBJHlQuj8ObIyYFsm', 'Publishing', False).save()" | python manage.py shell
EXPOSE 80
