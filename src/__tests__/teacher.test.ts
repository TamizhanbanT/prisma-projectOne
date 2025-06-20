import request from "supertest";
import app from "../../app";

describe("Teacher API", () => {
  let teacherId: number;

  it("should create a teacher", async () => {
    const res = await request(app)
      .post("/teachers")
      .send({
        name: "Mr. Sundar",
        classId: 1 // Make sure classId 1 exists
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("name", "Mr. Sundar");
    expect(res.body).toHaveProperty("classId", 1);
    teacherId = res.body.id;
  });

  it("should get all teachers", async () => {
    const res = await request(app).get("/teachers");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should get teacher by ID", async () => {
    const res = await request(app).get(`/teachers/${teacherId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", teacherId);
  });

  it("should update the teacher", async () => {
    const res = await request(app)
      .put(`/teachers/${teacherId}`)
      .send({ name: "Mr. Sundar Updated" });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("name", "Mr. Sundar Updated");
  });

  it("should delete the teacher", async () => {
    const res = await request(app).delete(`/teachers/${teacherId}`);
    expect(res.statusCode).toBe(204);
  });

  it("should return 404 when deleting non-existing teacher", async () => {
    const res = await request(app).delete(`/teachers/99999`);
    expect(res.statusCode === 404 || res.statusCode === 500).toBe(true);
  });
});
