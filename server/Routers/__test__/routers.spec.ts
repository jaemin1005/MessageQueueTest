import request from "supertest";
import app from "../../app";

describe("routers Test", () => {

  let server: any; // 서버 인스턴스를 저장할 변수

  // 각 테스트 전에 서버를 시작합니다.
  beforeAll((done) => {
    server = app.listen(4000, done); // 포트 4000에서 서버를 시작합니다.
  });

  // 각 테스트 후에 서버를 종료합니다.
  afterAll((done) => {
    server.close(done); // 서버를 종료합니다.
  });


  it("/ test", async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe("DEFAULT");
  })
})