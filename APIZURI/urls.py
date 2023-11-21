"""APIZURI URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api.views import Home
from api.views import inicio
from api.views import Dashboard
from api.views import Catalogo
from api.views import Nosotros
from api.views import Carrito
from api.views import pay
from api import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


urlpatterns = [
    path('admin/', admin.site.urls),
    path('form/', views.formulario_verificacion,name='form'),
    path('login/', views.login,name='login'),
    path('dashboard/', Dashboard.as_view(),name='dashboard'),
    path('index1/', views.index, name='index1'), 
    path('', inicio.as_view(), name='index'),
    path('Menu/', Catalogo.as_view(), name='menu'),
    path('Acerca De/', Nosotros.as_view(), name='about'),
    path('CarritoCompras', Carrito.as_view(), name='carrito'),
    path('paypalpruebas', pay.as_view(), name='paypal'),
    path('payment/', views.CheckOut, name='payment'),
    path('success/', views.success, name='success'),
    path('cancel/', views.cancel, name='cancel'),
]
