from django.conf.urls import patterns, include, url
from apps.playlist import views

urlpatterns = patterns('',

    url(r'^list/$',             views.List.as_view(),   name='list'),
    url(r'^get/(?P<pk>\d+)/$',  views.Get.as_view(),    name='get'),

)
