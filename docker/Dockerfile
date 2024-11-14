FROM nginx:1.19.6-alpine

COPY docker/default.conf.tmpl /etc/nginx/conf.d/default.conf.tmpl
COPY dist/ /srv

CMD \
  sh /etc/nginx/conf.d/default.conf.tmpl > /etc/nginx/conf.d/default.conf && \
  nginx -g "daemon off;"
