from django.conf.urls import patterns, include, url
from apps.core import views

urlpatterns = patterns('',
    # Examples:
    url(r'^$', views.Index.as_view(), name='index'),

)
