FROM debian

RUN apt-get -y update && \
    apt-get install -y apache2

COPY ./prod/ /var/www/html/
