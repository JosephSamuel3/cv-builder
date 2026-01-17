
const NAVS = [
   {id: "personal-info", label: "Personal information"},
   {id: "experience", label: "Work experience"},
   {id: "project", label: "Projects"},
   {id: "education", label: "Education"},
   {id: "skills", label: "Skills"}
]

const  NavButtons = ({ activeNav, onChange }) => {
    return (
        <div className="nav-buttons">
            {NAVS.map((nav) => (
                <button
                    key={nav.id}
                    className={`nav-btn ${activeNav === nav.id ? "active" : ""}`}
                    onClick={() => onChange(nav.id)}
                >
                    {nav.label}
                </button>
            ))}
        </div>
    )
}

export default NavButtons