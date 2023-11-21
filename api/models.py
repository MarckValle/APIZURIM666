from django.db import models

# Create your models here.

class inicio_sesion(models.Model):
    idUser = models.AutoField(primary_key=True,db_column='idUser')
    username = models.CharField(max_length=100, db_column='username')
    name = models.CharField(max_length=100, db_column='name1')
    passw = models.CharField(max_length=100, db_column='pasw')
    class Meta: 
        db_table='sesion'

class datos(models.Model):
    idUser = models.AutoField(primary_key=True,db_column='idUser')
    nombre = models.CharField(max_length=100, db_column='Nombre')
    correo = models.CharField(max_length=100, db_column='correo')
    edad = models.CharField(max_length=100, db_column='edad')
    p1 = models.CharField(max_length=100, db_column='pre1')
    p2 = models.CharField(max_length=100, db_column='pre2')
    p3 = models.CharField(max_length=100, db_column='pre3')
    p4 = models.CharField(max_length=100, db_column='pre4')
    p5 = models.CharField(max_length=100, db_column='pre5')
    p6 = models.CharField(max_length=100, db_column='pre6')
    p7 = models.CharField(max_length=100, db_column='pre7')
    p8 = models.CharField(max_length=100, db_column='pre8')
    class Meta: 
        db_table='datos'