# Generated by Django 4.1 on 2022-08-26 05:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_alter_profile_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='avatar',
            field=models.ImageField(blank=True, default='users/no-image.png', upload_to='users/'),
        ),
    ]
