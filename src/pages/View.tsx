import { Fragment, useEffect, useState } from 'react'
import {
  resume__address,
  resume__education,
  resume__email,
  resume__name,
  resume__number,
  resume__professional__summary,
  resume__work__history,
} from '../lib/localStorageItems'
import { localStorageGetAndSetState, localStorageGetParseAndSetState } from '../lib/utils'
import '../styles/css/View.css'

const View = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [number, setNumber] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [professionalSummary, setProfessionalSummary] = useState<string>('')

  const [workHistory, setWorkHistory] = useState<
    {
      title: string
      tenure: string
      location: string
      descriptions: string[]
    }[]
  >([])
  const [educations, setEducations] = useState<
    {
      degree: string
      university: string
      location: string
      year: string
    }[]
  >([])

  useEffect(() => {
    localStorageGetAndSetState(resume__name, setName)
    localStorageGetAndSetState(resume__email, setEmail)
    localStorageGetAndSetState(resume__number, setNumber)
    localStorageGetAndSetState(resume__address, setAddress)
    localStorageGetAndSetState(resume__professional__summary, setProfessionalSummary)
    localStorageGetParseAndSetState<typeof workHistory>(resume__work__history, setWorkHistory)
    localStorageGetParseAndSetState<typeof educations>(resume__education, setEducations)
  }, [])

  return (
    <div className='resume'>
      <div className='resume__name'>
        <h1>{name}</h1>
      </div>

      <hr />
      <hr />

      <div className='resume__contact'>
        <p>
          {address}, {number}, {email}
        </p>
      </div>

      <div className='resume__summary'>
        <h2>Professional Summary</h2>
        <p>{professionalSummary}</p>
      </div>

      <div className='resume__work__history'>
        <h2>Work History</h2>
        <div className='resume__work__history__section'>
          {workHistory.map((work, index) => (
            <Fragment key={index}>
              <h3>{work.title}</h3>
              <h4>{work.location}</h4>
              <ul>
                {work.descriptions.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
            </Fragment>
          ))}
        </div>
      </div>

      <div className='resume__education'>
        <h2>Education</h2>

        {educations.map((education, index) => (
          <div className='resume__education__item'>
            <h3>
              {education.university} - {education.degree} - {education.year}
            </h3>
            <h4>{education.location}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default View
