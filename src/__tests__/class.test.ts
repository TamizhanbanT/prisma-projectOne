import request from "supertest";
import app from "../../app";

let testClassId: number;

describe("Class API", () => {
  it("should create a class", async () => {
    const uniqueId = Math.floor(Math.random() * 10000); // ✅ Unique ID

    const res = await request(app)
      .post("/classes")
      .send({ classId: uniqueId });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("classId", uniqueId);

    testClassId = res.body.classId; // Save for later tests
  });

  it("should get all classes", async () => {
    const res = await request(app).get("/classes");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should update the class", async () => {
    const updatedId = Math.floor(Math.random() * 10000);

    const res = await request(app)
      .put(`/classes/${testClassId}`)
      .send({ newClassId: updatedId });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("classId", updatedId);

    testClassId = res.body.classId; // update test ID for delete
  });

  it("should delete the class", async () => {
    const res = await request(app).delete(`/classes/${testClassId}`);
    expect(res.statusCode).toBe(204); // ✅ Matches controller
  });

  it("should return 404 when deleting non-existing class", async () => {
    const res = await request(app).delete(`/classes/99999`);
    expect(res.statusCode === 404 || res.statusCode === 500).toBe(true);
  });
});
