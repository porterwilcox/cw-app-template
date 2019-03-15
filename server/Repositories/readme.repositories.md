
### Repo Setup

```typescript
import { Collection } from 'mongtype';
import { Identity } from "../Entities";
import { DbContext } from "../DbConnection";

@Collection({
	name: "Identity", // table name in the db
	indexes: [{
		fields: { email: 1 }, // dont know why the 1 here follow the mongoDb Docs
		options: { unique: true }
	}]
})
export class IdentityRepo extends DbContext<Identity> { // The Generic specifies the return type of the built in methods
	
	//... Add custom methods to your repo only if needed
	async customMethod(){
		//...
		let connection = await this.db
		// this is the actually connection to the db you will have full access to the db here don't screw up
		connection.collection("blarg").remove()
	}

	//decorators are available for hooks from mongtype Docs
	@beforeCreate
	@afterCreate

}

```

### Using a Repo
```typescript

import {IdentityRepo} from '@server/Repositories/IdentityRepository.ts'

IdentityRepo
	.find
	.findOne
	.create
	.customMethod
	... // use the intellesense
```