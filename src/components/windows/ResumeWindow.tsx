import { Download, Mail, Github, Linkedin, MapPin } from 'lucide-react';

export default function ResumeWindow() {
  return (
    <div className="p-8 h-full overflow-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-extralight tracking-wider text-white mb-1">
            Sudiksha Srivastav
          </h1>
          <p className="text-sm text-white/50 mb-4 font-light tracking-wider">
            AI Engineer · Researcher · Builder
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-white/40">
            <span className="flex items-center gap-1.5">
              <Mail size={11} /> sudiksha241206@gmail.com
            </span>
            <span className="flex items-center gap-1.5">
              <Linkedin size={11} /> LinkedIn
            </span>
            <span className="flex items-center gap-1.5">
              <Github size={11} /> GitHub
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={11} /> Noida, India
            </span>
          </div>
        </div>
        <a
          href="#"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs tracking-wider text-white/70"
          style={{
            background: 'rgba(34,211,238,0.08)',
            border: '1px solid rgba(34,211,238,0.2)',
            transition: 'all 0.2s ease',
          }}
        >
          <Download size={12} /> Download PDF
        </a>
      </div>

      <div className="w-full h-px bg-white/5 mb-8" />

      {/* Professional Summary */}
      <ResumeSection title="Professional Summary">
        <p className="text-sm text-white/60 leading-relaxed font-light">
          B.Tech Biotechnology student at JIIT Noida (Minor: AI & ML) concurrently pursuing BS in
          Data Science from IIT Madras. Proficient in Python, Machine Learning, Computer Vision,
          and AWS. Experienced in building AI-driven systems for healthcare and surveillance
          domains.
        </p>
      </ResumeSection>

      {/* Education */}
      <ResumeSection title="Education">
        <div className="space-y-4">
          <EducationItem
            degree="B.Tech in Biotechnology — Minor in AI & Machine Learning"
            org="Jaypee Institute of Information Technology"
            period="2024 – 2028"
            location="Noida, India"
          />
          <EducationItem
            degree="BS in Data Science and Applications"
            org="Indian Institute of Technology, Madras"
            period="2024 – 2028"
            location="Chennai, India"
          />
        </div>
      </ResumeSection>

      {/* Technical Skills */}
      <ResumeSection title="Technical Skills">
        <div className="space-y-2 text-sm text-white/60 font-light">
          {[
            ['Languages', 'C/C++, Python, JavaScript, HTML, CSS, SQL'],
            ['Databases', 'MongoDB, MySQL'],
            ['Frameworks & Libraries', 'FastAPI, Pandas, NumPy, Scikit-learn, YOLOv8, OpenCV, MTCNN'],
            ['Tools & Platforms', 'Git, GitHub, Streamlit, AWS (S3, EC2, Lambda), REST APIs, VS Code'],
            ['Areas of Interest', 'Machine Learning, Computer Vision, Web Development, Cloud Computing'],
          ].map(([key, value]) => (
            <div key={key} className="flex gap-2">
              <span className="text-white/40 flex-shrink-0 w-40">{key}:</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </ResumeSection>

      {/* Projects */}
      <ResumeSection title="Projects">
        <div className="space-y-4">
          {[
            {
              title: 'Fake News Detector',
              stack: 'Python, ML, Vercel',
              bullets: [
                'Built and deployed an ML web app to classify news articles as real or fake with real-time predictions.',
                'Deployed on Vercel with 5 production deployments; integrated static frontend with Python ML backend.',
              ],
            },
            {
              title: 'AI + EI Based Smart Surveillance System',
              stack: 'Python, OpenCV, YOLOv8, MTCNN, FastAPI',
              bullets: [
                'Built real-time CCTV surveillance detecting suspicious behavioral patterns with ~85% emotion classification accuracy.',
                'Implemented multi-face tracking (up to 10 subjects/frame); automated FastAPI alerts reduced manual review time by 40%.',
              ],
            },
            {
              title: 'ICU Patient Monitoring & Error Detection System',
              stack: 'Python, ML, AWS, Streamlit, Pandas',
              bullets: [
                'Developed ML-based anomaly detection on patient vitals with 80%+ precision, deployed on AWS (S3 + EC2).',
                'Delivered Streamlit dashboard for multi-patient monitoring with alert escalation for critical vitals.',
              ],
            },
            {
              title: 'Cloud-Based Biotechnology Workflow Automation',
              stack: 'Python, AWS, Streamlit, Pandas',
              bullets: [
                'Automated biotech workflows on AWS processing 500+ records/batch, reducing manual effort by ~50%.',
                'Implemented automated data logging and report generation.',
              ],
            },
          ].map((p) => (
            <div key={p.title}>
              <div className="flex items-baseline gap-2 mb-1">
                <h4 className="text-sm text-white/80 font-light">{p.title}</h4>
                <span className="text-xs text-white/30">| {p.stack}</span>
              </div>
              <ul className="space-y-1">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-white/50 font-light">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-400/40 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ResumeSection>

      {/* Certifications */}
      <ResumeSection title="Certifications & Courses">
        <div className="space-y-1.5">
          {[
            ['Machine Learning A-Z: AI, Python & R', 'Udemy', '2025'],
            ['AWS Certified Cloud Practitioner: Complete Course', 'Udemy', '2025'],
            ['100 Days of Code: The Complete Python Pro Bootcamp', 'Udemy', '2025'],
            ['Mastering Data Structures & Algorithms using C and C++', 'Udemy', '2025'],
            ['SQL-MySQL Complete Master Bootcamp: Beginner to Expert', 'Udemy', '2025'],
          ].map(([title, platform, year]) => (
            <div key={title} className="flex items-center justify-between text-sm">
              <span className="text-white/60 font-light">{title}</span>
              <span className="text-white/30 text-xs flex-shrink-0 ml-4">
                {platform} · {year}
              </span>
            </div>
          ))}
        </div>
      </ResumeSection>

      {/* Positions */}
      <ResumeSection title="Positions of Responsibility">
        <div>
          <div className="flex items-baseline justify-between mb-2">
            <h4 className="text-sm text-white/80 font-light">Volunteer — IEEE Student Branch</h4>
            <span className="text-xs text-white/30">2025 – 2026</span>
          </div>
          <p className="text-xs text-white/40 mb-2">IEEE Student Branch · JIIT Noida</p>
          <ul className="space-y-1">
            {[
              'Organized technical events and workshops; managed logistics to drive student participation.',
              'Coordinated with faculty and professionals to facilitate knowledge-sharing sessions.',
              'Promoted IEEE membership drives and contributed to growing the student branch community.',
            ].map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-white/50 font-light">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-400/40 flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </ResumeSection>
    </div>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="text-xs font-light tracking-[0.3em] uppercase text-cyan-400/70 mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}

function EducationItem({
  degree,
  org,
  period,
  location,
}: {
  degree: string;
  org: string;
  period: string;
  location: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h4 className="text-sm text-white/80 font-light mb-0.5">{degree}</h4>
        <p className="text-xs text-white/50">{org}</p>
      </div>
      <div className="text-right flex-shrink-0">
        <p className="text-xs text-white/40">{period}</p>
        <p className="text-xs text-white/30">{location}</p>
      </div>
    </div>
  );
}
