from django.contrib import admin

from apps.playlist.models import PlaylistTrack, Playlist


class PlaylistTrackInline(admin.TabularInline):
    model = PlaylistTrack


class PlaylistAdmin(admin.ModelAdmin):
    inlines = [PlaylistTrackInline]

admin.site.register(Playlist, PlaylistAdmin)