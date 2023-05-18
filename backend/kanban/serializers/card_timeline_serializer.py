from rest_framework import serializers


from kanban.models import Card, Board, CardMoveTimeline


class TimelineSerializer(serializers.ModelSerializer):
    class Meta:
        model = CardMoveTimeline
        exclude = ('deleted_at',)