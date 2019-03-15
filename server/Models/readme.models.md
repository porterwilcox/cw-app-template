## Application Models 

> Things that dont get written in to the db... 

This is where you will define your apps custom models. Think of your helper classes

```typescript
class UserLogin {
  @IsNotEmpty() // use decorators from class-validator
  email: string
  @Min(6)
  password: string
}
```

### Controllers
All controllers are treated as Transients they are instantiated per request as are their dependencies

```typescript
@Controller("endpoint/supports/nesting")
class SomeController{


  @HttpGet() // uses controller base url
  async Get(): Promise<SomeClass>{
    return new SomeClass()
  }

  @HttpGet(":id/:somethingElse") // params support destructuring
  async GetOne({ id, somethingElse }){
    this._service // newly instantiated
  }

  @HttpPost("more/nesting/here")
  @FromBody(SomeClass) // You can trust the req body ModelState.IsValid = true
  CreateSomeClassInstance(_, val: SomeClass){ 
    //line is never reached if deserialization fails
    this._service.create(val)
  }


  constructor(service: SomeService){
    this._service = service // Dependency Injection is supported dont worry about instantiation
  }

}
```
