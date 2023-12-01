import './index.css'

import {Link} from 'react-router-dom'

import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsBriefcaseFill} from 'react-icons/bs'

const JobItem = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobDetails

  return (
    <li className="job-item">
      <Link to={`/jobs/${id}`} className="link-item">
        <div className="company-and-role-container">
          <img
            src={companyLogoUrl}
            alt="company logo"
            className="job-item-company-logo"
          />
          <div className="job-item-role-container">
            <h1 className="job-item-role-title">{title}</h1>
            <div className="job-item-rating-container">
              <AiFillStar className="job-item-star-icon" />
              <p className="job-item-rating">{rating}</p>
            </div>
          </div>
        </div>
        <div className="job-item-other-details-container">
          <div className="job-item-location-and-type-container">
            <div className="job-item-location-container">
              <MdLocationOn className="job-item-location-icon" />
              <p className="job-item-location">{location}</p>
            </div>
            <div className="job-item-type-container">
              <BsBriefcaseFill className="job-item-type-icon" />
              <p className="job-item-type">{employmentType}</p>
            </div>
          </div>
          <p className="package">{packagePerAnnum}</p>
        </div>
        <hr width="100%" />
        <div className="job-item-description-container">
          <h1 className="job-item-description-heading">Description</h1>
          <p className="job-item-description">{jobDescription}</p>
        </div>
      </Link>
    </li>
  )
}

export default JobItem
