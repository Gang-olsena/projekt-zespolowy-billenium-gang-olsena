from rest_framework import serializers
from kanban.models import Board, Row
from kanban.serializers.card_serializer import CardSerializer
from kanban.serializers.row_serializer import RowSerializer
from kanban.serializers.row_board_serializer import RowBoardSerializer




class BoardSerializer(serializers.ModelSerializer):
    card_data = CardSerializer(source='card_board', many=True, read_only=True)
    row_data = RowBoardSerializer(source='*')
    is_static = serializers.SerializerMethodField()

    class Meta:
        model = Board
        exclude = ('deleted_at',)

    @staticmethod
    def get_is_static(obj):
        return obj.is_static