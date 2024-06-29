import request from "supertest";
import app from "../../app"
import { Server } from "http";

describe("/message Test", () => {
  
  let server : Server

  beforeEach((done) => {
    server = app.listen(3000, done);
  })

  afterAll((done) => {
    server.close(done);
  })

  it("/ Test", async () => {
    const response = await request(app).get("/message");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Message");
  })
})