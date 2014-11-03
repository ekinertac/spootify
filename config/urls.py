from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic.base import RedirectView
from apps.core.views import Index

urlpatterns = patterns('',
    url(r'^.*', Index.as_view()),
    url(r'^admin/', include(admin.site.urls)),
)
