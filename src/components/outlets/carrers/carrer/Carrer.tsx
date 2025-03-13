import "./Carrer.css"

function Carrer({postName, postDescription, jobContext, vacancy, nature, requirements, exp, range, first, second, color, ref} : {postName: string, postDescription: string, jobContext: string[], vacancy: number, nature: string, requirements: string, exp: string, range: string, first: string, second: string, color: string, ref: string}) {
  return (
    <div className="carr-wrap">
      <div className='carrer-container' style={{background: `linear-gradient(90deg, ${first}, ${second})`, color: `${color}`}}>
        <div className="name-and-description">
          <h1>{postName}</h1>
          <div className="post-description">
            {postDescription}
          </div>
        </div>
        <div className="job-context">
          <h1>Post Context</h1>
          <div className="contexts">
            {
              jobContext.map((context, index) => (
                <li key={index}>{context}</li>
              ))
            }
          </div>
        </div>
        <div className="vacancy">
          <span><strong>Vacancy :</strong> {vacancy}</span>
        </div>
        <div className="job-nature">
          <span><strong>Job Nature :</strong> {nature}</span>
        </div>
        <div className="requirements">
          <span><strong>Educational Requirements :</strong> {requirements}</span>
        </div>
        <div className="experience">
        <span><strong>Experience :</strong> {exp}</span>
        </div>
        <div className="range">
          <span><strong>Salary Range :</strong> {range}</span>
        </div>
      </div>
      <a  href={ref} style={{background: `linear-gradient(90deg, ${first}, ${second})`, color: `${color}`}} target="_blank">Apply Now</a>
    </div>
  )
}

export default Carrer