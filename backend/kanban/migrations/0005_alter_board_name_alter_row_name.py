# Generated by Django 4.1.7 on 2023-03-15 20:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kanban', '0004_card_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='board',
            name='name',
            field=models.CharField(max_length=32),
        ),
        migrations.AlterField(
            model_name='row',
            name='name',
            field=models.CharField(max_length=32),
        ),
    ]