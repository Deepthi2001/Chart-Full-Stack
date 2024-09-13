# Set Up Your Backend Django Project

## 1. Create the Project Directory
1. Navigate to your desired directory:
    ```sh
    mkdir django-backend
    cd django-backend
    ```

2. Create a virtual environment:
    ```sh
    python3 -m venv env
    source env/bin/activate  # On Windows use `env\Scripts\activate`
    ```

3. Install Django and Django REST Framework:
    ```sh
    pip install django djangorestframework
    ```

4. Start a new Django project:
    ```sh
    django-admin startproject backend .
    ```

5. Create a Django app:
    ```sh
    python3 manage.py startapp charts
    ```

## 2. Configure Your Django Project

### a. Update `settings.py`
1. Add `'rest_framework'` and the newly created app (`charts`) to `INSTALLED_APPS`:
    ```python
    INSTALLED_APPS = [
        ...
        'rest_framework',
        'charts',
    ]
    ```

## 3. Run the Development Server
1. Apply initial migrations:
    ```sh
    python3 manage.py migrate
    ```

2. Run the server:
    ```sh
    python3 manage.py runserver
    ```

