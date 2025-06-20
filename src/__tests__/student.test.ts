import request from "supertest";
import app from "../../app";


describe("Student API", () => {
  it("should create a student", async () => {
    const res = await request(app)
      .post("/students")
      .send({ name: "Test Student", classId: 101 });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("name", "Test Student");
  });

  it("should fetch all students", async () => {
    const res = await request(app).get("/students");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
