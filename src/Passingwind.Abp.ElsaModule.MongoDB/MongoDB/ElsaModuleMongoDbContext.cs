﻿using MongoDB.Driver;
using Passingwind.Abp.ElsaModule.Common;
using Passingwind.Abp.ElsaModule.Teams;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace Passingwind.Abp.ElsaModule.MongoDB;

[ConnectionStringName(ElsaModuleDbProperties.ConnectionStringName)]
public class ElsaModuleMongoDbContext : AbpMongoDbContext, IElsaModuleMongoDbContext
{
    public IMongoCollection<Bookmark> Bookmarks => Collection<Bookmark>();
    public IMongoCollection<Trigger> Triggers => Collection<Trigger>();
    public IMongoCollection<WorkflowDefinition> WorkflowDefinitions => Collection<WorkflowDefinition>();
    public IMongoCollection<WorkflowDefinitionVersion> WorkflowDefinitionVersions => Collection<WorkflowDefinitionVersion>();
    public IMongoCollection<WorkflowExecutionLog> WorkflowExecutionLogs => Collection<WorkflowExecutionLog>();
    public IMongoCollection<WorkflowInstance> WorkflowInstances => Collection<WorkflowInstance>();
    public IMongoCollection<GlobalVariable> GlobalVariables => Collection<GlobalVariable>();
    public IMongoCollection<WorkflowTeam> WorkflowTeams => Collection<WorkflowTeam>();

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        modelBuilder.ConfigureElsaModule();
    }

}
