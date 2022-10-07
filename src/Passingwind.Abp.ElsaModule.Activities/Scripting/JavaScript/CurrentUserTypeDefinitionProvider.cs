﻿using System;
using System.Collections.Generic;
using Elsa.Scripting.JavaScript.Services;
using Passingwind.Abp.ElsaModule.Activities;

namespace Passingwind.Abp.ElsaModule.Scripting.JavaScript
{
    public class CurrentUserTypeDefinitionProvider : TypeDefinitionProvider
    {
        public override IEnumerable<Type> CollectTypes(TypeDefinitionContext context)
        {
            yield return typeof(CurrentUserOutputModel);
        }
    }
}
