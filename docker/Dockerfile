FROM nginx:1.19.6-alpine

COPY docker/default.conf.tmpl /etc/nginx/conf.d/default.conf.tmpl
COPY dist/mrbllab/browser /srv

CMD \
  sh /etc/nginx/conf.d/default.conf.tmpl > /etc/nginx/conf.d/default.conf && \
  # sh /srv/config.js.tmpl > /srv/config.js && \
  nginx -g "daemon off;"
