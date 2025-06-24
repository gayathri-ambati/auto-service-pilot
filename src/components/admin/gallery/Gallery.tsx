import React, { useState, ChangeEvent, FormEvent } from "react";
import { Form, Button, Card, Row, Col, Alert, Container } from "react-bootstrap";
import baseURL from "../../../BaseUrl";
import Navbar from "../sidebar/Navbar";
import "./Gallery.css"; // optional custom CSS

interface FormDataState {
  name: string;
  description: string;
  file: File | null;
}

const Gallery: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [uploadType, setUploadType] = useState<"image" | "video">("image");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    description: "",
    file: null,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const maxSize = uploadType === "image" ? 2 * 1024 * 1024 : 10 * 1024 * 1024;
    if (file.size > maxSize) {
      const typeText = uploadType === "image" ? "2MB" : "10MB";
      setError(`❌ File must be less than ${typeText}`);
      e.target.value = "";
    } else {
      setError("");
      setFormData({ ...formData, file });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.file || !formData.name) {
      setError("Name and File are required.");
      return;
    }

    const payload = new FormData();
    payload.append("type", uploadType);
    payload.append("name", formData.name);
    payload.append("description", formData.description);
    payload.append("file", formData.file);

    try {
      const response = await fetch(`${baseURL}/gallery`, {
        method: "POST",
        body: payload,
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Upload failed");

      setSuccess(`${uploadType === "image" ? "Image" : "Video"} uploaded successfully!`);
      setFormData({ name: "", description: "", file: null });
    } catch (err: any) {
      setError(`❌ ${err.message}`);
    }
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <Navbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div
        style={{
          marginLeft: sidebarCollapsed ? "100px" : "220px",
          padding: "2rem",
          transition: "margin-left 0.3s ease",
        }}
      >
        <Container>
          <Card className="shadow-lg border-0 rounded-4 gallery-card">
            <Card.Body>
              <h3 className="text-center text-dark mb-4">
                🎨 <strong>Gallery Upload</strong>
              </h3>

              {error && <Alert variant="danger" className="text-center">{error}</Alert>}
              {success && <Alert variant="success" className="text-center">{success}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">📁 Select Upload Type</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      label="Image"
                      name="uploadType"
                      value="image"
                      checked={uploadType === "image"}
                      onChange={(e) => setUploadType(e.target.value as "image" | "video")}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="Video"
                      name="uploadType"
                      value="video"
                      checked={uploadType === "video"}
                      onChange={(e) => setUploadType(e.target.value as "image" | "video")}
                    />
                  </div>
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4" controlId="name">
                      <Form.Label className="fw-bold">
                        🖼 {uploadType === "image" ? "Image Name" : "Video Name"}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={`Enter ${uploadType} name`}
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-4" controlId="file">
                      <Form.Label className="fw-bold">
                        📤 Upload {uploadType === "image" ? "Image" : "Video"}
                      </Form.Label>
                      <Form.Control
                        type="file"
                        accept={uploadType === "image" ? "image/*" : "video/*"}
                        onChange={handleFileChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4" controlId="description">
                  <Form.Label className="fw-bold">📝 Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Write a description..."
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <div className="text-center">
                  <Button variant="primary" type="submit" className="px-4 py-2 rounded-pill gallery-button">
                    🚀 Upload {uploadType === "image" ? "Image" : "Video"}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="margin-left"] {
            margin-left: 0 !important;
            padding: 1rem !important;
          }
        }
        .gallery-card {
          background-color: #f8f9fa; /* Light background for the card */
          border-radius: 15px; /* Rounded corners */
        }
        .gallery-button {
          transition: background-color 0.3s, transform 0.2s;
        }
        .gallery-button:hover {
          background-color: #0056b3; /* Darker shade for hover effect */
          transform: scale(1.05); /* Slightly enlarge button on hover */
        }
      `}</style>
    </div>
  );
};

export default Gallery;
