import resume from '../data/resume.json';
import "../styles/resume.css"
export default function Resume() {
  return (
    
    <div className="cv">
      <section className="cv_header">
        <div className="cv_fullname">{resume.header.fullname}</div>
        <div className="cv_title">{resume.header.title}</div>
        <div className="cv_items">
          <span className="cv_item">{resume.header.location}</span>
          <span className="cv_item">{resume.header.mobile_number}</span>
          <a href={'mailto:'+resume.header.email}><span className="cv_item">{resume.header.email}</span></a>
        </div>
        <div className="cv_items">
          <a href={resume.header.linkedin}> <span className="cv_item">{resume.header.linkedin}</span></a>
          <a href={resume.header.github}><span className="cv_item">{resume.header.github}</span></a>
          </div>
      </section>

      <section className="cv_section">
        <h2 className="cv_section_header">PERSONAL STATEMENT</h2>
        <hr />
        <p className="cv_statement_text">{resume.statement}</p>
      </section>
            
      <section className="cv_section">
        <h2 className="cv_section_header">TECHNICAL SKILLS</h2>
        <hr />
        {resume.technical_skills.map(skill=> {
          return(
            <div>
              <span className="cv_type">{skill.type}:</span><span className="cv_value">{skill.value}</span>
            </div>
          )
        })}
      </section>
           
      <section className="cv_section">
      <h2 className="cv_section_header">PROFESSIONAL EXPERIENCE</h2>
      <hr />
      {resume.professional_experience.map(experience=> {
          return(
            <div className="cv_subsection">
            <div>
              <span className="cv_type">{experience.name}, {experience.location}</span>
            </div>
            <div>
              <span className="cv_subline">{experience.title}, {experience.start_date}, {experience.end_date}</span>
            </div>
            {experience.tasks.map(task=> {
              return (<>
              <div className="cv_task"><div className="cv_dot"></div>{task}</div>
              </>
                
              )
            })}
            
            </div>
          )
        })}
      </section>
            
      <section className="cv_section">
      <h2 className="cv_section_header">EDUCATION</h2>
      <hr />
      {resume.education.map(place=> {
        return (
          <div className="cv_education">
            <div className="cv_education_left">{place.name}, {place.department}, {place.location} </div>
            <div className="cv_education_right">{place.degree}, {place.end_date}</div>
          </div>
        )
      })}

      </section>
            
      <section className="cv_section">
      <h2 className="cv_section_header">RESEARCH EXPERIENCE</h2>
      <hr />

      {resume.research_experience.map(experience=> {
          return(
            <div className="cv_subsection">
            <div>
              <span className="cv_type">{experience.name}, {experience.location}</span>
            </div>
            <div>
              <span className="cv_subline">{experience.department}, {experience.start_date}, {experience.end_date}</span>
            </div>
            {experience.tasks.map(task=> {
              return (<>
              <div className="cv_task"><div className="cv_dot"></div>{task}</div>
              </>
                
              )
            })}
            
            </div>
          )
        })}
      </section>
      
      <section className="cv_section">
      <h2 className="cv_section_header">CERTIFICATES AND TUTORIALS</h2>
      <hr />
      {resume.certificates_and_tutorials.map(place=> {
        return (
          <div className="cv_education">
            <div className="cv_education_left">{place.name} </div>
            <div className="cv_education_right">{place.end_date}</div>
          </div>
        )
      })}
      </section>
    </div>
  );
};

