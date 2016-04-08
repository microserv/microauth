FROM backend-comm
MAINTAINER Pål Karlsrud <paal@128.no>

RUN apk-install python3 nodejs nginx
RUN git clone https://github.com/microserv/microauth /var/microauth

RUN cp /var/microauth/microauth.ini /etc/supervisor.d/
RUN curl -o /etc/supervisor.d/nginx.ini https://128.no/f/nginx.ini

RUN cp /var/microauth/microauth.conf /etc/nginx/conf.d/
RUN curl -o /etc/nginx/nginx.conf https://128.no/f/nginx.conf

WORKDIR /var/microauth
RUN npm install .
RUN virtualenv -p python3 /var/microauth/venv
ENV PATH /var/microauth/venv/bin:$PATH

RUN pip install -r requirements.txt
RUN pip install gunicorn
RUN python manage.py migrate

WORKDIR /var/microauth/apps/authentication/static/js/
RUN npm install .

ENV PATH /var/microauth/node_modules/.bin:$PATH
ENV PATH /var/microauth/apps/authentication/static/js/node_modules/.bin:$PATH

WORKDIR /var/microauth
RUN python manage.py collectstatic --noinput

EXPOSE 80
