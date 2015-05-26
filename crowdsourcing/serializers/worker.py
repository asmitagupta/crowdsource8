from crowdsourcing import models
from datetime import datetime
from rest_framework import serializers
import json

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Skill
        fields = ( 'name','verified', 'parent', 'deleted', 'created_timestamp', 'last_updated')

class WorkerSkillSerializer(serializers.ModelSerializer):
    verified = serializers.ReadOnlyField()
    
    class Meta:
        model = models.WorkerSkill
        fields = ( 'worker','skill', 'level', 'verified', 'created_timestamp')


class WorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Worker

#class RegionSerializer(serializers.ModelSerializer):
 #   class Meta:
  #      model = models.RegionModel
   #     fields = ( 'name','code', 'created_timestamp', 'last_updated')
        
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Task        
        fields = ( 'module', 'statuses','status', 'deleted', 'created_timestamp')

class TaskWorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TaskWorker

class TaskWorkerResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TaskWorker

class WorkerModuleApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.WorkerModuleApplication

class QualificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Qualification

class CurrencySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Currency




