# Generated by Django 4.1.7 on 2023-04-04 09:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_question_question_dependens_on_answer'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answer',
            name='answer_dependens_on',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='self_answer', to='app.answer'),
        ),
    ]
