FROM ruby:latest
ARG RUBYGEMS_VERSION=3.4.6
RUN mkdir /api
WORKDIR /api
COPY . /api
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
RUN gem update --system ${RUBYGEMS_VERSION} && \
    gem install rails && \
    bundle install
ENTRYPOINT ["entrypoint.sh"]
CMD ["rails", "server", "-b", "0.0.0.0"]

