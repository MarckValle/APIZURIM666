from django.db import models

# Create your models here.

class cliente(models.Model):
    idCliente = models.AutoField(primary_key=True,db_column='id_cliente')
    nombre = models.CharField(max_length=100, db_column='nombre')
    edad = models.IntegerField(db_column='edad')
    correo = models.CharField(max_length=100,unique=True,db_column='correo')
    domicilio = models.TextField(db_column='Domicilio')
    telefono = models.TextField(max_length=100, db_column='telefono')
    username = models.CharField(unique=True,max_length=100, db_column='username')
    passw = models.CharField(max_length=100, db_column='pasw')
    class Meta: 
        db_table='cliente'

class producto(models.Model):
    idProducto = models.AutoField(primary_key=True,db_column='id_producto')
    nombre = models.CharField(max_length=100, db_column='nombre')
    descripcion = models.CharField(max_length=100, db_column='descripcion')
    precio = models.CharField(max_length=100, db_column='precio')
    stock = models.CharField(max_length=100, db_column='stock')
    class Meta: 
        db_table = 'producto'

class pedido(models.Model):
    id_pedido = models.AutoField(primary_key=True, db_column='id_pedido')
    idCliente = models.ForeignKey(cliente, on_delete=models.CASCADE, db_column='id_cliente')
    fecha_pedido = models.DateField(db_column='fecha_pedido')
    paqueteria = models.CharField(max_length=100, db_column='paqueteria')
    numSeguimiento = models.CharField(max_length=100, db_column='num_seguimiento')
    estado = models.CharField(max_length=100, db_column='estado')
    class Meta: 
        db_table = 'pedido'

class detalle_pedido(models.Model):
    idDetalle = models.AutoField(primary_key=True, db_column='id_detalle')
    id_pedido = models.ForeignKey(pedido, on_delete=models.CASCADE, db_column='id_pedido', )
    id_producto = models.ForeignKey(producto, on_delete=models.CASCADE, db_column='id_producto')
    class Meta:
        db_table = 'detalle_pedido'
    
class vehiculo (models.Model):
    idVehiculo = models.AutoField(primary_key=True, db_column='id_vehiculo')
    modelo = models.CharField(max_length=50, db_column='modelo')
    matricula = models.CharField(max_length=50, db_column='matricula')
    class Meta:
        db_table = 'vehiculo'

class repartidor (models.Model):
    idRepartidor = models.AutoField(primary_key=True, db_column='id_repartidor')
    nombre = models.CharField(max_length=100, db_column='nombre')
    aPaterno = models.CharField(max_length=100, db_column='aPaterno')
    aMaterno = models.CharField(max_length=100, db_column='aMaterno')
    edad = models.IntegerField(db_column='edad')
    correo = models.CharField(max_length=100,unique=True,db_column='correo')
    domicilio = models.TextField(db_column='Domicilio')
    telefono = models.TextField(max_length=100, db_column='telefono')
    curp = models.TextField(max_length=18, db_column='curp')
    nss = models.TextField(max_length=20, db_column='nss')
    idVehiculo = models.ForeignKey(vehiculo, on_delete=models.CASCADE, db_column='id_vehiculo')
    class Meta:
        db_table = 'repartidor'


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