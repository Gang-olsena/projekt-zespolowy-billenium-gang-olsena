# Generated by Django 4.1.7 on 2023-04-06 03:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kanban', '0009_board_min_card'),
    ]

    operations = [
        migrations.AddField(
            model_name='card',
            name='are_carditems_collapsed',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='card',
            name='are_children_collapsed',
            field=models.BooleanField(default=True),
        ),
    ]
