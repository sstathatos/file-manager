from rest_framework import routers

from .viewsets import FileViewSet

router = routers.DefaultRouter()
router.register(r"files", FileViewSet, basename="files")
