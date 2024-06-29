import request from "supertest";
import app from "../../app"
import { Server } from "http";

describe("/message Test", () => {
  
  let server : Server

  beforeAll(() => {
    server = app.listen(3000);
  })

  afterAll((done) => {
    server.close(done);
  })

  it("/ Test", async () => {
    const response = await request(app).get("/message");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Message");
  })

  it("/Error Test", async () => {
    const response = await request(app).get("/message/Error");
    expect(response.status).toBe(404);
  })
})