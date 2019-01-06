source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.5.1"

gem "bootsnap", ">= 1.1.0", require: false
gem "coffee-rails", "~> 4.2"
gem "haml-rails"
gem "jbuilder", "~> 2.5"
gem "mysql2"
gem "name_of_person"
gem "pry-rails"
gem "puma", "~> 3.11"
gem "rails", "~> 5.2.0"
gem "react-rails"
gem "sass-rails", "~> 5.0"
gem "turbolinks", "~> 5"
gem "tzinfo-data", platforms: %i[mingw mswin x64_mingw jruby]
gem "uglifier", ">= 1.3.0"
gem "webpacker", "~> 3.5"

# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'mini_racer', platforms: :ruby

group :development do
  #Deployment
  gem "capistrano", require: false
  gem "capistrano-bundler", require: false
  gem "capistrano-passenger", require: false
  gem "capistrano-rails", require: false
  gem "capistrano-rbenv", require: false
  gem "capistrano-yarn", require: false

  gem "listen", ">= 3.0.5", "< 3.2"
  gem "rubocop"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "web-console", ">= 3.3.0"
end

group :test do
  gem "capybara", ">= 2.15", "< 4.0"
  gem "chromedriver-helper"
  gem "selenium-webdriver"
end

group :production do
  gem "passenger"
end
