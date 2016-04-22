FROM localhost:5000/backend-comm
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

WORKDIR ${BASE_DIR}
RUN python manage.py collectstatic --noinput

EXPOSE 80
