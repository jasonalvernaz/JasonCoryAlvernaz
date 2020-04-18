import { navigate } from 'gatsby'
import { submitFormData } from 'utils/helpers'
import {
  FormHeadingStyles,
  FormStyles,
  SectionStyles,
} from 'styles'
import React, {
  useCallback,
} from 'react'

const Contact = () => {
  const [state, setState] = React.useState({})

  const handleChange = useCallback(
    e => {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      })
    },
    [setState]
  )

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      submitFormData(e, state)
      navigate('/thanks')
    },
    [submitFormData]
  )

  const { name, email, subject, message } = state

  return (
    <SectionStyles className="contact">
      <FormHeadingStyles>
        <h2>Let&apos;s Create Something Beautiful!</h2>
      </FormHeadingStyles>
      <FormStyles
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="post"
        name="contact"
        onSubmit={handleSubmit}
      >
        <input name="form-name" type="hidden" value="contact" />
        <input name="bot-field" onChange={handleChange} type="hidden" />
        <input
          aria-label="Enter Name"
          name="name"
          onChange={handleChange}
          placeholder="Name"
          required
          type="text"
          value={name}
        />
        <input
          aria-label="Enter Email Address"
          name="email"
          onChange={handleChange}
          placeholder="Email"
          required
          type="email"
          value={email}
        />
        <input
          aria-label="Enter Subject"
          className="subject"
          name="subject"
          onChange={handleChange}
          placeholder="Subject"
          required
          type="text"
          value={subject}
        />
        <textarea
          aria-label="Enter Message"
          className="message"
          name="message"
          onChange={handleChange}
          placeholder="What can I create for you?"
          required
          type="text"
          value={message}
        />
        <button
          disabled={!name || !email || !subject || !message}
          type="submit"
        >
          Send Email
        </button>
      </FormStyles>
    </SectionStyles>
  )
}

export default Contact
