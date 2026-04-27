import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume">
      <header className="header">
        <h1>Mrunali Vaidya</h1>
        <p>📧 vaidyamrunalimanoha@cityuniversity.edu | 📍 Lynnwood, WA | 📱 425-534-0140</p>
        <p>🔗 linkedin.com/in/mrunali-vaidya/</p>
      </header>

      <section className="section">
        <h2>Professional Summary</h2>
        <p>
          MSCS student and full-stack developer with 4.5+ years of experience
          delivering scalable web and enterprise applications. Proven track
          record of optimizing workflows by 25–30%, handling high-volume
          transactions, and improving system reliability, seeking a software
          engineering internship to apply full-stack and AI/ML expertise in
          building high-performance solutions.
        </p>
      </section>

      <section className="section education">
        <h2>Education</h2>
        <h3>City University of Seattle</h3>
        <p>MS in Computer Science</p>

        <h3>Rashtrasant Tukdoji Maharaj University, Nagpur</h3>
        <p>B.E. in Electronics and Communications, Jun 2020</p>
      </section>

      <section className="section skills">
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Programming & Backend:</strong> Java, Python, Go, C#, SQL, Shell scripting, RESTful APIs, Hibernate</li>
          <li><strong>Frontend & UI:</strong> Angular 14/16+, HTML5, CSS3, TypeScript, Angular Material</li>
          <li><strong>Databases & Storage:</strong> MySQL, Oracle, PostgreSQL, MongoDB, Redis, DynamoDB</li>
          <li><strong>Web & Cloud Technologies:</strong> Spring Boot, Flask, AWS, Azure, Terraform, Kubernetes, CI/CD pipelines</li>
          <li><strong>Development Tools:</strong> Git, GitHub, Maven, Postman, Swagger, Apache Tomcat, JBoss, Docker, Jenkins</li>
          <li><strong>AI/ML:</strong> OpenCV, Hugging Face, Emotion Detection, Flask</li>
          <li><strong>Other Skills:</strong> Full-stack development, AI/ML integration, real-time data processing, application optimization, performance tuning</li>
        </ul>
      </section>

      <section className="section experience">
        <h2>Work Experience</h2>

        <h3>Software Engineer | Sidan Global Solutions</h3>
        <p>Dec 2023 – Mar 2025</p>
        <p><strong>Project:</strong> LendPerfect | <strong>Domain:</strong> Banking | <strong>Client:</strong> Central Bank of India</p>
        <ul>
          <li>Developed and enhanced modules for the Loan Origination System supporting retail, corporate, and agricultural loans, improving loan processing efficiency by 30%.</li>
          <li>Automated critical loan workflows such as verification and approval by developing a Loan Verification and Approval API, reducing manual intervention and turnaround time by 25%.</li>
          <li>Enhanced loan eligibility and credit assessment mechanisms by implementing an Eligibility and Credit Check API with dynamic validations and improved business logic.</li>
          <li>Optimized customer onboarding and KYC verification, cutting redundant steps and accelerating user verification by 40%.</li>
          <li>Built interactive loan tracking and reporting dashboards for branch managers, enabling faster decision-making and greater operational transparency.</li>
          <li>Refined business logic for interest calculations and repayment scheduling through an Interest and Repayment Calculation API, minimizing financial discrepancies and manual adjustments.</li>
          <li>Collaborated with banking teams to gather functional requirements and translate them into system enhancements aligned with operational goals.</li>
          <li>Ensured smooth post-deployment support and issue resolution, maintaining 99.9% system availability for critical loan operations.</li>
        </ul>

        <h3>Software Developer | C L Infotech Ltd.</h3>
        <p>Jun 2020 – Nov 2023</p>
        <p><strong>Project:</strong> AXI | <strong>Domain:</strong> Capital Market Domain</p>
        <ul>
          <li>Developed, tested, and deployed trade processing and order management workflows, enabling 20% faster trade execution and reducing order processing errors.</li>
          <li>Designed and validated risk monitoring and compliance modules to track exposure, credit limits, and regulatory thresholds, decreasing potential compliance violations by 15%.</li>
          <li>Automated post-trade processes, including trade confirmation, reconciliation, and settlement tracking, cutting manual effort by 30% and minimizing transaction errors.</li>
          <li>Integrated, tested, and deployed real-time market data feeds and portfolio synchronization services, improving the timeliness and accuracy of trader and analyst decision-making by 25%.</li>
        </ul>
      </section>

      <section className="section projects">
        <h2>Projects</h2>

        <h3>NeoBank 360 – Intelligent Digital Banking Platform</h3>
        <p><strong>Tech Stack:</strong> Spring Boot | Angular | MySQL | Redis</p>
        <ul>
          <li>Built a digital banking application supporting real-time fund transfers, fraud detection, and transaction analytics.</li>
          <li>Optimized API performance with Redis caching and JWT-based authentication.</li>
        </ul>

        <h3>SmartAgentX – AI-Powered Financial Assistant</h3>
        <p><strong>Tech Stack:</strong> Spring Boot | Angular | MongoDB | OpenAI API</p>
        <ul>
          <li>Developed an AI agent that analyzes user spending and provides real-time investment recommendations.</li>
          <li>Automated financial insights and forecasting using OpenAI integration and secure data aggregation microservices.</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;