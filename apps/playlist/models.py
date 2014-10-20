from django.contrib.auth.models import User
from django.db import models
from apps.music.models import Track


class Playlist(models.Model):
    title = models.CharField(max_length=255)
    user = models.ForeignKey(User)

    def __unicode__(self):
        return u'%s' % self.title


class PlaylistTrack(models.Model):
    playlist = models.ForeignKey(Playlist)
    track = models.ForeignKey(Track)