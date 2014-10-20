# coding=utf-8
from django.views.generic.detail import BaseDetailView

from apps.core.utils import JSONResponseMixin
from apps.playlist.models import Playlist


class List(JSONResponseMixin, BaseDetailView):
    def get(self, request, *args, **kwargs):

        query = Playlist.objects.all()

        playlists = [{
            'id': item.id,
            'title': item.title,
        } for item in query]

        return self.render_to_response(playlists)


class Get(JSONResponseMixin, BaseDetailView):
    def get(self, request, *args, **kwargs):
        item = Playlist.objects.get(pk=self.kwargs['pk'])
        content = {
            'name': item.title,
            'id': item.id,
            'tracks': [
                x.track.title for x in item.playlisttrack_set.all()
            ]
        }

        return self.render_to_response(content)
