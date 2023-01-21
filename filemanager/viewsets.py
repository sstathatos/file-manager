import os

from django.http import HttpResponse, JsonResponse
from rest_framework import status, viewsets

from .models import File
from .serializers import FileSerializer
from .settings import MEDIA_ROOT


class FileViewSet(viewsets.ModelViewSet):
    queryset = File.objects.all()
    serializer_class = FileSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = FileSerializer(instance=instance)
        try:
            with open(os.path.join(MEDIA_ROOT, serializer.data["name"]), "rb") as f:
                return HttpResponse((f.read()), content_type="image/png")
        except IOError:
            return JsonResponse(status=status.HTTP_404_NOT_FOUND, data={})

    def list(self, request, *args, **kwargs):
        super(FileViewSet, self).list(request, *args, **kwargs)
        return JsonResponse(status=status.HTTP_200_OK, data={}, safe=False)
