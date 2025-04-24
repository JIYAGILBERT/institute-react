from django.db import models

# Create your models here.

class course(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    duration = models.CharField(max_length=50)
    image=models.FileField(upload_to='images/')

    def __str__(self):
        return self.title
    

