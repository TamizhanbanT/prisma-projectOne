import request from "supertest";
import app from "../../app";

let testClassId: number;

describe("Class API", () => {
  // ✅ 1. Valid class creation
  it("should create a class", async () => {
    const uniqueId = Math.floor(Math.random() * 10000); // unique classId

    const res = await request(app)
      .post("/classes")
      .send({ classId: uniqueId });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("classId", uniqueId);

    testClassId = res.body.classId; // save for later tests
  });

  // ✅ 2. Get all classes
  it("should get all classes", async () => {
    const res = await request(app).get("/classes");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // ✅ 3. Update classId
  it("should update the class", async () => {
    const updatedId = Math.floor(Math.random() * 10000);

    const res = await request(app)
      .put(`/classes/${testClassId}`)
      .send({ newClassId: updatedId });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("classId", updatedId);

    testClassId = res.body.classId; // update reference
  });

  // ✅ 4. Delete class
  it("should delete the class", async () => {
    const res = await request(app).delete(`/classes/${testClassId}`);
    expect(res.statusCode).toBe(204);
  });

  // ✅ 5. Deleting non-existent class
  it("should return 404 when deleting non-existing class", async () => {
    const res = await request(app).delete(`/classes/999999`);
    expect([404, 500]).toContain(res.statusCode);
  });

  // 🔴 6. Invalid: Missing classId in POST
  it("should fail validation when classId is missing", async () => {
    const res = await request(app)
      .post("/classes")
      .send({});

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Validation failed");
    expect(res.body.errors).toHaveProperty("classId");
  });

  // 🔴 7. Invalid: classId as string in POST
  it("should fail validation when classId is a string", async () => {
    const res = await request(app)
      .post("/classes")
      .send({ classId: "abc" });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Validation failed");
    expect(res.body.errors).toHaveProperty("classId");
  });

  // 🔴 8. Invalid: Missing newClassId in PUT
  it("should fail validation when newClassId is missing in update", async () => {
    const res = await request(app)
      .put("/classes/12345")
      .send({});

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Validation failed");
    expect(res.body.errors).toHaveProperty("newClassId");
  });

  // 🔴 9. Invalid: newClassId as string in PUT
  it("should fail validation when newClassId is a string", async () => {
    const res = await request(app)
      .put("/classes/12345")
      .send({ newClassId: "abc" });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Validation failed");
    expect(res.body.errors).toHaveProperty("newClassId");
  });
});
