from django.test import testcases
import pytest 

from api.models import inicio_sesion
@pytest.mark.django_db  
def user_creation():
    user = inicio_sesion.objects.create_user(
        username = 'Marco Vallejo',
        name = 'marco.vallejo2000@gmail.com',
        passw = '1234'
    )
    assert user.username == 'Marco Vallejo'