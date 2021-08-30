from django.core.files.storage import FileSystemStorage
from django.core.validators import FileExtensionValidator
from django.db import models
from django.utils import timezone

ALLOWED_FILE_EXTENSIONS = ["pdf", "txt", "jpg", "png", "mp4"]


class File(models.Model):
    file_id = models.AutoField(primary_key=True)
    file = models.FileField(
        max_length=255,
        validators=[FileExtensionValidator(allowed_extensions=ALLOWED_FILE_EXTENSIONS)],
        storage=FileSystemStorage(),
    )
    date_created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return str(self.file.name)
