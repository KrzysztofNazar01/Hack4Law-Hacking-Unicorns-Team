# Generated by Django 4.1.1 on 2022-10-15 14:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0005_answers_delete_movie'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Answers',
            new_name='Question',
        ),
    ]
