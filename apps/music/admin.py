from django.contrib import admin

from apps.music.models import *


class GenreAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}


class LabelAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}

class AlbumInline(admin.TabularInline):
    model = Album

class BandAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    inlines = [AlbumInline]


class TrackInline(admin.TabularInline):
    model = Track


class AlbumAdmin(admin.ModelAdmin):
    inlines = [TrackInline]
    list_display = ('title', 'band',)
    prepopulated_fields = {'slug': ('title',)}


class TrackAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}


admin.site.register(Genre, GenreAdmin)
admin.site.register(Label, LabelAdmin)
admin.site.register(Band, BandAdmin)
admin.site.register(Album, AlbumAdmin)
admin.site.register(Track, TrackAdmin)
