from django.db import models


class Genre(models.Model):
    """Genre model"""
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)

    class Meta:
        ordering = ('title',)

    def __unicode__(self):
        return '%s' % self.title


class Label(models.Model):
    """Label model"""
    title = models.CharField(max_length=100)
    prefix = models.CharField(max_length=20, blank=True)
    slug = models.SlugField(unique=True)
    website = models.URLField(blank=True)

    class Meta:
        ordering = ('title',)

    def __unicode__(self):
        return '%s' % self.full_title

    @property
    def full_title(self):
        return '%s %s' % (self.prefix, self.title)


class Band(models.Model):
    """Band model"""
    title = models.CharField(max_length=100)
    prefix = models.CharField(max_length=20, blank=True)
    slug = models.SlugField(unique=True)
    website = models.URLField(blank=True)

    class Meta:
        ordering = ('title',)

    def __unicode__(self):
        return '%s' % self.full_title

    @property
    def full_title(self):
        return '%s %s' % (self.prefix, self.title)


class Album(models.Model):
    """Album model"""
    title = models.CharField(max_length=255)
    prefix = models.CharField(max_length=20, blank=True)
    subtitle = models.CharField(blank=True, max_length=255)
    slug = models.SlugField()
    band = models.ForeignKey(Band, blank=True)
    label = models.ForeignKey(Label, blank=True)
    genre = models.ManyToManyField(Genre, blank=True)
    release_date = models.DateField(blank=True, null=True)
    cover = models.FileField(upload_to='albums', blank=True)

    is_ep = models.BooleanField(default=False)
    is_compilation = models.BooleanField(default=False)

    class Meta:
        ordering = ('title',)

    def __unicode__(self):
        return '%s' % self.full_title


    @property
    def full_title(self):
        return '%s %s' % (self.prefix, self.title)


class Track(models.Model):
    """Tracks model"""
    album = models.ForeignKey(Album, blank=True, null=True, related_name='tracks')
    band = models.ForeignKey(Band, blank=True, null=True, related_name='tracks')
    title = models.CharField(max_length=255)
    slug = models.SlugField()
    # mp3 = models.FilePathField(path=settings.MEDIA_ROOT + 'tracks', match='.*\.mp3$')

    class Meta:
        ordering = ('id',)

    def __unicode__(self):
        return '%s - %s - %s' % (self.band, self.album, self.title)
