# Generated by Django 4.1.7 on 2023-03-13 20:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kanban', '0003_remove_board_rows'),
    ]

    operations = [
        migrations.AddField(
            model_name='row',
            name='is_collapsed',
            field=models.BooleanField(default=False),
        ),
    ]
