from kanban.models import User, Board, Card, CardMoveTimeline
from kanban.serializers.remaining_user_assignment_serializer import RemainingSerializer
import random
from datetime import datetime
from collections import OrderedDict


def hex_code_colors():
    a = hex(random.randrange(0, 256))
    b = hex(random.randrange(0, 256))
    c = hex(random.randrange(0, 256))
    a = a[2:]
    b = b[2:]
    c = c[2:]
    if len(a) < 2:
        a = "0" + a
    if len(b) < 2:
        b = "0" + b
    if len(c) < 2:
        c = "0" + c
    z = a + b + c
    return "#" + z.upper()


def timeline_helper():
    labels_ids = (Board.objects.all().values_list('id', flat=True))
    card_ids = (Card.objects.all().values_list('id', flat=True))
    num_of_boards = len(labels_ids)
    labels = (Board.objects.all().values_list('name', flat=True))
    datasets = []

    for card_id in card_ids:
        print(card_id)
        dataset = {"label": Card.objects.get_by_pk(pk=card_id).description}
        data_dict = dict.fromkeys(labels_ids,0)
        card_timestamps = CardMoveTimeline.objects.filter(card_id=card_id)
        prev_timestamp = None

        for timestamp in card_timestamps:
            print(timestamp.created_at)
            if prev_timestamp:
                diff = timestamp.created_at - prev_timestamp.created_at
                data_dict[prev_timestamp.board.id] = data_dict.get(prev_timestamp.board.id, 0) + diff.days
            prev_timestamp = timestamp
        diff = datetime.now() - prev_timestamp.created_at
        #print(prev_timestamp.created_at)
        #print(datetime.now())
        data_dict[prev_timestamp.board.id] = data_dict.get(prev_timestamp.board.id, 0) + diff.days

        dataset["data"] = list(data_dict.values())
        dataset["fill"] = False
        dataset["borderColor"] = (hex_code_colors())
        dataset["tension"] = 0.4
        datasets.append(dataset)
    results = {
        "labels": labels,
        "datasets": datasets
    }
    return results
