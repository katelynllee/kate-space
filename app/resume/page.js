export default function ResumePage() {
    return (
      <main style={{ padding: "2rem" }}>
        <h1>Resume</h1>
        <p>You can download my resume below:</p>
        <a href="/resume.pdf" download style={{ color: "blue" }}>Download Resume (PDF)</a>
      </main>
    );
}