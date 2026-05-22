# Compare: IaC in our org

> *Criteria* *[`[multi-cloud* *vs* *single* *cloud* *native* *…`]*]**

| Option | Pros | Cons | Best fit here |
| --- | --- | --- | --- |
| **Terraform* */* *OpenTofu*  | *Ecosystem* *mature*  | *HCL* *context*  | *Default*  |
| **Pulumi*  | *TypeScript*  | *Licensing*  | *If* *TS* *everywhere*  |
| **Bicep* *\|* *CloudFormation*  | *Fidelity*  | *Portability*  | *If* *single* *cloud* *+` *deep*  |

- *Guideline* *—* *modules* *in* *[`[repo* *iac`] —* *state* *remote* *with* *lock*  |

## When to use vendor UI
- *Hobby* *only* *—* *for* *prod* *import* *to* *[`[code* *after* *spike* */* *capture* *in* *PR`]:**  *
