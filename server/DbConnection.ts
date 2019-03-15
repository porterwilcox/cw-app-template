import { DatabaseClient, MongoRepository } from 'mongtype';

let CONNECTION: DatabaseClient;

export class DbConnection {
  public static CONNECTIONSTRING: string
  private url: string = "";
  dbClient: DatabaseClient;
  constructor(connectionString: string = "") {

    this.url = (
      connectionString
      || DbConnection.CONNECTIONSTRING
      || process.env.CONNECTIONSTRING
      || ""
    );

    if (!this.url) {
      throw new Error("[DB CONNECTION] Unable to connection to db no connection string provided")
    }

    this.dbClient = CONNECTION || new DatabaseClient();
    if (!CONNECTION) {
      CONNECTION = this.dbClient
    }

  }
  async Open(): Promise<boolean> {
    try {
      this.dbClient.on("connected", err => console.log("[DBCONNECTION CONNECTED]", err))
      this.dbClient.on("error", err => console.error("[DBCONNECTION ERROR]", err))
      await this.dbClient.connect(this.url);
      return true
    } catch (err) {
      throw err
    }
  }
  async Close(): Promise<void> {
    await this.dbClient.close();
  }
}


export class DbContext<T> extends MongoRepository<T>{
  constructor() {
    let ctx = new DbConnection()
    super(ctx.dbClient);
  }
}