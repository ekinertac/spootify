from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    url(r'^$', include('apps.core.urls', namespace='core')),
    url(r'^playlist/', include('apps.playlist.urls', namespace='playlist')),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),

)
