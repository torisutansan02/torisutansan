---
title: 'Django Setup'
date: 'December 1, 2025'
category: 'Django'
---

# Django Setup

What are some helpful commands to setup a Django project?

Python and Python-Pip are the two packages we need to install on our Ubuntu Linux system.

```
sudo apt install python && python-pip
```

How do we verify we installed Python and Pip?
- Checking versions.

```
python --version
pip --version
```

What are some helpful Pip commands?
- Install, uninstall, and download.

```
pip install
pip uninstall
pip download
```

## Virtual Environment

This allows us to install packages and dependencies isolated to a single project.
- Creating a virtual environment.
- Then activating the virtual environment.
- It is suggested you do this within a project directory.

```
~/Projects/DjangoApp/
python -m venv venv
source venv/bin/activate
```

## Django Installation

We should install Django once we activated our virtual environment.

```
(venv) ~/Projects/DjangoApp/
pip install Django
```

## Projects and Apps

How do we create a Project in Django?
- Use Django's admin command.

```
(venv) ~/Projects/DjangoApp/
django-admin startproject MyProject
```

How about creating an App in Django?
- Change your directory to the project folder.
- Run a python command with the manage.py file.

```
(venv) ~/Projects/DjangoApp/
cd MyProject

(venv) ~/Projects/DjangoApp/MyProject/
python manage.py startapp MyApp
```

How do we test our Django project works as expected?
- Run a python command with the manage.py file.

```
(venv) ~/Projects/DjangoApp/MyProject/
python manage.py runserver <PORT NUMBER>
```