const ResumePreview = ({ cvData }) => {
  const {
    personalInformation,
    experience,
    project,
    education,
    skills,
  } = cvData;

  const formatMonthYear = (value) => {
    if (!value) return "";

    const [year, month] = value.split("-");
    const date = new Date(year, month - 1);

    return date.toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

    const formatPhoneNumber = (value) => {
        if (!value) return "";

        // Remove all non-numeric characters
        const digits = value.replace(/\D/g, "");

        // US number (10 digits)
        if (digits.length === 10) {
            return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
        }

        // US number with country code (11 digits starting with 1)
        if (digits.length === 11 && digits.startsWith("1")) {
            return `+1 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
        }

        return value;
    };


  return (
    <div className="view">
      <div className="resume-preview">

        {/* ===== Header ===== */}
        <header className="resume-header">
          <h1 className="resume-name">
            {personalInformation.firstName && personalInformation.lastName
              ? `${personalInformation.firstName} ${personalInformation.lastName}`.toUpperCase()
              : "YOUR NAME"}
          </h1>

          <div className="resume-contact">
            {personalInformation.phone && (
              <span>{formatPhoneNumber(personalInformation.phone)}</span>
            )}
            {personalInformation.email && (
              <span>{personalInformation.email}</span>
            )}
            {personalInformation.linkedIn && (
              <a
                href={personalInformation.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            )}
            {personalInformation.github && (
              <a
                href={personalInformation.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
          </div>
        </header>

        {/* ===== Experience ===== */}
        {experience.length > 0 && (
          <section className="resume-section">
            <h2>Experience</h2>

            {experience.map(exp => (
              <div key={exp.id} className="resume-item">
                <div className="resume-item-header">
                  <strong>{exp.position}</strong>
                  <span>
                    {formatMonthYear(exp.startDate)} – {formatMonthYear(exp.endDate)}
                  </span>
                </div>

                <div className="resume-item-sub">
                  {exp.company}
                </div>

                {exp.description && (
                  <p>{exp.description}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* ===== Projects ===== */}
        {project.length > 0 && (
          <section className="resume-section">
            <h2>Projects</h2>

            {project.map(proj => (
              <div key={proj.id} className="resume-item">
                <div className="resume-item-header">
                    <strong>{proj.title}</strong>
                </div>

                {proj.description && (
                  <p>{proj.description}</p>
                )}

                {proj.technologies?.length > 0 && (
                  <p className="resume-tech">
                    <strong>Tech:</strong> {proj.technologies.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* ===== Education ===== */}
        {education.length > 0 && (
          <section className="resume-section">
            <h2>Education</h2>

            {education.map(edu => (
              <div key={edu.id} className="resume-item">
                <div className="resume-item-header">
                  <strong>{edu.school}</strong>
                  <span>
                    {formatMonthYear(edu.startDate)} – {formatMonthYear(edu.endDate)}
                  </span>
                </div>

                <div className="resume-item-sub">
                  {edu.degree} {edu.location && `• ${edu.location}`}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* ===== Skills ===== */}
        {(skills.languages.length > 0 || skills.frameworks.length > 0) && (
          <section className="resume-section">
            <h2>Skills</h2>

            {skills.languages.length > 0 && (
              <p>
                <strong>Languages:</strong> {skills.languages.join(", ")}
              </p>
            )}

            {skills.frameworks.length > 0 && (
              <p>
                <strong>Frameworks:</strong> {skills.frameworks.join(", ")}
              </p>
            )}
          </section>
        )}

      </div>
    </div>
  );
};

export default ResumePreview;