/*
{
	"header": {
		"fullname": "Chetin Baloglu",
		"title": "Software Engineer",
		"location": "Cambridge, UK",
		"mobile_number": "07778768830",
		"email": "baloglu@gmail.com",
		"linkedin": "https://www.linkedin.com/in/cetinbaloglu/",
		"github": "https://github.com/baloglu"
	},
	"statement": "I am a highly motivated Software Engineer, proficient in modern web development techniques, good problem-solving and communication skills. I am committed to staying up-to-date with the latest industry trends and continuously improving my skills to ensure that I remain competitive in my field.",
	"technical_skills": [
    {
			"type": "Programming Languages",
			"values": "JavaScript, Python"
		},
		{
			"type": "Cloud Computing",
			"values": "Experience and familiarity with AWS and Google Cloud"
		},
		{
			"type": "Front End",
			"values": "React, React Native, Vue, Angular, Tailwind, HTML, CSS"
		},
		{
			"type": "Back End",
			"values": "Firebase, Express, Flask, Postgresql, Docker, SQL"
		},
		{
			"type": "Testing",
			"values": "Jest, Cypress, Pytest"
		},
		{
			"type": "Machine Learning",
			"values": "Tensorflow"
		}
	],
	"professional_experience": [{
			"name": "Northcoders",
			"location": "Manchester, UK",
			"title": "Trainee Developer",
			"start_date": "March 2023",
			"end_date": "June 2023",
			"tasks": [
				"I participated in the government funded skills bootcamp in coding where we studied the fundamentals and best practices of full stack programming by using test-driven development and pair programming."
			]
		},
		{
			"name": "Sano Genetics",
			"location": "London, UK",
			"title": "Fullstack Engineer",
			"start_date": "October 2022",
			"end_date": "February 2023",
			"tasks": [
				"Developing API backends using Flask, adhering to RESTful principles and utilizing Peewee for database access.",
				"Developing and maintaining the admin portal using Nuxt, Vuex and Tailwind.",
				"Writing test cases for both backend and frontend using Pytest and Cypress.",
				"Collaborating with other developers using Git and leveraging CircleCI for continuous integration and development purposes."
			]
		},
		{
			"name": "AlphaCRC",
			"location": "Cambridge, UK",
			"title": "Software Developer",
			"start_date": "February 2019",
			"end_date": "October 2022",
			"tasks": [
				"Developing data rich custom web applications for clients and employees.",
				"Developing a new version of Alpha’s workflow management application (WORX).",
				"Developing automation tools using python, generating charts and tables in web applications."
			]
		},
		{
			"name": "AlphaCRC",
			"location": "Cambridge, UK",
			"title": "QA Engineer",
			"start_date": "October 2013",
			"end_date": "February 2019",
			"tasks": [
				"Functional and linguistic tests of web and mobile applications."
			]
		},
		{
			"name": "Eagle Genomics",
			"location": "Babraham Research Campus, Cambridge, UK",
			"title": "Internship",
			"start_date": "June 2013",
			"end_date": "August 2013",
			"tasks": [
				"Writing a perl program for haplotype extraction using 1000 Genomes project."
			]
		}

	],
	"education": [{
			"name": "University of Cambridge",
			"department": "MRC - Centre for Protein Engineering",
			"location": "UK",
			"degree": "PhD",
			"end_date": "April 2010"
		},
		{
			"name": "Sabanci University",
			"department": "Biological Sciences",
			"location": "TR",
			"degree": "MSc",
			"end_date": "September 2005"
		},
		{
			"name": "Middle East Technical University",
			"department": "Biological Sciences",
			"location": "TR",
			"degree": "BSc",
			"end_date": "January 2001"
		}
	],
	"research_experience": [{
			"name": "PhD, University of Cambridge",
			"location": "Cambridge, UK",
			"department": "Biological Sciences at Centre for Protein Engineering",
			"start_date": "October 2005",
			"end_date": "April 2010",
			"tasks": [
				"Studied the subdomain interactions of the tumour suppressor protein p53.",
				"Uncovered a domain-domain interaction that might redefine the borders of p53 core domain which is highly targeted by drug designers.",
				"Reported the stability effect of this interaction.",
				"Used Molecular Biology techniques such as cloning, mutagenesis, isotopic labeling, protein expression and purification.",
				"Analysed NMR, Fluorescence, Mass and CD Spectroscopies.",
				"Used Calorimetric technologies like DSC and DSF."
			]
		},
		{
			"name": "MSc, Sabanci University",
			"location": "Istanbul, TR",
			"department": "Biological Sciences at Faculty of Engineering and Natural Sciences",
			"start_date": "October 2002",
			"end_date": "September 2005",
			"tasks": [
				"Studied refolding kinetics of lysozyme by NMR spectral analyses and molecular dynamics (MD).",
				"Setup a Rocks high performance computing cluster by using open MPI libraries for the University."
			]
		}
	],
	"certificates_and_tutorials": [{
			"name": "Kaggle, Certificate of completion - Python",
			"end_date": "2021"
		},
		{
			"name": "Kaggle, Intermediate machine learning",
			"end_date": "2021"
		},
		{
			"name": "Kaggle, Intro to Machine learning",
			"end_date": "2021"
		},
		{
			"name": "Python Basics & Python Bioinformatics, University of Cambridge, UK",
			"end_date": "2008"
		}
	]
}
*/