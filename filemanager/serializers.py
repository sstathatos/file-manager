from rest_framework import serializers

from .models import File


class FileSerializer(serializers.ModelSerializer):
    size = serializers.SerializerMethodField()
    name = serializers.SerializerMethodField()
    filetype = serializers.SerializerMethodField()
    since_added = serializers.SerializerMethodField()

    class Meta:
        model = File
        fields = ("file_id", "file", "since_added", "size", "name", "filetype")

    @staticmethod
    def get_size(obj):
        file_size = ""
        if obj.file and hasattr(obj.file, "size"):
            file_size = obj.file.size
        return file_size

    @staticmethod
    def get_name(obj):
        file_name = ""
        if obj.file and hasattr(obj.file, "name"):
            file_name = obj.file.name
        return file_name

    @staticmethod
    def get_filetype(obj):
        filename = obj.file.name
        return filename.split(".")[-1]

    @staticmethod
    def get_since_added(obj):
        date_added = obj.date_created
        return date_added
