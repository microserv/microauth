# Microauth

Microauth is the authentication module for the microserv project. We use OAuth2 as authentication, with great help from [oauthlib](https://github.com/idan/oauthlib) and [django-oauth-toolkit](https://github.com/evonove/django-oauth-toolkit).

## Getting started

TL;DR: This is a regular Django project, so follow the regular [Django startup guides](https://www.djangoproject.com/start/) for getting the project running.

### Starting development

Let's make sure we're up to date with upstream git repository, install any new requirements and migrate any database changes.

1. [clone|fetch|pull|merge] this repository
2. Install project dependencies from requirements.txt
3. `python manage.py migrate`
4. `python manage.py runserver`

## How to use this application

Let's move this section to the Wiki whenever we get enough content in it?

### Adding a new Client (Application)

TODO.
_For now, read_ https://django-oauth-toolkit.readthedocs.org/en/latest/tutorial/tutorial_01.html.
