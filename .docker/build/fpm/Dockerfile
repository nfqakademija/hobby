FROM ongr/php-fpm

ARG LOCAL_USER_ID=1000
ARG LOCAL_GROUP_ID=1000

ENV XDEBUG_VERSION 2.4.0

RUN set -xe && \
  cd /tmp && \
  wget http://xdebug.org/files/xdebug-$XDEBUG_VERSION.tgz && \
  tar -xvzf xdebug-$XDEBUG_VERSION.tgz && \
  cd xdebug-$XDEBUG_VERSION && \
  phpize && \
  ./configure && \
  make && \
  make install && \
  rm -rf /tmp/xdebug-$XDEBUG_VERSION

RUN set -xe && \
  groupadd -g $LOCAL_GROUP_ID -o -f user && \
  useradd --shell /bin/bash -u $LOCAL_USER_ID -g user -o -c "" -m user

COPY xdebug.ini /usr/local/etc/php/conf.d/20-xdebug.ini
