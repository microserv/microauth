# Microauth

[![Build Status](https://travis-ci.org/microserv/microauth.svg?branch=master)](https://travis-ci.org/microserv/microauth) [![Coverage Status](https://coveralls.io/repos/github/microserv/microauth/badge.svg?branch=master)](https://coveralls.io/github/microserv/microauth?branch=master)

Microauth is the authentication module for the microserv project. We use OAuth2 as authentication, with great help from [oauthlib](https://github.com/idan/oauthlib) and [django-oauth-toolkit](https://github.com/evonove/django-oauth-toolkit).

## Getting started

TL;DR: This is a regular Django project, so follow the regular [Django startup guides](https://www.djangoproject.com/start/) for getting the project running.

### Starting development

Let's make sure we're up to date with upstream git repository, install any new requirements and migrate any database changes.

1. [clone|fetch|pull|merge] this repository
2. Install project dependencies from requirements.txt
3. `python manage.py migrate`
4. `cd apps/authentication/static/js/`, `npm install .` - This installs node modules required for transpiling ReactJS code.
5. Make sure the requirements specified in package.json (in the project root folder) is in your PATH. (Quickfix: install them globally by `npm install -g <packages>`)
10. `python manage.py runserver` (Yes, it's step #10 - that makes it easy to add steps in before it without renaming the step number)

## How to use this application

Let's move this section to the Wiki whenever we get enough content in it?

### Adding a new Client (Application)

TODO.
_For now, read_ https://django-oauth-toolkit.readthedocs.org/en/latest/tutorial/tutorial_01.html.
