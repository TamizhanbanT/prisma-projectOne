import request from "supertest";
import app from "../../app";


describe("Class API", () => {
  it("should create a class", async () => {
    const res = await request(app)
      .post("/classes")
      .send({ classId: 101 });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("classId", 101);
  });

  it("should get all classes", async () => {
    const res = await request(app).get("/classes");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
