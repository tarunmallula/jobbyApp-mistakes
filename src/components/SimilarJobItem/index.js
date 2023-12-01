import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsBriefcaseFill} from 'react-icons/bs'
import './index.css'

const SimilarJobItem = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = jobDetails

  return (
    <li className="similar-job-container">
      <div className="similar-job-company-log-role-container">
        <img
          className="similar-job-company-logo"
          src={companyLogoUrl}
          alt="similar job company logo"
        />
        <div className="similar-job-role-container">
          <h1 className="similar-job-role-title">{title}</h1>
          <div className="similar-job-rating-container">
            <AiFillStar className="similar-job-star-icon" />
            <p className="similar-job-rating">{rating}</p>
          </div>
        </div>
      </div>

      <div className="similar-job-description-container">
        <h1 className="similar-job-description-heading">Description</h1>
        <p className="similar-job-description">{jobDescription}</p>
      </div>
      <div className="similar-job-other-details-container">
        <div className="similar-job-location-and-type-container">
          <div className="similar-job-location-container">
            <MdLocationOn className="similar-job-location-icon" />
            <p className="similar-job-location">{location}</p>
          </div>
          <div className="similar-job-type-container">
            <BsBriefcaseFill className="similar-job-type-icon" />
            <p className="similar-job-type">{employmentType}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobItem