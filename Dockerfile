FROM openresty/openresty

MAINTAINER Joshua Chow <gnu.crazier@gmail.com>

ADD index.html /data/index.html
ADD favicon.ico /data/favicon.ico
ADD images /data/images
ADD dist /data/dist
ADD conf/nginx.conf /usr/local/openresty/nginx/conf/nginx.conf

ENTRYPOINT ["/usr/local/openresty/bin/openresty", "-g", "daemon off;"]
